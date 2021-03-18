/**
 * @description: 权限校验
 * @author: zs
 * @Date: 2021-02-25 10:28:55
 * @LastEditTime: 2021-03-18 20:10:13
 * @LastEditors: zs
 */
"use strict";
module.exports = (options) => {
  // console.log('options', options)
  return async (ctx, next) => {
    const token = ctx.request.token;
    const username = await ctx.app.redis.get(ctx.username);
    const user = username ? username === token : username;

    if (!user && !options.exclude.includes(ctx.request.url.split("?")[0])) {
      ctx.body = {
        status: 1001,
        message: "用户未登录",
      };
    } else {
      await next();
    }
  };
};
