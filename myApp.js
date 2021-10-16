var express = require('express');
var app = express();
console.log('Hello World') // log hello world
/*
app.get("/", (req, res) => { // return string when user visits root
    res.send('Hello Express')
})
*/
app.get("/", (req, res) => { // return template when user visits root
    res.sendFile(__dirname + 'views/index.html')
})

































 module.exports = app;
