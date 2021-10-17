const router = require("express").Router();
const { Company } = require("../../models");
const validator = require("../../validator/company");
const { catchErrors, checkToken, hasAdminRight } = require("../../middlewares");
const { PictureUpload, resize } = require("../../utils/upload/middleware");


router.get("/companys", catchErrors(async (req, res) => {
    const companys = await Company.findAll();
    return res.status(200).json(companys);
}))


router.get("/company/:id", catchErrors(async (req, res) => {
    const { id } = req.params;

    if (!id) {
        return res.status(400).json({ error: "Bad request !" });
    }

    const company = await Company.findOne({ where: { id } });

    if (!company) {
        return res.status(404).json({ error: "Not found !" });
    }

    return res.status(200).json(company);
}))

router.post("/company", checkToken, hasAdminRight, PictureUpload(), resize, catchErrors(async (req, res) => {
    const name = req.body.name;

    if (!name) {
        return res.status(400).json({error: "Bad request"});
    }
    let company = await Company.findOne({ where: { name } });

    if (company) {
        return res.status(409).json({ message: "Company already exist" })
    }

    company = await Company.create({
        ...req.body,
        createdAt: new Date()
    });

    return res.status(200).json(company);
}))

router.put("/company/:id", checkToken, hasAdminRight, catchErrors(async (req, res) => {
    const { id } = req.params;


    if (!id) {
        return res.status(400).json({ error: "Bad request !" });
    }


    Company.findOne({
        where: {
            id
        }
    }).then(function (company) {
        return company.update({
            ...req.body,
            updatedAt: new Date()
        });
    }).then(function (company) {
        return res.status(200).json(company);
    }).catch(err => {
        return res.status(404).json({ message: "Company not found" });
    })
}))


router.delete("/company/:id", checkToken, hasAdminRight, catchErrors(async (req, res) => {
    const { id } = req.params;

    if (!id) {
        return res.status(400).json({ error: "Bad request !" });
    }

    const company = await Company.destroy({
        where: { id },
        individualHooks: true
    });

    if (!company) {
        return res.status(404).json({ error: "Not found !" });
    }

    return res.status(200).json({ message: "Deleted from database" });
}))



module.exports = router;