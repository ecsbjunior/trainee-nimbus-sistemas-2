const fs = require('node:fs');

function main() {
  const fileName = 'src/callback.js';

  readFile(fileName, (err, data) => {
    if (err) {
      console.error(err);
    } else {
      appendFile('output.js', data, (err) => {
        if (err) {
          console.error(err);
        } else {
          console.log('Data has been appended to output.js')
        }
      });
    }
  });
}

function readFile(fileName, callback) {
  fs.readFile(fileName, {}, (err, data) => {
    if (err) {
      // console.error(err);
      callback(err);
    } else {
      setTimeout(() => {
        console.log(`readFile ended`);
        callback(null, data);
      }, 1000);
    }
  });

  console.log('readFile started');
}

function appendFile(fileName, data, callback) {
  fs.appendFile('output.js', data, {}, (err) => {
    if (err) {
      // console.error(err);
      callback(err);
    } else {
      setTimeout(() => {
        console.log('appendFile ended');
        callback(null);
      }, 1000);
      // console.log('Data has been appended to output.js');
    }
  });
}

main();
