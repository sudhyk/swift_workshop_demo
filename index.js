const express = require('express');
const app = express();
const vegetables = require('./vegetables.json');
const fruits = require('./fruits.json');

app.get('/', (req, res) => {
    res.send('swift cloud demo app works');
});

app.post('/login', (req, res) => {
    res.send({
        "status": "success"
    })
});

app.get('/vegetables', (req, res) => {
    console.log("Got a GET request for list of vegetables");
    res.send(vegetables);
});

app.get('/fruits', (req, res) => {
    console.log("Got a GET request for list of fruits");
    res.send(fruits);
});

app.listen(3000, () => console.log('swift cloud demo app listening on port 3000!'));
