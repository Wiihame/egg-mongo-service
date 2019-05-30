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
  ignoreJSON: true,
  domainWhiteList: [
    'http://www.wiihame.cn',
    'http://localhost:8080',
    'http://localhost:8081',
  ],
};

exports.jwt = {
  secret: 'takeout-mp built by lk',
};

exports.cors = {
  // origin: '*', //允许所有跨域访问，注释掉则允许上面 白名单 访问
  allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
};
