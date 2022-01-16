'use strict';

const R = require('ramda');

const applyParameterDefaults = (parameters, defaults) => {
  const parametersWithDefaults = {};

  Object.keys(defaults).forEach((key) => {
    parametersWithDefaults[key] = parameters.hasOwnProperty(key)
      ? parameters[key]
      : defaults[key];
  });

  return parametersWithDefaults;
};

const isValEven = (val) => {
  return R.modulo(val, 2) == 0;
};

const isPrimeNumber = (inputVal) => {
  if (inputVal === 1 || (isValEven(inputVal) && inputVal !== 2)) {
    return false;
  }

  for (let i = 3; i <= Math.sqrt(inputVal); i += 2) {
    if (inputVal % i === 0) {
      return false;
    }
  }

  return true;
};

module.exports.applyParameterDefaults = applyParameterDefaults;
module.exports.isValEven = isValEven;
module.exports.isPrimeNumber = isPrimeNumber;
