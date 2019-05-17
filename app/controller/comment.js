'use strict';

const Controller = require('./base');

const createRule = {
  content: {
    type: 'string',
  },
  userId: {
    type: 'string',
  },
  score: {
    type: 'number',
  },
  title: {
    type: 'string',
  },
  contentImgUrl: {
    type: 'string',
  },
  orderId: {
    type: 'string',
  },
};

class CommentController extends Controller {
  async create() {
    const {
      ctx,
      service,
    } = this;
    // 校验参数
    ctx.validate(createRule);
    // 组装参数
    const req = ctx.request.body;
    // 调用 Service 进行业务处理
    const res = await service.comment.create(req);
    // 设置响应内容和响应状态码
    ctx.body = res;
    ctx.status = 201;
  }
  async findCommentByUserId() {
    const {
      ctx,
      service,
    } = this;
    const params = ctx.params;
    const res = await service.comment.findCommentByUserId(params);
    console.log(res);
    this.ctx.body = res;
  }
  async findCommentByOrderId() {
    const {
      ctx,
      service,
    } = this;
    const query = ctx.query;
    const res = await service.comment.findCommentByOrderId(query);
    console.log(res);
    this.ctx.body = res;
  }
}

module.exports = CommentController;
