'use strict';

const problem2 = require('../services/problem2');

module.exports = (req, res) => {
  res.send({ answer: problem2.solve(req.body) });
};
