require('dotenv').config();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator").default;
const readline = require("readline");
mongoose.connect(process.env.DATABASE);
mongoose.Promise = global.Promise;

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const User = require("./src/model/User");

console.log("Command to create a admin user");
rl.question("Email: ", async (email) => {
    if (validator.isEmpty(email)) {
        console.log("Une email est requis");
        process.exit();
    } else if (!validator.isEmail(email)) {
        console.log("Un email valide est requis !");
        process.exit();
    }
    let user = await User.findOne({ email: email });
    if (user) {
        console.lo("User already exists");
        process.exit();
    }
    rl.question("Password: ", async (password) => {
        if (validator.isEmpty(password)) {
            console.log("Un mot de passe est requis");
            process.exit();
        } else if (!validator.isLength(password, { min: 6, max: 30 })) {
            console.log("Le mot de passe doit faire entre 6 et 30 caractéres");
            process.exit();
        }
        const user = new User({
            email,
            password,
            isAdmin: true,
        });
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(user.password, salt, (err, hash) => {
                if (err) throw err;
                user.password = hash;
                user.save()
                    .then(user => { console.log("Admin successfully added in the Database..."); process.exit() })
                    .catch(err => { console.log(`An error occured: ${err}`); process.exit() });
            })
        })
    })
})
