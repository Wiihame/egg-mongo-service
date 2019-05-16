'use strict';

/** @type Egg.EggPlugin */
exports.nunjucks = {
  // had enabled by egg
  // static: {
  enable: true,
  package: 'egg-view-nunjucks',
  // }
};

exports.mongoose = {
  enable: true,
  package: 'egg-mongoose',
};

exports.jwt = {
  enable: true,
  package: 'egg-jwt',
};

exports.validate = {
  enable: true,
  package: 'egg-validate',
};
