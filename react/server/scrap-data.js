require('dotenv').config();
const axios = require("axios").default;
const sharp = require('sharp');
const fs = require("fs");
const cheerio = require("cheerio");
const db = require("./src/models");

db.sequelize.authenticate().then(_ => {
    console.log("Connected to database");
}).catch(err => {
    throw err;
})



const rootJobUrl = "https://www.hackerrank.com/jobs/search";
const root = "https://www.hackerrank.com/"
const Company = new Map();
const Job = new Map();

const fetchHTML = async (url) => {
    const { data } = await axios.get(url, {
        headers: {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Safari/537.36"
        }
    });
    return cheerio.load(data)
}


const fetchJob = url => {
    return new Promise(async (resolve, reject) => {
        const $ = await fetchHTML(root + url);

        const description = $("div.text-content").html();
        let income = $(".ui-icon-cash");

        if (income.length) {
            income = $(income).parent().text().trim();
        } else {
            income = "";
        }
        resolve({
            description,
            income
        })
    })
}


const downloadFile = (url, companyName) => {
    companyName = companyName.replace(/\s/g, "");
    let realPath = "./public/images/" + `${companyName}.png`;


    axios({
        method: 'get',
        url: url,
        responseType: "arraybuffer",
        headers: {
            "Referer": root,
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Safari/537.36"
        }
    }).then(res => {
        let type = res.headers['content-type'];
        if (type.includes("svg")) {
            sharp(res.data).png().toFile(realPath);
        } else {
            fs.writeFile(realPath, res.data, {
            }, (err) => {
                if (err) throw er;
            })
        }
    }).catch(err => {
        console.log(err);
        console.log(url + "failed to fetch");
        process.exit();
    })

    return `${companyName}.png`;
}


(async function () {
    await new Promise(async (resolve, reject) => {
        const $ = await fetchHTML(rootJobUrl);
        let jobs = $(".jobs-list .job-card");
        let fetched = 0;
        $(jobs).each(async function (i, $jobCard) {
            const jobUrl = $($jobCard).attr("href");
            const $parent = $($jobCard).find(".card-content");
            let imageUrl = $($parent).find(".job-card-logo");
            if (!$(imageUrl).length) {
                return true;
            }
            imageUrl = $(imageUrl).attr("src");


            const title = $($parent).find("h2").text().trim();
            const companyName = $($parent).find("span").text().trim();

            const li = $parent.find(".job-card-detail li").toArray();

            const localisation = $(li[0]).text().trim();
            const experienceRequired = $(li[1]).text().trim();

            if (!Company.get(companyName)) {
                Company.set(companyName, {
                    name: companyName,
                    description: "",
                    employees: 0,
                    image: downloadFile(imageUrl, companyName)
                })
            }
            fetchJob(jobUrl).then(res => {
                Job.set(i, {
                    title,
                    companyName,
                    localisation,
                    experienceRequired,
                    ...res
                });
                fetched++;
                if (fetched == jobs.length - 1) resolve();
            })
        })
    })

    const companyToiD = new Map();
    const companyDb = [];
    for ([key, value] of Company.entries()) {
        companyDb.push({
            ...value,
            created_at: new Date(),
        });
    }

    db.Company.bulkCreate(companyDb).then(function (result) {
        for (let i = 0; i < result.length; i++) {
            companyToiD.set(result[i].name, result[i].id);
        }

        const jobDb = [];
        for ([key, value] of Job.entries()) {
            jobDb.push({
                companyId: companyToiD.get(value.companyName),
                ...value,
                created_at: new Date(),
            })
        }
        db.Job.bulkCreate(jobDb).then(function (result) {
            console.log("All jobs registred in the database");
            process.exit();
        }).catch(err => {
            throw err;
        })
    }).catch(err => {
        throw err;
    })
})();

