/**
 * @description: 允许访问的ip地址
 * @author: zs
 * @Date: 2021-02-25 10:28:55
 * @LastEditTime: 2021-03-18 20:09:10
 * @LastEditors: zs
 */
"use strict";

module.exports = (options) => {
  return async (ctx, next) => {
    const { referer } = ctx.request.header;
    // console.log(referer)
    if (referer) {
      const url = new URL(referer);
      if (options.includes(url.host)) {
        await next();
      } else {
        ctx.body = {
          status: 403,
          message: `host ${url.host} 被禁止`,
        };
      }
    } else {
      await next();
    }
  };
};
