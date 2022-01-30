'use strict';

const problem5 = require('../services/problem5');

module.exports = (req, res) => {
  res.send({ answer: problem5.solve(req.body) });
};
