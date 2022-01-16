'use strict';

const problem3 = require('../services/problem3');

module.exports = (req, res) => {
  res.send({ answer: problem3.solve(req.body) });
};
