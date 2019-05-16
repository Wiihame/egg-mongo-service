'use strict';
const Controller = require('egg').Controller;

const createRule = {
  name: {
    type: 'string',
  },
  foodType: {
    type: 'string',
  },
  price: {
    type: 'number',
  },
  foodImgUrl: {
    type: 'string',
  },
  shopName: {
    type: 'string',
  },
};
class UserController extends Controller {
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
    const res = await service.food.create(req);
    // 设置响应内容和响应状态码
    ctx.body = res;
    ctx.status = 201;
  }
  async findByShopName() {
    const {
      ctx,
      service,
    } = this;
    const params = ctx.params;
    const res = await service.food.findByShopName(params);
    console.log(res);
    this.ctx.body = res;
  }
}

module.exports = UserController;
