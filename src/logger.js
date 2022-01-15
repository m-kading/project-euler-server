const bunyan = require("bunyan");

const logger = bunyan.createLogger({ name: "project-euler" });

module.exports = logger;
