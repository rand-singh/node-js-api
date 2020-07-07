const express = require('express');
const app = express();
const morgan = require('morgan');

// import routes
const postRoutes = require('./routes/post');

const myOwnMiddleware = (req, res, next) => { 
    console.log("middleware applied") 
    next();
};

// middleware
app.use(morgan('dev'));
app.use(myOwnMiddleware);

app.use('/', postRoutes);

const port = 3000;
app.listen(port, () => {
    console.log(`A Node JS API is listening on port: ${port}`)
});

