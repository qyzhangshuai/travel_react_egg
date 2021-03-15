/**
 * @description: 框架会把 app/extend/response.js 中定义的对象与内置 response 的 prototype 对象进行合并，在处理请求时会基于扩展后的 prototype 生成 response 对象。
 * @author: zs
 * @Date: 2021-02-25 10:28:55
 * @LastEditTime: 2021-03-15 14:03:53
 * @LastEditors: zs
 */
"use strict";

module.exports = {
  // 增加一个 response.token 属性 setter：
  set token(token) {
    console.log("token", this);
    this.set("token", token);
  },
};
