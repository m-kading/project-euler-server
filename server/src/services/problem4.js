'use strict';

/*
A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two 3-digit numbers.
*/

const utils = require('../utils');

const defaultParameters = {
  lowerBound: 100,
  upperBound: 999,
};

const isNumPalindromic = (inputNum) => {
  const numAsString = inputNum.toString();

  for (let i = 0; i <= numAsString.length / 2; i++) {
    if (numAsString[i] !== numAsString[numAsString.length - i - 1]) {
      return false;
    }
  }

  return true;
};

const isProductOfFactorsInBounds = (product, lowerBound, upperBound) => {
  for (let i = upperBound; i > lowerBound; i--) {
    if (
      product % i === 0 &&
      product / i >= lowerBound &&
      product / i <= upperBound
    ) {
      return true;
    }
  }
  return false;
};

const findLargestPalindromeProduct = (lowerBound, upperBound) => {
  const largestProduct = upperBound * upperBound;
  const smallestProduct = lowerBound * lowerBound;

  for (let i = largestProduct; i >= smallestProduct; i--) {
    if (
      isNumPalindromic(i) &&
      isProductOfFactorsInBounds(i, lowerBound, upperBound)
    ) {
      return i;
    }
  }
};

const solve = (parameters) => {
  parameters = utils.applyParameterDefaults(parameters, defaultParameters);
  return findLargestPalindromeProduct(
    parameters.lowerBound,
    parameters.upperBound
  );
};

module.exports.solve = solve;
module.exports.isNumPalindromic = isNumPalindromic;
module.exports.findLargestPalindromeProduct = findLargestPalindromeProduct;
module.exports.isProductOfFactorsInBounds = isProductOfFactorsInBounds;
