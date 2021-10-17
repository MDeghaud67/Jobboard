const nodemailer = require('nodemailer');
const pug = require('pug')
const juice = require('juice')
const htmlToText = require('html-to-text');


const transport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.MAIL_HOST,
        pass: process.env.MAIL_PASS
    }
})


const generateHTML = (filename, options = {}) => {
    const html = pug.renderFile(`${__dirname}/../views/email/${filename}.pug`, options);
    const inlined = juice(html);
    return inlined;
}

exports.send = (options) => {
    const html = generateHTML(options.filename, options);
    const text = htmlToText.fromString(html);
    const mailOptions = {
        from: 'aymen.hamada@epitech.eu',
        to: options.user.email,
        subject: options.subject,
        html,
        text,
    }
    return new Promise((resolve, reject) => {
        transport.sendMail(mailOptions, (err, info) => {
            if (err) throw err;
            resolve();
        });
    })
}