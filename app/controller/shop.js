'use strict';
const Controller = require('egg').Controller;

const createRule = {
  name: {
    type: 'string',
  },
  averagePrice: {
    type: 'number',
  },
  deliveryTime: {
    type: 'string',
  },
  discounts: {
    type: 'object',
  },
  minPrice: {
    type: 'number',
  },
  monthSales: {
    type: 'number',
  },
  picUrl: {
    type: 'string',
  },
  shippingFee: {
    type: 'number',
  },
  wmPoiScore: {
    type: 'number',
  },
  bulletin: {
    type: 'string',
  },
};
class ShopController extends Controller {
  async create() {
    const { ctx, service } = this;
    // 校验参数
    ctx.validate(createRule);
    // 组装参数
    const req = ctx.request.body;
    // 调用 Service 进行业务处理
    const res = await service.shop.create(req);
    // 设置响应内容和响应状态码
    ctx.body = res;
    ctx.status = 201;
  }
  async findAll() {
    const res = await this.service.shop.findAll();
    console.log(res);
    this.ctx.body = res;
  }
  async findShopByShopName() {
    const query = this.ctx.query;
    const res = await this.service.shop.findShopByShopName(query);
    this.ctx.body = res;
  }
}

module.exports = ShopController;
