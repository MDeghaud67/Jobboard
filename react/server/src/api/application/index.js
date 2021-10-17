const router = require("express").Router();
const { Application, Job, User } = require("../../models/");
const { catchErrors, checkToken } = require("../../middlewares");




router.get("/applications", catchErrors(async (req, res) => {
    const applications = Application.findAll();
    return res.status(200).json(applications);
}));


router.get("/application/:id", catchErrors(async (req, res) => {
    const { id } = req.params;

    if (!id) {
        return res.status(400).json({ error: "Bad request !" });
    }

    const application = await Application.findOne({ where: { id } });

    if (!application) {
        return res.status(404).json({ error: "Not found !" });
    }

    return res.status(200).json(application);
}));


router.post("/application", catchErrors(async (req, res) => {
    const id = req.body.jobId;

    if (!id) {
        return res.status(400).json({error: "Bad request !"});
    }

    const job = await Job.findOne({
        where: { id }
    });

    if (!job) {
        return res.status(404).json({error: "No job found !"})
    } 

    const application = await Application.create({
        ...req.body,
        createdAt: new Date(),
    });

    return res.status(200).json(application);
}));


router.post("/auth-application", checkToken, catchErrors(async (req, res) => {
    let user = req.user;

    const id = req.body.jobId;

    if (!id) {
        return res.status(400).json({error: "Bad request !"});
    }


    const job = await Job.findOne({
        where: { id }
    });

    if (!job) {
        return res.status(404).json({error: "No job found !"})
    } 

    user  = await User.findOne({
        where: { id : user.id}
    })

    const application = await Application.create({
        text: req.body.text,
        email: user.email,
        jobId: id,
        createdAt: new Date(),
    });

    return res.status(200).json(application);
}))


router.put("/application", catchErrors(async (req, res) => {
    //here validate input
}))


router.delete("/application/:id", catchErrors(async (req, res) => {
    const { id } = req.params;

    if (!id) {
        return res.status(400).json({ error: "Bad request !" });
    }

    const application = await Application.Destroy({ where: { id } });


    if (!application) {
        return res.status(404).json({ error: "Not found !" });
    }

    return res.status(200).json({ message: "Deleted from database" });
}))


module.exports = router;