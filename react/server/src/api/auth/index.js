const router = require("express").Router();
const { catchErrors, checkToken } = require("../../middlewares");
const validator = require("../../validator/auth");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { User } = require("../../models");
const crypto = require("crypto");
const mail = require("../../utils/mail");



router.get("/", checkToken, catchErrors(async (req, res) => {
    return res.json(req.user);
}))

router.post("/login", catchErrors(async (req, res) => {
    const { isValid, errors } = validator.validateLoginInput(req.body);

    if (!isValid) {
        return res.status(400).json({ message: errors });
    }

    let { password, email } = req.body;

    const user = await User.findOne({ where: { email } });

    if (!user) {
        return res.status(400).json({ message: { email: "Email ou mot de passe incorrect" } });
    }

    bcrypt.compare(password, user.password).then((isMatch) => {
        if (isMatch) {
            let payload;
            const { id, first_name, isAdmin } = user;
            payload = {
                id,
                first_name,
                isAdmin
            }
            let token = jwt.sign(payload, process.env.TOKEN_SECRET, { expiresIn: '24h' });
            return res.status(200).json({
                token,
                payload,
                isAdmin
            });
        }
        return res.status(400).json({ message: { email: "Email ou mot de passe incorrect" } })
    })
}))

router.post("/register", catchErrors(async (req, res, next) => {
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

}))

router.post("/reset-password-link", catchErrors(async (req, res) => {
    const { isValid, errors } = validator.validateResetPasswordLinkInput(req.body);


    if (!isValid) {
        return res.status(400).json({ message: errors });
    }

    const email = req.body.email;

    const user = await User.findOne({ where: { email } });

    if (!user) {
        return res.status(200).json("ok");
    }

    user.resetPasswordToken = crypto.randomBytes(20).toString('hex')// random token;
    user.resetPasswordExpires = Date.now() + 3600000;// expires in 1Hour from NOW
    await user.save();
    const resetURL = `http://localhost:3000/reset-password/user/${user.resetPasswordToken}`; // TODO CHANGE THIS WHEN SITE IS ONLINE

    await mail.send({
        user,
        subject: 'Password reset !',
        resetURL,
        filename: 'password-reset',
    })

    return res.status(200).json("ok");
}))


router.post("/check-reset-token", catchErrors(async (req, res) => {
    const { token } = req.body;

    if (!token) {
        return res.status(400).json({});
    }

    const user = await User.findOne({
        where: {
            resetPasswordToken: token,
            resetPasswordExpires: { $gt: Date.now() }
        }
    });

    if (!user) {
        return res.status(400).json({})
    }

    return res.status(200).json({});
}))



router.post("/reset-password", catchErrors(async (req, res) => {
    const { token } = req.body;

    if (!token) {
        return res.status(400).json({});
    }

    const { isValid, errors } = validator.validateResetPasswordInput(req.body);


    if (!isValid) {
        return res.status(400).json({ message: errors });
    }

    const user = await User.findOne({
        where: {
            resetPasswordToken: token,
            resetPasswordExpires: { $gt: Date.now() }
        }
    });

    if (!user) {
        return res.status(400).json({});
    }

    let plainPassword = req.body.password;


    user.resetPasswordToken = null;
    user.resetPasswordExpires = null;

    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(plainPassword, salt, (err, hash) => {
            if (err) throw err;

            user.password = hash;

            user.save().then(() => {
                return res.status(200).json("ok");
            });
        })
    })
}))



module.exports = router;