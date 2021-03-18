/**
 * @description: 限制接口请求太频繁
 * @author: zs
 * @Date: 2021-02-25 10:28:55
 * @LastEditTime: 2021-03-18 20:15:14
 * @LastEditors: zs
 */
"use strict";

// 3秒内最多允许3个接口请求
// 1，设置计数器，每次请求加1；保存起始时间
// 2，超过3秒，计数器大于3，则提示请求频繁；计数器清零，起始时间修改为当前时间
// 3，超过3秒，计数器小于3，计数器清零，起始时间修改为当前时间
//
module.exports = (options) => {
  let count = 0;
  let firstTime = new Date().getTime();

  return async (ctx, next) => {
    if (new Date().getTime() - firstTime >= options.time) {
      if (count >= options.maxCount) {
        count = 0;
        firstTime = new Date().getTime();
        ctx.body = {
          code: -1,
          errMsg: "请求太频繁",
        };
        return;
      }
      count = 0;
      firstTime = new Date().getTime();
      await next();
    } else {
      count++;
      await next();
    }
  };
};
