/**
 * @description: Helper 函数用来提供一些实用的 utility 函数。通过 ctx.helper 访问到 helper 对象
 * @author: zs
 * @Date: 2021-02-25 10:28:55
 * @LastEditTime: 2021-03-15 15:11:53
 * @LastEditors: zs
 */
"use strict";

const dayjs = require("dayjs");

module.exports = {
  base64Encode(str = "") {
    // return new Buffer(str).toString('base64');
    return Buffer.from(str).toString("base64");
  },
  time() {
    return dayjs().format("YYYY-MM-DD HH:mm:ss");
  },
  timestamp(data) {
    return new Date(data).getTime();
  },
  unPick(source, arr) {
    if (Array.isArray(arr)) {
      const obj = {};
      for (const i in source) {
        if (!arr.includes(i)) {
          obj[i] = source[i];
        }
      }
      return obj;
    }
  },
};
