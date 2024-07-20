const fs = require('node:fs/promises');

async function main() {
  const fileName = 'src/promise.js';

  // readFile(fileName)
  //   .then(async (data) => {
  //     console.log('leu o arquivo');
  //     await appendFile('output.js', data);
  //   })
  //   .catch((err) => {
  //     console.log('deu erro!!!!');
  //     console.error(err);
  //     return 'xpto';
  //   })
  //   .finally(() => {
  //     console.log('passei por aqui!');
  //   });

  const data = await readFile(fileName).catch((err) => {
    console.log('deu erro!!!!');
    console.error(err);
    return 'xpto';
  });

  await appendFile('output.js', data);

  console.log('Data has been appended to output.js');
}

async function readFile(fileName) {
  const data = await fs.readFile(fileName, { encoding: 'utf-8' });
  return data;
}

async function appendFile(fileName, data) {
  await fs.appendFile(fileName, data, { encoding: 'utf-8' });
}

main();
