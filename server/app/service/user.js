/**
 * @description: 用户
 * @author: zs
 * @Date: 2021-03-17 14:35:43
 * @LastEditTime: 2021-03-18 16:58:35
 * @LastEditors: zs
 */
"use strict";

const BaseService = require("./base");
const md5 = require("md5");

class UserService extends BaseService {
  // constructor(ctx) {
  //   super(ctx); // 调用父对象上的函数。
  //   this.tableName = "User"; // 数据库表名。
  //   this.database = this.ctx.model[this.tableName]; // 获取 model 下的表（ model 相当于数据库的表 ）。
  //   console.log("this.database", this.database);
  // }

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
  async getUserById(id) {
    return this.run(async () => {
      const { ctx } = this;
      const result = await ctx.model.User.findByPk(id);
      return result;
    });
  }
  async updateUserInfo(parmas) {
    return this.run(async () => {
      const { ctx } = this;
      const result = await ctx.model.User.update(parmas, {
        where: { id: parmas.id },
      });
      return result;
    });
  }
}

module.exports = UserService;
