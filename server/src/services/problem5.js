'use strict';

/*
2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
*/

const utils = require('../utils');

const defaultParameters = { lowerBound: 1, upperBound: 20 };

const isValueMultipleOfAllFactors = (lowerBound, upperBound, multiple) => {
  for (let i = lowerBound; i <= upperBound; i++) {
    if (multiple % i !== 0) {
      return false;
    }
  }

  return true;
};

const findSmallestMultipleOfFactors = (lowerBound, upperBound) => {
  const stepSize = upperBound * (upperBound - 1);

  for (let i = stepSize; true; i += stepSize) {
    if (isValueMultipleOfAllFactors(lowerBound, upperBound, i)) {
      return i;
    }
  }
};

const solve = (parameters) => {
  parameters = utils.applyParameterDefaults(parameters, defaultParameters);
  return findSmallestMultipleOfFactors(
    parameters.lowerBound,
    parameters.upperBound
  );
};

module.exports.solve = solve;
module.exports.findSmallestMultipleOfFactors = findSmallestMultipleOfFactors;
module.exports.isValueMultipleOfAllFactors = isValueMultipleOfAllFactors;
