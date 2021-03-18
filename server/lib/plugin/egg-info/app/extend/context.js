/**
 * @description: 拿到服务端信息
 * @author: zs
 * @Date: 2021-02-25 10:28:55
 * @LastEditTime: 2021-03-18 20:07:48
 * @LastEditors: zs
 */
"use strict";
const os = require("os");

module.exports = {
  get info() {
    const data = {
      memory: os.totalmem() / 1024 / 1024 / 1024 + "G",
      platform: os.platform(),
      cpus: os.cpus().length,
      url: this.request.url,
    };
    return data;
  },
};
