const express = require('express');
const bodyParser = require('body-parser')
const port = process.env.PORT || 3000;
var cors = require('cors')
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
    const name = req.body.name
    const email = req.body.email
    const message = req.body.message


})


app.listen(port);

console.log('Server started...');
