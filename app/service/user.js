'use strict';
module.exports = app => {
  class UserService extends app.Service {
    async create(req) {
      const ctx = this.ctx;
      // const user = await ctx.model.User.insert({
      //   uid: req.uid,
      //   userName: req.userName,
      //   password: req.password,
      //   email: req.email,
      //   age: req.age,
      //   phoneNumber: req.phoneNumber,
      //   address: req.address,
      //   redPack: req.redPack,
      // });
      // return user;
      const user = await ctx.model.User({
        uid: req.uid,
        userName: req.userName,
        password: req.password,
        email: req.email,
        age: req.age,
        phoneNumber: req.phoneNumber,
        address: req.address,
        redPack: req.redPack,
      });
      user.save();
    }
    async findAll() {
      const result = await this.ctx.model.User.find();
      return result;
    }
  }
  return UserService;
};
