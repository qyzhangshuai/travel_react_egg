/**
 * @description: 用户
 * @author: zs
 * @Date: 2021-03-17 14:35:03
 * @LastEditTime: 2021-03-17 18:37:46
 * @LastEditors: zs
 */
"use strict";

const BaseController = require("./base");
const md5 = require("md5");

class UserController extends BaseController {
  // 生成token
  async jwtSign({ id, username }) {
    const { app } = this;
    const token = app.jwt.sign(
      {
        id,
        username,
      },
      app.config.jwt.secret
    );
    // await app.redis.set(username, token, 'EX', app.config.redisExpire);
    return token;
  }
  // 对参数进行解析
  parseResult(ctx, result) {
    return {
      ...ctx.helper.unPick(result.dataValues, ["password"]),
      createTime: ctx.helper.timestamp(result.createTime),
    };
  }
  // 注册
  async register() {
    const { ctx, app } = this;
    const params = ctx.params();
    const userResult = await this.service.user.getUser(params);
    if (userResult) {
      this.error(`用户${params.username}已经存在`, 200);
      return;
    }
    const result = await this.service.user.register({
      ...params,
      password: md5(params.password + app.config.salt),
      createTime: ctx.helper.time(),
    });
    const token = await this.jwtSign({
      id: result.id,
      username: result.username,
    });

    this.success({
      ...this.parseResult(ctx, result),
      token,
    });
  }
  // 登陆
  async login() {
    const { ctx } = this;
    const params = ctx.params();
    try {
      ctx.validate({
        username: { isquired: true },
        password: { isquired: true },
      });

      const result = await ctx.service.user.getUser(params);
      if (result) {
        const token = await this.jwtSign({
          id: result.id,
          username: result.username,
        });
        this.success({
          ...this.parseResult(ctx, result),
          token,
        });
      } else {
        this.error(`用户${params.username}不存在`, 200);
      }
    } catch (err) {
      this.error(err);
    }
  }
  // 获取个人详情信息
  async detail() {
    const { ctx } = this;
    const params = ctx.params("id");
    await ctx.service.user.detail(params);
  }
}

module.exports = UserController;
