'use strict';

const test = require('tape');

const problem9 = require('../problem9');

test('problem9.solve', (t) => {
  [
    [{ sum: 1000 }, 31875000, '31875000 if sum is 1000'],
    [{}, 31875000, '31875000 if sum is default 1000'],
    [{ sum: 12 }, 60, '60 if sum is 25'],
  ].forEach(([parameters, expected, message]) => {
    t.test(message, (assert) => {
      assert.plan(1);

      const actual = problem9.solve(parameters);
      assert.deepEquals(actual, expected);
    });
  });
});

test('problem9.findPythagoreanTriplet', (t) => {
  [
    [1000, [200, 375, 425], '[200, 375, 425] if sum is 1000'],
    [12, [3, 4, 5], '[3, 4, 5] if sum is 25'],
  ].forEach(([sum, expected, message]) => {
    t.test(message, (assert) => {
      assert.plan(1);

      const actual = problem9.findPythagoreanTriplet(sum);
      assert.deepEquals(actual, expected);
    });
  });
});

test('problem9.isPythagoreanTriplet', (t) => {
  [
    [[3, 4, 5], true, 'true if vals are Pythagorean Triplet'],
    [[3, 4, 6], false, 'false if vals are not Pythagorean Triplet'],
  ].forEach(([values, expected, message]) => {
    t.test(message, (assert) => {
      assert.plan(1);

      const actual = problem9.isPythagoreanTriplet(
        values[0],
        values[1],
        values[2]
      );
      assert.deepEquals(actual, expected);
    });
  });
});
