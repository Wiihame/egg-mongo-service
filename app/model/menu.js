'use strict';
module.exports = app => {
  const mongoose = app.mongoose;
  const MenuSchema = new mongoose.Schema({
    monthSale: {
      type: Number,
    },
    minPrice: {
      type: Number,
    },
    desc: {
      type: String,
    },
    promptText: {
      type: String,
    },
    minPriceTips: {
      type: Number,
    },
    address: {
      type: String,
    },
    redPack: {
      type: Object,
    },
  });
  return mongoose.model('Menu', MenuSchema);
};
