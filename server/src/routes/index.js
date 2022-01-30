"use strict";

const { Router } = require("express");
const v1 = require("./api/v1");

module.exports = () => {
  const app = Router();

  app.use("/v1", v1());

  return app;
};
