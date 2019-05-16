'use strict';
module.exports = app => {
  const mongoose = app.mongoose;
  const UserSchema = new mongoose.Schema({
    uid: {
      type: Number,
    },
    userName: {
      type: String,
    },
    password: {
      type: String,
    },
    email: {
      type: String,
    },
    age: {
      type: Number,
    },
    phoneNumber: {
      type: Number,
    },
    address: {
      type: String,
    },
    redPack: {
      type: Object,
    },
  });
  return mongoose.model('User', UserSchema);
};
