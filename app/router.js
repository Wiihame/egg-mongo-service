'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const {
    router,
    controller,
  } = app;
  router.get('/', controller.home.index);
  router.resources('users', '/api/users', controller.users);
  // router.post('/api/users', controller.users.create);
};
