'use strict';

const { Router } = require('express');

const answer1 = require('../../../middleware/answer1');
const answer2 = require('../../../middleware/answer2');
const answer3 = require('../../../middleware/answer3');
const answer4 = require('../../../middleware/answer4');

module.exports = () => {
  const api = Router();

  api.get('/answer/1', answer1);
  api.get('/answer/2', answer2);
  api.get('/answer/3', answer3);
  api.get('/answer/4', answer4);

  return api;
};
