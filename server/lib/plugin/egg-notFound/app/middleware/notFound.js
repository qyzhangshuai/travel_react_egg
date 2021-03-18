/**
 * @description: 没有的接口请求处理
 * @author: zs
 * @Date: 2021-02-25 10:28:55
 * @LastEditTime: 2021-03-18 20:16:49
 * @LastEditors: zs
 */
"use strict";
module.exports = () => {
  return async (ctx, next) => {
    const flag = ctx.app.router.stack.filter((item) => {
      return item.regexp.test(ctx.request.url);
    });

    if (flag.length) {
      await next();
    } else {
      ctx.body = {
        status: 404,
        errMsg: "接口 " + ctx.request.url + " 不存在",
      };
    }
  };
};
