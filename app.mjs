//* npm adalah tempat para developer nodeJs menaruh hasil projek mereka yang dimana itu bisa digunakan oleh developer lain (singkatnya npm tempat mengelola packet)
//? file mjs(Module Javascript) ini sama aja kayak file js cuman lebih ke ES6

import validator from 'validator';
import chalk from 'chalk';

// console.log(validator.isEmail('efraim@gmail.com'));
// console.log(validator.isMobilePhone('0823456789', 'id-ID'));
console.log(chalk.bgGreen.yellow.italic("Hallo World"));
const pesan = 'Hallo bang!!';

console.log(chalk.bgRedBright.black(pesan));

const nama = 'Efraim urel palodang';
console.log(chalk.green(
  `Hallo perkenalkan saya hijau ${chalk.red.underline('Saya adalah Merah')} nama saya adalah ${chalk.magentaBright(nama)}
  `));
