/**
 * @description: 错误处理中间件
 * @author: zs
 * @Date: 2021-03-18 10:31:23
 * @LastEditTime: 2021-03-18 15:21:35
 * @LastEditors: zs
 */
"use strict";

module.exports = () => {
  return async function errorHandler(ctx, next) {
    try {
      await next();
    } catch (err) {
      // 所有的异常都会在app上出发一个error事件，框架会记录一条错误日志
      ctx.app.emit("error", err, ctx);

      const status = err.status || 500;

      // 如果时生产环境的时候 500错误的详细错误内容不返回给客户端
      const error =
        status === 500 && ctx.app.config.env === "prod"
          ? "网络错误"
          : err.message || "网络错误";

      ctx.body = {
        message: error,
        status,
        code: 100001,
        data: null,
      };
    }
  };
};
