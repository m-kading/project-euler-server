'use strict';

const applyParameterDefaults = (parameters, defaults) => {
  const parametersWithDefaults = {};

  Object.keys(defaults).forEach((key) => {
    parametersWithDefaults[key] = parameters.hasOwnProperty(key)
      ? parameters[key]
      : defaults[key];
  });

  return parametersWithDefaults;
};

module.exports.applyParameterDefaults = applyParameterDefaults;
