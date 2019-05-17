'use strict';
module.exports = app => {
  class OrderService extends app.Service {
    async create(req) {
      const ctx = this.ctx;
      const order = await ctx.model.Order({
        food: req.food,
        shopName: req.shopName,
        price: req.price,
        customerName: req.customerName,
        customerAddress: req.customerAddress,
        contactLink: req.contactLink,
        userId: req.userId,
      });
      order.save();
    }
    async findOrderByUserId(query) {
      const userId = query.userid;
      const result = await this.ctx.model.Order.find({
        userId,
      });
      return result;
    }
  }
  return OrderService;
};
