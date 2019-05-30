'use strict';

const Controller = require('./base');

const createRule = {
  food: {
    type: 'array',
  },
  shopName: {
    type: 'string',
  },
  price: {
    type: 'number',
  },
  customerName: {
    type: 'string',
  },
  customerAddress: {
    type: 'string',
  },
  contactLink: {
    type: 'number',
  },
  userId: {
    type: 'string',
  },
};

class OrderController extends Controller {
  async create() {
    const { ctx, service } = this;
    // 校验参数
    ctx.validate(createRule);
    // 组装参数
    const req = ctx.request.body;
    // 调用 Service 进行业务处理
    const res = await service.order.create(req);
    // 设置响应内容和响应状态码
    ctx.body = res;
    ctx.status = 201;
  }
  async findOrderByUserId() {
    const { ctx, service } = this;
    const query = ctx.query;
    const res = await service.order.findOrderByUserId(query);
    console.log(res);
    this.ctx.body = res;
  }
  async findAllOrders() {
    const res = await this.service.order.findAll();
    console.log(res);
    this.ctx.body = res;
  }
}

module.exports = OrderController;
