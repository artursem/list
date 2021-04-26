const fs = require('fs');

fs.readdir('.', (err, filenames) => {
    if (err) {
        // handle error
        console.log(err);
    };

    console.log(filenames);
});