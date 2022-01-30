'use strict';

const R = require('ramda');

const utils = require('../utils');

/*
A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

a^2 + b^2 = c^2
For example, 3^2 + 4^2 = 9 + 16 = 25 = 5^2.

There exists exactly one Pythagorean triplet for which a + b + c = 1000.
Find the product abc.
*/

const defaultParameters = {
  sum: 1000,
};

const isPythagoreanTriplet = (a, b, c) => {
  return a * a + b * b == c * c;
};

const findPythagoreanTriplet = (sum) => {
  for (let a = 1; a < sum; a++) {
    for (let b = a + 1; b < sum; b++) {
      for (let c = b + 1; c < sum; c++) {
        if (a + b + c === sum && isPythagoreanTriplet(a, b, c)) {
          return [a, b, c];
        }
      }
    }
  }
};

const solve = (parameters) => {
  parameters = utils.applyParameterDefaults(parameters, defaultParameters);
  const pythagoreanTriplet = findPythagoreanTriplet(parameters.sum);

  return R.multiply(
    R.multiply(pythagoreanTriplet[0], pythagoreanTriplet[1]),
    pythagoreanTriplet[2]
  );
};

module.exports.solve = solve;
module.exports.findPythagoreanTriplet = findPythagoreanTriplet;
module.exports.isPythagoreanTriplet = isPythagoreanTriplet;
