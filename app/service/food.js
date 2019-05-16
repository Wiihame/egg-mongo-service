'use strict';
module.exports = app => {
  class FoodService extends app.Service {
    async create(req) {
      const ctx = this.ctx;
      const food = await ctx.model.Food({
        name: req.name,
        foodType: req.foodType,
        price: req.price,
        foodImgUrl: req.foodImgUrl,
        shopName: req.shopName,
      });
      food.save();
    }
    async findByShopName(params) {
      const shopName = params.name;
      const result = await this.ctx.model.Food.find({
        shopName,
      });
      return result;
    }
  }
  return FoodService;
};
