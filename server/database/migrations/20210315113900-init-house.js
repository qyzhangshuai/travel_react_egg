/**
 * @description: 民宿表house
 * @author: zs
 * @Date: 2021-03-15 19:39:00
 * @LastEditTime: 2021-03-15 20:14:36
 * @LastEditors: zs
 */
"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    const { INTEGER, DATE, STRING } = Sequelize;

    await queryInterface.createTable("house", {
      id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      name: { type: STRING, defaultValue: null }, // 用房屋名称户名
      info: { type: STRING, defaultValue: null }, // 房屋简介
      addres: { type: STRING, defaultValue: null }, // 房屋地址
      price: { type: INTEGER, defaultValue: null }, // 房屋价格
      cityCode: { type: STRING, allowNull: false }, // 城市编码
      publishTime: { type: DATE, defaultValue: null }, // 发布时间
      showCount: { type: INTEGER, allowNull: false }, // 展示次数
      startTime: { type: DATE, defaultValue: null }, // 开始出租时间
      endTime: { type: DATE, defaultValue: null }, // 出租结束时间
    });
  },

  down: async (queryInterface) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable("house");
  },
};
