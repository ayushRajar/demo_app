const test = require('node:test');
const assert = require('node:assert');

const add = require('./math');

test('adds 5 and 6 to equal 11', () => {
    assert.strictEqual(add(5, 6), 11);
});
