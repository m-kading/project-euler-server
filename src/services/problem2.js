'use strict';

const R = require('ramda');

const utils = require('../utils');

const defaultParameters = {
  upperBound: 4000000,
};

const isValEven = (val) => {
  return R.modulo(val, 2) == 0;
};

const sumOfEvenFibonacciValues = (upperBound) => {
  let sum = 0;
  let currentVal = 1;
  let previousVal = 1;

  while (currentVal < upperBound) {
    if (isValEven(currentVal)) sum += currentVal;
    let tempVal = currentVal;

    currentVal += previousVal;
    previousVal = tempVal;
  }

  return sum;
};

const solve = (parameters) => {
  parameters = utils.applyParameterDefaults(parameters, defaultParameters);
  return sumOfEvenFibonacciValues(parameters.upperBound);
};

module.exports.solve = solve;
module.exports.isValEven = isValEven;
