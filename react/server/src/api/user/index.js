const router = require("express").Router();
const { User } = require("../../models");
const validator = require("../../validator/auth");
const bcrypt = require("bcrypt")
const { catchErrors, checkToken, hasAdminRight } = require("../../middlewares");
const cache = require("../../redis-cache");

router.get("/users", catchErrors(async (req, res) => {
    cache.get("users", async (err, users) => {
        if (err) {
            throw err;
        }

        if (users) {
            return res.status(200).json(JSON.parse(users));
        }


        users = await User.findAll();

        cache.setex("users", 60, JSON.stringify(users))
        return res.status(200).json(users);
    })
}))



router.get("/user/:id", catchErrors(async (req, res) => {
    const { id } = req.params;


    if (!id) {
        return res.status(400).json({ error: "Bad request !" });
    }

    const user = await user.findOne({
        where: { id },
    });

    if (!user) {
        return res.status(404).json({ error: "Not found !" });
    }

    return res.status(200).json(user);
}))


router.post("/user", checkToken, hasAdminRight, catchErrors(async (req, res) => {
    const { isValid, errors } = validator.validateRegisterInput(req.body);

    if (!isValid) {
        return res.status(400).json({ message: errors });
    }

    let email = req.body.email;

    const user = await User.findOne({ where: { email } });

    if (user) {
        return res.status(409).json({ message: { email: "User already exist" } })
    }

    let plainPassword = req.body.password;


    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(plainPassword, salt, async (err, hash) => {
            if (err) throw err;
            let user = await User.bulkCreate([{
                ...req.body,
                password: hash,
                createdAt: new Date()
            }]).catch(err => {
                res.status(400);
                throw err;
            })
            return res.status(200).json(user);
        })
    })
}));


router.put("/user/:id", checkToken, catchErrors(async (req, res) => {
    const { id } = req.params;
    User.findOne({
        where: {
            id
        }
    }).then(function (user) {
        return user.update({
            ...req.body,
            updatedAt: new Date()
        });
    }).then(function (user) {
        return res.status(200).json(user);
    }).catch(err => {
        return res.status(400).json({ message: "user not found" });
    })
}))



router.delete("/user/:id", checkToken, hasAdminRight, catchErrors(async (req, res) => {
    const { id } = req.params;

    if (!id) {
        return res.status(400).json({ error: "Bad request !" });
    }

    const user = await User.destroy({ where: { id } });

    if (!user) {
        return res.status(404).json({ error: "Not found !" });
    }

    return res.status(200).json({ message: "Deleted from database" });
}))




module.exports = router;