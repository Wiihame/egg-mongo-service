'use strict';

module.exports = app => {
  const mongoose = app.mongoose;
  const OrderSchema = new mongoose.Schema({
    food: {
      type: Array,
    },
    shopName: {
      type: String,
    },
    price: {
      type: Number,
    },
    customerName: {
      type: String,
    },
    customerAddress: {
      type: String,
    },
    contactLink: {
      type: Number,
    },
    userId: {
      type: String,
    },
  });
  return mongoose.model('Order', OrderSchema);
};
