/**
 * @description: 框架会把 app/extend/context.js 中定义的对象与 Koa Context 的 prototype 对象进行合并，在处理请求时会基于扩展后的 prototype 生成 ctx 对象。
 * @author: zs
 * @Date: 2021-02-25 10:28:55
 * @LastEditTime: 2021-03-15 14:00:47
 * @LastEditors: zs
 */
"use strict";

module.exports = {
  params(key) {
    const method = this.request.method;
    if (method === "GET") {
      return key ? this.query[key] : this.query;
    }
    return key ? this.request.body[key] : this.request.body;
  },
  // 增加一个 ctx.username 属性 Getter：
  // this 就是 ctx 对象，在其中可以调用 ctx 上的其他方法，或访问属性
  get username() {
    const token = this.request.header.token;
    const tokenCache = token
      ? this.app.jwt.verify(token, this.app.config.jwt.secret)
      : undefined;

    return tokenCache ? tokenCache.username : undefined;
  },
  get userId() {
    const token = this.request.header.token;
    const tokenCache = token
      ? this.app.jwt.verify(token, this.app.config.jwt.secret)
      : undefined;

    return tokenCache ? tokenCache.id : undefined;
  },
};
