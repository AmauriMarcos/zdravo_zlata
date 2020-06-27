const express = require('express');
const port = process.env.PORT || 5000;
const app = express();

app.use(express.static(__dirname + "/dist/"));
app.get(/.*/, function(req, res){
    res.sendfile(__dirname + "/dist/index.html");
});

app.listen(port);

console.log('Server started...');

/* var serveStatic = require('serve-static');

app.use(serveStatic(__dirname + "/dist"));
var port = process.env.PORT || 5000;
app.listen(port);
console.log('server started '+ port); */