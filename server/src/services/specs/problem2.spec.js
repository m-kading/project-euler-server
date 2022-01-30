'use strict';

const test = require('tape');

const problem2 = require('../problem2');

test('problem2.solve', (t) => {
  [
    [{}, 4613732, '4613732 if default upperbound of 4000000'],
    [{ upperbound: 4000000 }, 4613732, '4613732 if upperbound of 4000000'],
    [{ upperBound: 10 }, 10, '10 if default upperbound of 10'],
  ].forEach(([parameters, expected, message]) => {
    t.test(message, (assert) => {
      assert.plan(1);

      const actual = problem2.solve(parameters);

      assert.deepEquals(actual, expected);
    });
  });
});
