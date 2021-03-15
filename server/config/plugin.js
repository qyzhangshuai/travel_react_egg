/**
 * @description: 插件
 * @author: zs
 * @Date: 2021-02-25 10:25:31
 * @LastEditTime: 2021-03-15 15:26:20
 * @LastEditors: zs
 */
"use strict";

/** @type Egg.EggPlugin */

// 通过 egg-mysql 插件来访问数据库
exports.sequelize = {
  enable: true,
  package: "egg-sequelize",
};
