/**
 * @description: 用户
 * @author: zs
 * @Date: 2021-03-17 14:35:43
 * @LastEditTime: 2021-03-17 18:25:08
 * @LastEditors: zs
 */
"use strict";

const BaseService = require("./base");
const md5 = require("md5");

class UserService extends BaseService {
  async register(params) {
    return this.run(async (ctx) => {
      const result = await ctx.model.User.create(params);
      return result;
    });
  }

  async getUser({ username, password }) {
    return this.run(async () => {
      const { ctx, app } = this;
      const _where = password
        ? { username, password: md5(password + app.config.salt) }
        : { username };
      const result = await ctx.model.User.findOne({
        where: _where,
      });
      return result;
    });
  }
}

module.exports = UserService;
