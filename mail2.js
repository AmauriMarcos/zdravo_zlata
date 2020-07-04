const sgMail = require('@sendgrid/mail');
require('dotenv').config()

sgMail.setApiKey(process.env.PASSWORD);
console.log(`API KEY: ${process.env.PASSWORD}`);
const msg = {
  to: 'amaurisantos.m@gmail.com',
  from: 'amaury_santos_22@hotmail.com',
  subject: 'Sending with Twilio SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
};

sgMail.send(msg).then(() => {
    console.log('Message sent')
}).catch((error) => {
    console.log(error.response.body)
    // console.log(error.response.body.errors[0].message)
})