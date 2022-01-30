'use strict';

const test = require('tape');

const utils = require('../index');

test('utils.applyParameterDefaults', (t) => {
  [
    [{ upperBound: 100 }, { upperBound: 100 }, 'uses provided parameters'],
    [{}, { upperBound: 1000 }, 'sets default value if not present'],
  ].forEach(([parameters, expected, message]) => {
    t.test(message, (assert) => {
      assert.plan(1);

      const actual = utils.applyParameterDefaults(parameters, {
        upperBound: 1000,
      });

      assert.deepEquals(actual, expected);
    });
  });
});

test('utils.isValEven', (t) => {
  [
    [2, true, 'true if value is even'],
    [3, false, 'false if value is odd'],
  ].forEach(([parameters, expected, message]) => {
    t.test(message, (assert) => {
      assert.plan(1);

      const actual = utils.isValEven(parameters);

      assert.deepEquals(actual, expected);
    });
  });
});

test('utils.isPrimeNumber', (t) => {
  [
    [1, false, 'false if value is not prime: 1'],
    [2, true, 'true if value is prime: 2'],
    [5, true, 'true if value is prime: 5'],
    [10, false, 'false if value is not prime: 10'],
  ].forEach(([inputVal, expected, message]) => {
    t.test(message, (assert) => {
      assert.plan(1);

      const actual = utils.isPrimeNumber(inputVal);

      assert.deepEquals(actual, expected);
    });
  });
});
