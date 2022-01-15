"use strict";

const bodyParser = require("body-parser");
const express = require("express");
const responseTime = require("response-time");

const routes = require("./routes");

const app = express();
app.use(responseTime());
app.use(bodyParser.json());

app.use(routes());

module.exports = app;
