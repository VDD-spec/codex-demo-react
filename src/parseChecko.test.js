import test from 'node:test';
import assert from 'node:assert';
import {parseChecko} from './parseChecko.js';

test('parseChecko extracts name and inn', () => {
  const html = '<h1 id="copy-name">Иванов Иван</h1><strong id="copy-inn">1234567890</strong>';
  const res = parseChecko(html);
  assert.strictEqual(res.name, 'Иванов Иван');
  assert.strictEqual(res.inn, '1234567890');
});
