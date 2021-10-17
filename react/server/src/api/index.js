const router = require("express").Router();
const auth = require("./auth");
const job = require("./job");
const company = require("./company");
const application = require("./application");
const user = require("./user");
const file = require("./file");
const { catchErrors, checkToken, hasAdminRight } = require("../middlewares");
const { Job, Company, User } = require("../models");
const cache = require("../redis-cache");


router.get("/datas", checkToken, hasAdminRight, catchErrors(async (req, res) => {
    cache.get("datas", async function (err, data) {
        if (data) {
            return res.status(200).json(JSON.parse(data));
        }
        const jobs = await Job.findAll({
            attributes: {exclude: ['description']},
            include: [{
                model: Company,
                attributes: ['name', 'image'],
                as: "Company"
            }]
        });
        const companies = await Company.findAll();
        const users = await User.findAll({
            attributes: {exclude: ['password', 'resetPasswordToken', 'resetPasswordExpires']},
        });
        cache.setex("datas", 10, JSON.stringify({
            jobs,
            companies,
            users
        }))
        return res.status(200).json({
            jobs,
            companies,
            users,
        })
    })
}));

router.use("/auth", auth);
router.use("/", job);
router.use("/", company);
router.use("/", application);
router.use("/file", file);
router.use("/", user);

module.exports = router;