/**
 * @description: 用户
 * @author: zs
 * @Date: 2021-03-17 14:33:19
 * @LastEditTime: 2021-03-17 14:35:21
 * @LastEditors: zs
 */
"use strict";

module.exports = (app) => {
  const { STRING, INTEGER, DATE, TEXT } = app.Sequelize;

  const User = app.model.define("user", {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    username: STRING(20),
    password: STRING(64),
    avatar: TEXT("long"),
    phone: STRING(20),
    sign: STRING(300),
    createTime: DATE,
    updateTime: DATE,
  });

  return User;
};
