'use strict';

const { Router } = require('express');

const answer1 = require('../../../middleware/answer1');
const answer2 = require('../../../middleware/answer2');

module.exports = () => {
  const api = Router();

  api.get('/answer/1', answer1);
  api.get('/answer/2', answer2);

  return api;
};
