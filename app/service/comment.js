'use strict';
module.exports = app => {
  class CommentService extends app.Service {
    async create(req) {
      const ctx = this.ctx;
      const comment = await ctx.model.Comment({
        content: req.content,
        userId: req.userId,
        score: req.score,
        title: req.title,
        contentImgUrl: req.contentImgUrl,
        orderId: req.orderId,
      });
      comment.save();
    }
    async findCommentByUserId(params) {
      const userId = params.id;
      const result = await this.ctx.model.Comment.find({
        userId,
      });
      return result;
    }
    async findCommentByOrderId(query) {
      const orderId = query.id;
      const result = await this.ctx.model.Comment.find({
        orderId,
      });
      return result;
    }
  }
  return CommentService;
};
