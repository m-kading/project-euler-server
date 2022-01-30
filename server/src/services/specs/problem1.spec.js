'use strict';

const test = require('tape');

const problem1 = require('../problem1');

test('problem1.solve', (t) => {
  [
    [{ upperBound: 1000 }, 233168, '233168 when upperbound is 1000'],
    [{}, 233168, '233168 when upperbound is not provided'],
    [{ upperBound: 10 }, 23, '23 when upperbound is 10'],
  ].forEach(([parameters, expected, message]) => {
    t.test(message, (assert) => {
      assert.plan(1);

      const actual = problem1.solve(parameters);

      assert.deepEquals(actual, expected);
    });
  });
});

test('problem1.isNumMultipleOf', (t) => {
  [
    [[10, 5], true, 'true if value is multiple of divisor'],
    [[10, 3], false, 'false if value is not multiple of divisor'],
  ].forEach(([inputs, expected, message]) => {
    t.test(message, (assert) => {
      assert.plan(1);

      const actual = problem1.isNumMultipleOf(inputs[0], inputs[1]);

      assert.deepEquals(actual, expected);
    });
  });
});
