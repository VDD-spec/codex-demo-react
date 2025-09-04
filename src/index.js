import readline from 'node:readline/promises';
import {stdin as input, stdout as output} from 'node:process';

import {parseChecko} from './parseChecko.js';

const rl = readline.createInterface({input, output});
const inn = await rl.question('Введите ИНН: ');
rl.close();

const url = `https://checko.ru/person/${inn}`;
const resp = await fetch(url);
if (!resp.ok) {
  console.error('Ошибка при запросе');
  process.exit(1);
}
const html = await resp.text();
const data = parseChecko(html);
console.log('ФИО:', data.name);
console.log('ИНН:', data.inn);
