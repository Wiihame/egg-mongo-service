'use strict';

module.exports = app => {
  const mongoose = app.mongoose;
  const ShopSchema = new mongoose.Schema({
    name: {
      type: String,
    },
    averagePrice: {
      type: Number,
    },
    deliveryTime: {
      type: String,
    },
    discounts: {
      type: Object,
    },
    minPrice: {
      type: Number,
    },
    monthSales: {
      type: Number,
    },
    picUrl: {
      type: String,
    },
    shippingFee: {
      type: Number,
    },
    wmPoiScore: {
      type: Number,
    },
  });
  return mongoose.model('Shop', ShopSchema);
};
