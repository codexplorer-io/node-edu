const fs = require('fs');

new Promise((resolve, reject) =>
    fs.readFile('input.txt', (error, data) => {
        if (error) {
            return reject(error);
        }

        resolve(data);
    })
).then(
    result => console.log(result.toString()),
    error => console.error(error)
);

console.log('Program finished successfully.');
