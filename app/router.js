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
  router.post('/api/user/create', controller.user.create);
  router.get('/api/user/find', controller.user.findAll);
  // router.post('/api/users', controller.users.create);
};
