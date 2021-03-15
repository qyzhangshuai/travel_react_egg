/**
 * @description: 框架会把 app/extend/request.js 中定义的对象与内置 request 的 prototype 对象进行合并，在处理请求时会基于扩展后的 prototype 生成 request 对象。
 * @author: zs
 * @Date: 2021-02-25 10:28:55
 * @LastEditTime: 2021-03-15 15:09:24
 * @LastEditors: zs
 */
"use strict";

module.exports = {
  // 增加一个 request.token 属性 Getter：
  get token() {
    // console.log('header', this.header);
    return this.get("token");
  },
};
