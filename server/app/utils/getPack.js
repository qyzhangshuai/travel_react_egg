/**
 * @description: 获取package文件中的参数值
 * @author: zs
 * @Date: 2021-03-15 14:23:46
 * @LastEditTime: 2021-03-15 14:25:33
 * @LastEditors: zs
 */
"use strict";

const path = require("path");

function getPack() {
  const filePath = path.join(process.cwd(), "package.json");
  const pack = require(filePath);
  return pack;
}

module.exports = getPack;
