var express = require('express');
var app = express();
console.log('Hello World') // log hello world
/*
app.get("/", (req, res) => { // return string when user visits root
    res.send('Hello Express')
})
*/
app.use('/public', express.static(__dirname + '/public')) // path for styles.css in public folder. Express.static is same as {{ load static }}?
app.get("/", (req, res) => { // return template when user visits root
    res.sendFile(__dirname + '/views/index.html')
})

































 module.exports = app;
