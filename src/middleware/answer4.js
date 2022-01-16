'use strict';

const problem4 = require('../services/problem4');

module.exports = (req, res) => {
  res.send({ answer: problem4.solve(req.body) });
};
