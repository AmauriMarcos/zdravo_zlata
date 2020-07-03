require('dotenv').config()
const nodemailer = require('nodemailer');
const mg = require('nodemailer-mailgun-transport');

const auth= {
    auth:{
        api_key: process.env.KEY,
        domain: process.env.DOMAIN
    }
}

const transporter = nodemailer.createTransport(mg(auth));

const sendMail = (name, email, text, cb) => {
    
    const mailOptions = {
        from: email,
        to: process.env.PERSONAL_EMAIL,
        subject: `Name: ${name} || Serbian Lessons`,
        text
    }

    transporter.sendMail(mailOptions).then(function(info){
        console.log(info);
    }).catch(function(err){
        console.log(err);
    });

}

module.exports = sendMail;