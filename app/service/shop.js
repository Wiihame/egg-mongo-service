'use strict';
module.exports = app => {
  class ShopService extends app.Service {
    async create(req) {
      const ctx = this.ctx;
      const order = await ctx.model.Shop({
        name: req.name,
        averagePrice: req.averagePrice,
        deliveryTime: req.deliveryTime,
        discounts: req.discounts,
        minPrice: req.minPrice,
        monthSales: req.monthSales,
        picUrl: req.picUrl,
        shippingFee: req.shippingFee,
        wmPoiScore: req.wmPoiScore,
      });
      order.save();
    }
    async findAll() {
      const result = await this.ctx.model.Shop.find({});
      return result;
    }
    async findShopByShopName(query) {
      const result = await this.ctx.model.Shop.find({
        name: query.name,
      });
      return result;
    }
  }
  return ShopService;
};
