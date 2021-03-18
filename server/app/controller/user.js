/**
 * @description: 用户
 * @author: zs
 * @Date: 2021-03-17 14:35:03
 * @LastEditTime: 2021-03-18 17:38:13
 * @LastEditors: zs
 */
"use strict";

const BaseController = require("./base");
const md5 = require("md5");

/**
 * @Controller user
 */
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

  /**  （ 注释必写，swagger-doc是根据这段注释来生成接口详细信息的 ）。
   * @summary 注册
   * @description 注册
   * @router post /user/register
   * @request body string username 用户名。（ get 对应 query 请求，请求值设定为 integer 纯数字类型，ID 为请求的字段，注意大小写，和下面的方法要一一对应，不然会报错 ）。
   * @response 200 JsonBody 返回结果。（ 对应 contract 里面的验证属性，下面会提到 。）
   */

  async register() {
    const { ctx, app } = this;
    const params = ctx.params();
    const userResult = await this.service.user.getUser({
      username: params.username,
    });
    if (userResult) {
      this.error(`用户${params.username}已经存在`);
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
        username: "string",
        password: "string",
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
        this.error(`用户不存在或密码错误`);
      }
    } catch (err) {
      this.error(err);
    }
  }
  // 获取个人详情信息
  async detail() {
    const { ctx } = this;
    const userInfo = ctx.userInfo;
    if (!userInfo) return this.error("TOKEN_EXPIRE_ERROR");
    const user = await ctx.service.user.getUserById(ctx.params("id"));

    if (user) {
      this.success({
        ...this.parseResult(ctx, user),
      });
    } else {
      this.error("该用户不存在");
    }
  }

  async updateUserInfo() {
    const { ctx } = this;
    const userInfo = ctx.userInfo;
    if (!userInfo) return this.error("TOKEN_EXPIRE_ERROR");
    const result = await ctx.service.user.updateUserInfo(ctx.params());
    if (result) {
      this.success("更改个人信息成功");
    }
  }
}

module.exports = UserController;
