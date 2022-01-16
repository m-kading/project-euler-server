'use strict';

/* 
The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?
*/

// TODO: This is really slow on the pi.  Test it on windows to confirm speed

const R = require('ramda');

const utils = require('../utils');

const defaultParameters = {
  factorOf: 600851475143,
};

const findLargestPrimeFactor = (inputMultiple) => {
  for (let i = 2; i <= inputMultiple / 2; i++) {
    if (inputMultiple % i === 0) {
      const factor = inputMultiple / i;
      if (utils.isPrimeNumber(factor)) {
        return factor;
      }
    }
  }
};

const solve = (parameters) => {
  parameters = utils.applyParameterDefaults(parameters, defaultParameters);
  return findLargestPrimeFactor(parameters.factorOf);
};

module.exports.solve = solve;
module.exports.findLargestPrimeFactor = findLargestPrimeFactor;
