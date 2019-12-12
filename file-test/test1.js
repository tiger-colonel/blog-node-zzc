// import fs from 'fs';
// import path from 'path';

const fs = require('fs');
const path = require('path')

const fileName = path.resolve(__dirname, 'data.txt');

// fs.readFile(fileName, (err, data) => {
//     if (err) {
//         console.log('-----err-----', err);
//         return 
//     }

//     console.log(data.toString());
// })

const content = '这是新的\n'

