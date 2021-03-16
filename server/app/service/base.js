/**
 * @description: 共用
 * @author: zs
 * @Date: 2021-03-16 13:35:03
 * @LastEditTime: 2021-03-16 13:35:36
 * @LastEditors: zs
 */
"use strict";

const Service = require("egg").Service;

class BseService extends Service {
  run(callback) {
    const { ctx, app } = this;
    try {
      if (callback) return callback(ctx, app);
    } catch (error) {
      console.log("报错了", error);
      return null;
    }
  }
}

module.exports = BseService;
