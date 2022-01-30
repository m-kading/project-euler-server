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

const defaultParameters = { numOfPrime: 10001 };

const findPrime = (numOfPrime) => {
  let primeNumsFound = 1;
  if (numOfPrime === 1) {
    return 2;
  }

  for (let i = 3; true; i += 2) {
    if (utils.isPrimeNumber(i)) {
      primeNumsFound++;
    }

    if (primeNumsFound === numOfPrime) {
      return i;
    }
  }
};

const solve = (parameters) => {
  parameters = utils.applyParameterDefaults(parameters, defaultParameters);
  return findPrime(parameters.numOfPrime);
};

module.exports.solve = solve;
module.exports.findPrime = findPrime;
