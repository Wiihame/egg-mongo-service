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
  router.post('/api/food/insert', controller.food.create);
  router.get('/api/food/find-by-shopname/:name', controller.food.findByShopName);
  router.post('/api/comment/insert', controller.comment.create);
  router.get('/api/comment/find-by-userid/:id', controller.comment.findCommentByUserId);
  router.get('/api/comment/find-by-orderid/', controller.comment.findCommentByOrderId);
  router.post('/api/order/insert', controller.order.create);
  router.get('/api/order/find-by-userid/', controller.order.findOrderByUserId);
  router.post('/api/shop/insert', controller.shop.create);
  router.get('/api/shop/find-all', controller.shop.findAll);
  router.get('/api/shop/find-by-shopname', controller.shop.findShopByShopName);
};
