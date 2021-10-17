const router = require("express").Router();
const { Job, Company } = require("../../models");
const { catchErrors, checkToken, hasAdminRight } = require("../../middlewares");
const cache = require("../../redis-cache");

router.get("/jobs", catchErrors(async (req, res) => {
    cache.get("jobs", async (err, jobs) => {
        if (err) {
            throw err;
        }

        if (jobs) {
            return res.status(200).json(JSON.parse(jobs));
        }


        jobs = await Job.findAll({
            include: [{
                model: Company,
                attributes: ['name', 'image'],
                as: "Company"
            }]
        });

        cache.setex("jobs", 60, JSON.stringify(jobs))
        return res.status(200).json(jobs);
    })
}))


router.get("/job/company/:id", catchErrors(async (req, res) => {
    const { id } = req.params;

    if (!id) {
        return res.status(200).json({ error: "Bad request !" });
    }


    const jobs = await Job.findAll({
        where: { companyId: id },
        include: [{
            model: Company,
            attributes: ['name', 'image', 'description'],
            as: "Company"
        }]
    });
    if (!jobs || !jobs.length) {
        return res.status(404).json({ error: "Not found !" });
    }

    return res.status(200).json(jobs);
}))


router.get("/job/:id", catchErrors(async (req, res) => {
    const { id } = req.params;


    if (!id) {
        return res.status(400).json({ error: "Bad request !" });
    }

    const job = await Job.findOne({
        where: { id },
        include: [{
            model: Company,
            attributes: ['id', 'name', 'image'],
            as: "Company"
        }]
    });

    if (!job) {
        return res.status(404).json({ error: "Not found !" });
    }

    return res.status(200).json(job);
}))


router.post("/job", checkToken, hasAdminRight, catchErrors(async (req, res) => {
    const job = Job.create({
        ...req.body,
        createdAt: new Date()
    }).then(job => {
        job.getCompany().then(company => {
            job.dataValues.Company = company;
            return res.status(200).json(job);
        })
    }).catch(err => {
        return res.status(400).json(err);
    })

}));


router.put("/job/:id", checkToken, catchErrors(async (req, res) => {
    const { id } = req.params;

    Job.findOne({
        where: {
            id
        }
    }).then(function (job) {
        return job.update({
            ...req.body,
            updatedAt: new Date()
        });
    }).then(function (job) {
        job.getCompany().then(company => {
            job.dataValues.Company = company;
            return res.status(200).json(job)
        })
    }).catch(err => {
        return res.status(400).json({ message: "Job not found" });
    })

}))



router.delete("/job/:id", checkToken, catchErrors(async (req, res) => {
    const { id } = req.params;

    if (!id) {
        return res.status(400).json({ error: "Bad request !" });
    }

    const job = await Job.destroy({ where: { id } });

    if (!job) {
        return res.status(404).json({ error: "Not found !" });
    }

    return res.status(200).json({ message: "Deleted from database" });
}))




module.exports = router;