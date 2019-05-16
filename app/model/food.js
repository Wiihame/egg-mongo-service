'use strict';

module.exports = app => {
  const mongoose = app.mongoose;
  const FoodSchema = new mongoose.Schema({
    name: {
      type: String,
    },
    foodType: {
      type: String,
    },
    price: {
      type: Number,
    },
    foodImgUrl: {
      type: String,
    },
    shopName: {
      type: String,
    },
  });
  return mongoose.model('Food', FoodSchema);
};
