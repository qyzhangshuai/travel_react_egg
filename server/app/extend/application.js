/**
 * @description: 在应用启动时会基于扩展后的 prototype 生成 app 对象。
 * @author: zs
 * @Date: 2021-02-25 10:28:55
 * @LastEditTime: 2021-03-18 10:05:53
 * @LastEditors: zs
 */
"use strict";

const { getPack } = require("../utils");

const Package = Symbol("Application#Package");
const AllPackage = Symbol("Application#AllPackage");

// this 就是 app 对象，在其中可以调用 app 上的其他方法，或访问属性
// 方法扩展
module.exports = {
  // 在app中扩展，拿到package中的某个属性值，或者全部内容
  package(key) {
    if (!this[Package]) {
      this[Package] = getPack();
    }
    return key ? this[Package][key] : this[Package];
  },

  // 属性扩展
  get allPackage() {
    if (!this[AllPackage]) {
      this[AllPackage] = getPack();
    }
    return this[AllPackage];
  },
};
