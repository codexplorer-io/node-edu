const fs = require('fs');

fs.readFile('input.txt', (error, data) => {
    if (error) {
        return console.error(error);
    }

    console.log(data.toString());
});

console.log('Program finished successfully.');
