var path = require('path');
var express = require('express');

var app = express();

app.get('/app1', function(req, res) {
    res.sendFile(path.join(__dirname, 'app1.html'));
});


app.get('/app2', function(req, res) {
    res.sendFile(path.join(__dirname, 'app2.html'));
});

app.listen(8000);
