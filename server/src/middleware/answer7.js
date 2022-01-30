'use strict';

const problem7 = require('../services/problem7');

module.exports = (req, res) => {
  res.send({ answer: problem7.solve(req.body) });
};
