'use strict';

const test = require('tape');

const problem5 = require('../problem5');

test('problem5.solve', (t) => {
  [
    [
      { lowerBound: 1, upperBound: 10 },
      2520,
      '2520 if bounds of factors are 1-10',
    ],
    [
      { lowerBound: 1, upperBound: 20 },
      232792560,
      '232792560 if bounds of factors are 1-20',
    ],
    [{}, 232792560, '232792560 if bounds of factors are default values: 1-20'],
  ].forEach(([parameters, expected, message]) => {
    t.test(message, (assert) => {
      assert.plan(1);

      const actual = problem5.solve(parameters);
      assert.deepEquals(actual, expected);
    });
  });
});

test('problem5.findSmallestMultipleOfFactors', (t) => {
  [
    [[1, 10], 2520, '2520 if bounds of factors are 1-10'],
    [[1, 20], 232792560, '232792560 if bounds of factors are 1-20'],
  ].forEach(([functionArgs, expected, message]) => {
    t.test(message, (assert) => {
      assert.plan(1);

      const actual = problem5.findSmallestMultipleOfFactors(
        functionArgs[0],
        functionArgs[1]
      );
      assert.deepEquals(actual, expected);
    });
  });
});

test('problem5.isValueMultipleOfAllFactors', (t) => {
  [
    [
      [1, 10, 2520],
      true,
      'true if input (2520) is multiple of all factors in range 1-10',
    ],
    [
      [1, 20, 232792560],
      true,
      'true if input (232792560) is multiple of all factors in range 1-20',
    ],
    [
      [1, 10, 2000],
      false,
      'false if input (2000) is not multiple of all factors in range 1-10',
    ],
  ].forEach(([functionArgs, expected, message]) => {
    t.test(message, (assert) => {
      assert.plan(1);

      const actual = problem5.isValueMultipleOfAllFactors(
        functionArgs[0],
        functionArgs[1],
        functionArgs[2]
      );
      assert.deepEquals(actual, expected);
    });
  });
});
