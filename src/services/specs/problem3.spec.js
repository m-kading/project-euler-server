'use strict';

const test = require('tape');

const problem3 = require('../problem3');

test('problem3.solve', (t) => {
  [
    [{ factorOf: 1000000 }, 5, '5 if factorOf is 1000000'],
    [{}, 6857, '6857 if default factorOf 600851475143'],
    [{ factorOf: 10 }, 5, '5 if factorOf is 10'],
  ].forEach(([parameters, expected, message]) => {
    t.test(message, (assert) => {
      assert.plan(1);

      const actual = problem3.solve(parameters);
      assert.deepEquals(actual, expected);
    });
  });
});

test('problem3.findLargestPrimeFactor', (t) => {
  [
    [1000000, 5, '5 if inputMultiple is 1000000'],
    [10, 5, '5 if inputMultiple is 10'],
  ].forEach(([inputMultiple, expected, message]) => {
    t.test(message, (assert) => {
      assert.plan(1);

      const actual = problem3.findLargestPrimeFactor(inputMultiple);

      assert.deepEquals(actual, expected);
    });
  });
});
