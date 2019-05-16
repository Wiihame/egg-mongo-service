'use strict';

const Controller = require('./base');
class SessionController extends Controller {
  async register(ctx) {
    const req = ctx.request.body;
    let user = await ctx.model.User.findOne({
      phoneNumber: req.phoneNumber,
    });
    if (user) {
      console.log(user);
      return this.fail(500, 'User has been existed');
    }
    user = ctx.model.User({
      // userName: '',
      phoneNumber: req.phoneNumber,
      password: req.password,
      // email: '',
      // age: 0,
      // address: '',
      // redPack: [],
    });
    await user.save();
    const token = _generateToken(ctx, user);
    const res = {
      user,
      'token:': token,
    };
    this.success(res);
  }
  async signIn(ctx) {
    const req = ctx.request.body;
    const user = await ctx.model.User.findOne({
      phoneNumber: req.phoneNumber,
    });
    if (!user) {
      return this.fail(404, 'User is not exist');
    }
    if (user.password !== req.password) {
      return this.fail(500, 'Password Error!');
    }
    const token = _generateToken(ctx, user);
    const res = {
      user,
      'token:': token,
    };
    this.success(res);
  }
}

function _generateToken(ctx, user) {
  return ctx.app.jwt.sign({
    iss: user._id,
    exp: Date.now() + 60 * 60 * 1000,
  }, ctx.app.config.jwt.secret);
}


module.exports = SessionController;
