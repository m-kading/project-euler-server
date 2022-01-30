'use strict';

const problem6 = require('../services/problem6');

module.exports = (req, res) => {
  res.send({ answer: problem6.solve(req.body) });
};
