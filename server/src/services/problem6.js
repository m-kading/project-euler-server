'use strict';

/*
The sum of the squares of the first ten natural numbers is,
  1^2 + 2^2 + ... + 10^2 = 385
The square of the sum of the first ten natural numbers is,
  (1 + 2 + ... + 10)^2 = 3025
Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is
  3025 - 385 = 2640
Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.
*/

const utils = require('../utils');

const defaultParameters = { lowerBound: 1, upperBound: 100 };

const calculateSumOfSquares = (lowerBound, upperBound) => {
  let sum = 0;

  for (let i = lowerBound; i <= upperBound; i++) {
    sum += i * i;
  }

  return sum;
};

const calculateSquareOfSums = (lowerBound, upperBound) => {
  let sum = 0;

  for (let i = lowerBound; i <= upperBound; i++) {
    sum += i;
  }

  return sum * sum;
};

// Find the difference between the sum of squares and square of sums
// for all values in bounds
const diffSquareSumAndSumSquare = (lowerBound, upperBound) => {
  const squareOfSums = calculateSquareOfSums(lowerBound, upperBound);
  const sumOfSquares = calculateSumOfSquares(lowerBound, upperBound);

  return squareOfSums - sumOfSquares;
};

const solve = (parameters) => {
  parameters = utils.applyParameterDefaults(parameters, defaultParameters);
  return diffSquareSumAndSumSquare(
    parameters.lowerBound,
    parameters.upperBound
  );
};

module.exports.solve = solve;
module.exports.calculateSumOfSquares = calculateSumOfSquares;
module.exports.calculateSquareOfSums = calculateSquareOfSums;
module.exports.diffSquareSumAndSumSquare = diffSquareSumAndSumSquare;
