/**
 * @description: 用户表user
 * @author: zs
 * @Date: 2021-03-15 18:16:57
 * @LastEditTime: 2021-03-15 19:42:30
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
    await queryInterface.createTable("user", {
      id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      username: STRING(20), // 用户名
      password: STRING(64), // 密码
      avatar: STRING, // 头像
      phone: STRING(11), // 电话
      sign: STRING(300), // 用户签名
      createTime: DATE, // 创建时间
      updateTime: DATE, // 更新时间
    });
  },

  down: async (queryInterface) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable("users");
  },
};
