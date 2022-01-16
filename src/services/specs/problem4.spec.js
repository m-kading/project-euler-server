'use strict';

const test = require('tape');

const problem4 = require('../problem4');

test('problem4.solve', (t) => {
  [
    [
      { lowerBound: 100, upperBound: 999 },
      906609,
      '906609 if bound is 100-999',
    ],
    [{}, 906609, '906609 if default bound of 100-999'],
    [{ lowerBound: 10, upperBound: 99 }, 9009, '9009 if bound is 10-99'],
  ].forEach(([parameters, expected, message]) => {
    t.test(message, (assert) => {
      assert.plan(1);

      const actual = problem4.solve(parameters);
      assert.deepEquals(actual, expected);
    });
  });
});

test('problem4.isNumPalindromic', (t) => {
  [
    [11, true, 'true if number is 11'],
    [242, true, 'true if number is 242'],
    [23, false, 'false if number is 23'],
    [2432, false, 'false if number is 2432'],
  ].forEach(([parameters, expected, message]) => {
    t.test(message, (assert) => {
      assert.plan(1);

      const actual = problem4.isNumPalindromic(parameters);
      assert.deepEquals(actual, expected);
    });
  });
});

test('problem4.isProductOfFactorsInBounds', (t) => {
  [
    [[9801, 10, 99], true, 'true if product has factors within bounds'],
    [
      [9802, 10, 99],
      false,
      'false if product does not have factors within bounds',
    ],
  ].forEach(([parameters, expected, message]) => {
    t.test(message, (assert) => {
      assert.plan(1);

      const actual = problem4.isProductOfFactorsInBounds(
        parameters[0],
        parameters[1],
        parameters[2]
      );
      assert.deepEquals(actual, expected);
    });
  });
});

test('problem4.findLargestPalindromeProduct', (t) => {
  [
    [[10, 99], 9009, '9009 if bounds are 10, 99'],
    [[100, 999], 906609, '906609 if bounds are 100, 999'],
  ].forEach(([inputArgs, expected, message]) => {
    t.test(message, (assert) => {
      assert.plan(1);

      const actual = problem4.findLargestPalindromeProduct(
        inputArgs[0],
        inputArgs[1]
      );

      assert.deepEquals(actual, expected);
    });
  });
});
