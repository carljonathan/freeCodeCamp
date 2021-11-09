require('dotenv').config()
var express = require('express');
var app = express();
console.log('Hello World') // log hello world
/*
app.get("/", (req, res) => { // return string when user visits root
    res.send('Hello Express')
})
*/

app.use((req, res, next) => {
	const method = req.method
	const path = req.path
	const ip = req.ip
	console.log(`${method} ${path} - ${ip}`)
	next()
})

app.use('/public', express.static(__dirname + '/public')) // path for styles.css in public folder. Express.static is same as {{ load static }}?

app.get("/", (req, res) => { // return template when user visits root
    res.sendFile(__dirname + '/views/index.html')
})

app.get("/json", (req, res) => { // API response by GET from "/json" route. IF Heroku, remember to set the key=value in Heroku settings > reveal Config vars.
    if (process.env.MESSAGE_STYLE === "uppercase") {
        res.json({"message": "Hello json".toUpperCase()})
    } else {
        res.json({'message': 'Hello json'})
    }
})

app.get("/now", (req, res, next) => {
	req.time = new Date().toString
    next()
}, (req, res) => {
    res.json({"time": req.time})
})



























 module.exports = app;
