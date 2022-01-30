'use strict';

const test = require('tape');

const problem6 = require('../problem6');

test('problem6.solve', (t) => {
  [
    [{ lowerBound: 1, upperBound: 10 }, 2640, '2640 if bounds are 1-10'],
    [
      { lowerBound: 1, upperBound: 100 },
      25164150,
      '25164150 if bounds are 1-100',
    ],
    [{}, 25164150, '25164150 if bounds are default values: 1-100'],
  ].forEach(([parameters, expected, message]) => {
    t.test(message, (assert) => {
      assert.plan(1);

      const actual = problem6.solve(parameters);
      assert.deepEquals(actual, expected);
    });
  });
});

test('problem6.diffSquareSumAndSumSquare', (t) => {
  [
    [[1, 10], 2640, '2640 if bounds are 1-10'],
    [[1, 100], 25164150, '25164150 if bounds are 1-100'],
  ].forEach(([funcArgs, expected, message]) => {
    t.test(message, (assert) => {
      assert.plan(1);

      const actual = problem6.diffSquareSumAndSumSquare(
        funcArgs[0],
        funcArgs[1]
      );
      assert.deepEquals(actual, expected);
    });
  });
});

test('problem6.calculateSumOfSquares', (t) => {
  [[[1, 10], 385, '385 if bounds are 1-10']].forEach(
    ([funcArgs, expected, message]) => {
      t.test(message, (assert) => {
        assert.plan(1);

        const actual = problem6.calculateSumOfSquares(funcArgs[0], funcArgs[1]);
        assert.deepEquals(actual, expected);
      });
    }
  );
});

test('problem6.calculateSquareOfSums', (t) => {
  [[[1, 10], 3025, '3025 if bounds are 1-10']].forEach(
    ([funcArgs, expected, message]) => {
      t.test(message, (assert) => {
        assert.plan(1);

        const actual = problem6.calculateSquareOfSums(funcArgs[0], funcArgs[1]);
        assert.deepEquals(actual, expected);
      });
    }
  );
});
