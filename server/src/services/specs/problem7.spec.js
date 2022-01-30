'use strict';

const test = require('tape');

const problem7 = require('../problem7');

test('problem7.solve', (t) => {
  [
    [{ numOfPrime: 6 }, 13, '2640 if num of prime are 6'],
    [{ numOfPrime: 10001 }, 104743, '104743 if num of prime are 10001'],
    [{}, 104743, '104743 if num of prime are default values: 10001'],
  ].forEach(([parameters, expected, message]) => {
    t.test(message, (assert) => {
      assert.plan(1);

      const actual = problem7.solve(parameters);
      assert.deepEquals(actual, expected);
    });
  });
});

test('problem7.findPrime', (t) => {
  [
    [6, 13, '2640 if num of prime are 6'],
    [10001, 104743, '104743 if num of prime are 10001'],
  ].forEach(([numOfPrime, expected, message]) => {
    t.test(message, (assert) => {
      assert.plan(1);

      const actual = problem7.findPrime(numOfPrime);
      assert.deepEquals(actual, expected);
    });
  });
});
