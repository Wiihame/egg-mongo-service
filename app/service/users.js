'use strict';
module.exports = app => {
  class UserService extends app.Service {
    async create() {
      const ctx = this.ctx;
      const req = ctx.request.body;
      console.log(ctx.model.Users);
      const user = await ctx.model.Users.insert({
        uid: req.uid,
        userName: req.userName,
        password: req.password,
        email: req.email,
        age: req.age,
        phoneNumber: req.phoneNumber,
        address: req.address,
        redPack: req.redPack,
      });
      return user;
    }
  }
  return UserService;
};
