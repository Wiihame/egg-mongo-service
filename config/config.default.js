/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
// module.exports = appInfo => {
//   /**
//    * built-in config
//    * @type {Egg.EggAppConfig}
//    **/
//   const config = exports = {};

//   // use for cookie sign key, should change to your own and keep security
//   config.keys = appInfo.name + '_1557812017235_9290';

//   // add your middleware config here
//   config.middleware = [];

//   // add your user config here
//   const userConfig = {
//     // myAppName: 'egg',
//   };

//   return {
//     ...config,
//     ...userConfig,
//   };
// };
exports.keys = 'takeout-service_1557812017235_9290';

exports.mongoose = {
  url: 'mongodb://127.0.0.1/takeout',
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
