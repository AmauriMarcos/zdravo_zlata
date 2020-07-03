require('dotenv').config()
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.PERSONAL_EMAIL,
    pass: process.env.PASSWORD 
  }
});

const sendMail2 = (name, email, text, cb) => {
    
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

module.exports = sendMail2;