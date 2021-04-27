#!/usr/bin/env node

const fs = require('fs');
// const util = require('util');
const chalk = require('chalk');
const path = require('path');

// METHOD #3

// console.log(process.argv);

const { lstat } = fs.promises;

const targetDir = process.argv[2] || process.cwd();

fs.readdir(targetDir, async (err, filenames) => {
    if (err) {
        console.log(err);
    };
    
    const statPromises = filenames.map(filename => {
        return lstat(path.join(targetDir, filename));
    });

    const allStats = await Promise.all(statPromises);

    for (let stats of allStats) {
        const index = allStats.indexOf(stats);

        if (stats.isFile()) {
            console.log(chalk.yellow(filenames[index]));
        } else {
            console.log(chalk.green.bold(filenames[index]));
        }
        
    };
});
