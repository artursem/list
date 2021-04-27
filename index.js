#!/usr/bin/env node

const fs = require('fs');
const fs = require('util');

const lstat = util.promisify(fs.lstat);

fs.readdir(process.cwd(), (err, filenames) => {
    if (err) {
        // handle error
        console.log(err);
    };
    

});

// const lstat = (filename) => {
//     return new Promise((resolve, reject) => {
//         fs.lstat(filename, (err, stats) => {
//             if (err) {
//                 reject(err);
//             };
//             resolve(stats);
//         })
//     });
// };