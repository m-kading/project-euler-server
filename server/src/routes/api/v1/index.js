'use strict';

const { Router } = require('express');

const answer1 = require('../../../middleware/answer1');
const answer2 = require('../../../middleware/answer2');
const answer3 = require('../../../middleware/answer3');
const answer4 = require('../../../middleware/answer4');
const answer5 = require('../../../middleware/answer5');
const answer6 = require('../../../middleware/answer6');
const answer7 = require('../../../middleware/answer7');
const answer8 = require('../../../middleware/answer8');
const answer9 = require('../../../middleware/answer9');

module.exports = () => {
  const api = Router();

  api.get('/answer/1', answer1);
  api.get('/answer/2', answer2);
  api.get('/answer/3', answer3);
  api.get('/answer/4', answer4);
  api.get('/answer/5', answer5);
  api.get('/answer/6', answer6);
  api.get('/answer/7', answer7);
  api.get('/answer/8', answer8);
  api.get('/answer/8', answer8);
  api.get('/answer/9', answer9);

  return api;
};
