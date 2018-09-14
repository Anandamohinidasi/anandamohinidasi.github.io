var express = require('express');
var app = express();
app.use(express.static(__dirname));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/ananda.html');
});

app.listen(process.env.PORT || 8080 , function () {
    console.log('listening at ', process.env.PORT || 8080);
});