const express = require('express');
const app = express();

// import routes
const { getPosts } = require('./routes/post');

app.get('/', getPosts);

const port = 3000;
app.listen(port, () => {
    console.log(`A Node JS API is listening on port: ${port}`)
});

