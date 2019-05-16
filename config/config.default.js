/* eslint valid-jsdoc: "off" */

'use strict';

exports.keys = 'takeout-service_1557812017235_9290';

exports.mongoose = {
  url: 'mongodb://127.0.0.1:27017/takeout',
  options: {},
  // mongoose global plugins, expected a function or an array of function and options
  // plugins: [ createdPlugin, [ updatedPlugin, pluginOptions ]],
};
exports.security = {
  xframe: {
    enable: false,
  },
  csrf: {
    enable: false,
  },
};

exports.jwt = {
  secret: 'takeout-mp built by lk',
};
