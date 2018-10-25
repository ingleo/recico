const express = require('express')
const articulosRouter = express.Router();
const bodyParser = require('body-parser')

//start app on express
const app = express()

//application/json
app.use(bodyParser.json())

// enable cors access
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    next();
})

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
    res.json({ key: 'hello world' });
});

app.listen(3000, () => {
    console.log('Escuchando puerto', 3000);
});