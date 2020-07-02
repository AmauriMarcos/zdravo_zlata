const nodemailer = require('nodemailer');
const mg = require('nodemailer-mailgun-transport');

const auth= {
    auth:{
        api_key: 'f63fb67b7a10c751c65544087ec4eba2-913a5827-0892d9c9',
        domain: 'sandboxc50a82176fe243d69a3632e9db567d1a.mailgun.org'
    }
}

const transporter = nodemailer.createTransport(mg(auth));

const sendMail = (name, email, text, cb) => {
    
    const mailOptions = {
        from: email,
        to: 'amaurisantos.m@gmail.com',
        subject: `Name: ${name} || Serbian Lessons`,
        text: text
    }

    transporter.sendMail(mailOptions).then(function(info){
        console.log(info);
    }).catch(function(err){
        console.log(err);
    });

}

module.exports = sendMail;