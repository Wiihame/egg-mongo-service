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
  router.post('/api/user/register', controller.session.register);
  router.post('/api/user/login', controller.session.signIn);
};
