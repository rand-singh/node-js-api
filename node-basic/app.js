// const express = require('express');
// const { response } = require('express');
// const app = express();

// app.get('/', (req, res) => {
//     res.send('hello from express')
// });

// app.listen(3000);

const fs = require('fs'),
    fileName = 'target.txt';

const data = fs.readFileSync(fileName);

console.log(data.toString());


// fs.readFile(fileName, (err, data) => {
//     if(err) {
//         console.log('error---------->',err)
//     }

//     console.log(data.toString())
// })


console.log('node asyn programming');