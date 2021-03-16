/**
 * @description: 图片
 * @author: zs
 * @Date: 2021-03-16 16:11:43
 * @LastEditTime: 2021-03-16 16:12:04
 * @LastEditors: zs
 */
"use strict";

module.exports = (app) => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const Imgs = app.model.define("imgs", {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    url: STRING(500),
    houseId: INTEGER,
    createTime: DATE,
  });

  return Imgs;
};
