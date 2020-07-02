const express = require('express');
const bodyParser = require('body-parser')
const port = process.env.PORT || 3000;
const cors = require('cors');
const sendMail = require('./mail');
const SendmailTransport = require('nodemailer/lib/sendmail-transport');
const app = express();
app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.static(__dirname + "/dist/"));

 app.get("/", function(req, res) {
    res.sendfile(__dirname + '/dist/index.html');  
})
 
app.post("/", function(req, res) {
    res.sendfile(__dirname + '/dist/index.html');
    console.log(req.body);
    const name = req.body.name;
    const email = req.body.name;
    const text = req.body.text;

    /* sendMail(name, email, text, (err, data) =>{
        if(err){
            res.status(500).json({message: 'internal error'});
           console.log(err);
        }else{
            res.json({message: 'Email sent!!!'});
           console.log(data)
        }
    }); */

})


app.listen(port);

console.log('Server started...');
