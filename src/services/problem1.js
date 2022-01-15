'use strict';

const R = require('ramda');

const utils = require('../utils');

const defaultParameters = {
  upperBound: 1000,
};

const isNumMultipleOf = (multiple, divisor) => {
  return R.modulo(multiple, divisor) == 0;
};

const solve = (parameters) => {
  let sum = 0;
  parameters = utils.applyParameterDefaults(parameters, defaultParameters);

  for (let i = 1; i < parameters.upperBound; i++) {
    if (isNumMultipleOf(i, 3) || isNumMultipleOf(i, 5)) {
      sum += i;
    }
  }
  return sum;
};

module.exports.solve = solve;
module.exports.isNumMultipleOf = isNumMultipleOf;
