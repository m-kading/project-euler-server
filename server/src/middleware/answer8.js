'use strict';

const problem8 = require('../services/problem8');

module.exports = (req, res) => {
  res.send({ answer: problem8.solve(req.body) });
};
