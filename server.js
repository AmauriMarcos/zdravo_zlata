const express = require('express');
const bodyParser = require('body-parser')
const port = process.env.PORT || 3000;
const cors = require('cors');
const sendMail2 = require('./mail2');
const app = express();

require('dotenv').config()

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
    const {name, email, message} = req.body;
   
    sendMail2(name, email, message, function(err, data){
        if(err){
            res.status(500).json({message: 'Internal error'});
          
        }else{
            res.json({message: 'Email sent!!!'});
        }
    });

})


app.listen(port);

console.log('Server started on port 3000...');
