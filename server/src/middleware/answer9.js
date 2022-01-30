'use strict';

const problem9 = require('../services/problem9');

module.exports = (req, res) => {
  res.send({ answer: problem9.solve(req.body) });
};
