const Bluebird = require('bluebird');
const fs = Bluebird.promisifyAll(require('fs'));

fs.readFileAsync('input.txt')
    .then(
        result => console.log(result.toString()),
        console.error
    );

console.log('Program finished successfully.');
