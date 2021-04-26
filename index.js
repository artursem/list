#!/usr/bin/env node

const fs = require('fs');

fs.readdir(process.cwd(), (err, filenames) => {
    if (err) {
        // handle error
        console.log(err);
    };

    console.log(filenames);
});