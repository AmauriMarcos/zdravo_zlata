/* var express = require('express');
var path = require('path');
var serveStatic = require('serve-static');
app = express();
app.use(serveStatic(__dirname + "/dist"));
var port = process.env.PORT || 5000;
app.listen(port);
console.log('server started '+ port); */

const express = require('express');
const port = process.env.PORT || 3000;
var cors = require('cors')
const app = express();
app.use(cors())

app.use(express.static(__dirname + "/dist/"));

app.get("/", function(req, res) {
    res.sendfile(__dirname + '/dist/index.html'); 
})


app.listen(port);

console.log('Server started...');
