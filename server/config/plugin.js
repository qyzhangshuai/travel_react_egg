/**
 * @description: 插件
 * @author: zs
 * @Date: 2021-02-25 10:25:31
 * @LastEditTime: 2021-03-17 18:23:48
 * @LastEditors: zs
 */
"use strict";

/** @type Egg.EggPlugin */

// 通过 egg-mysql 插件来访问数据库
exports.sequelize = {
  enable: true,
  package: "egg-sequelize",
};

// 生成token
exports.jwt = {
  enable: true,
  package: "egg-jwt",
};

// 入参数校验
exports.validate = {
  enable: true,
  package: "egg-validate",
};
