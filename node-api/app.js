const express = require('express');
const app = express();
const port = 3000;

app.listen(port, () => console.log(`A Node JS API is listening on port: ${port}`));

app.get('/', (req, res) => {
    res.send('hello world from node js');
})

