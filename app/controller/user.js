'use strict';
const Controller = require('egg').Controller;

// const createRule = {
//   uid: {
//     type: 'number',
//   },
//   userName: {
//     type: 'string',
//   },
//   password: {
//     type: 'string',
//   },
//   email: {
//     type: 'string',
//   },
//   age: {
//     type: 'number',
//   },
//   phoneNumber: {
//     type: 'number',
//   },
//   address: {
//     type: 'string',
//   },
//   redPack: {
//     type: 'array',
//   },
// };
class UserController extends Controller {
  async create() {
    const {
      ctx,
      service,
    } = this;
    // 校验参数
    // ctx.validate(createRule);
    // 组装参数
    const req = ctx.request.body;
    // 调用 Service 进行业务处理
    const res = await service.user.create(req);
    // 设置响应内容和响应状态码
    ctx.body = res;
    ctx.status = 201;
  }
  async findAll() {
    const res = await this.service.user.findAll();
    console.log(res);
    this.ctx.body = res;
  }
}

module.exports = UserController;
