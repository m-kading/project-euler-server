'use strict';

const problem1 = require('../services/problem1');

module.exports = (req, res) => {
  res.send({ answer: problem1.solve(req.body) });
};
