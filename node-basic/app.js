const express = require('express');
const { response } = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('hello from express')
});

app.listen(3000);