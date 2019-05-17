'use strict';

module.exports = app => {
  const mongoose = app.mongoose;
  const CommentSchema = new mongoose.Schema({
    content: {
      type: String,
    },
    userId: {
      type: String,
    },
    score: {
      type: Number,
    },
    title: {
      type: String,
    },
    contentImgUrl: {
      type: String,
    },
    orderId: {
      type: String,
    },
  });
  return mongoose.model('Comment', CommentSchema);
};
