/**
 * @description: 缓存接口
 * @author: zs
 * @Date: 2021-02-25 10:28:55
 * @LastEditTime: 2021-03-18 20:12:49
 * @LastEditors: zs
 */
"use strict";

//  缓存接口
//  1，接口地址作为redis中的key
//  2，查询redis，有缓存，返回返回接口
//  3，没有缓存，将接口返回结果保存到redis中

module.exports = (options) => {
  return async (ctx, next) => {
    const { url } = ctx.request;
    const cahce = await ctx.app.redis.get(url);

    if (options.include.includes(url)) {
      if (cahce) {
        ctx.body = JSON.parse(cahce);
        return;
      }
      await next();
      await ctx.app.redis.set(url, JSON.stringify(ctx.response.body), "EX", 8);
    } else {
      await next();
    }
  };
};
