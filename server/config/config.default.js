/**
 * @description: 开发配置
 * @author: zs
 * @Date: 2021-02-25 10:25:31
 * @LastEditTime: 2021-03-17 14:29:17
 * @LastEditors: zs
 */
/* eslint valid-jsdoc: "off" */

"use strict";

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = (appInfo) => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = (exports = {});
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + "_1612607207172_3021";

  // add your middleware config here
  config.middleware = [];

  config.security = {
    csrf: {
      enable: false,
    },
  };

  config.sequelize = {
    dialect: "mysql",
    host: "127.0.0.1",
    port: 3306,
    database: "egg_house",
    user: "root",
    password: "zhangshuai",
    define: {
      timestamps: false,
      freezeTableName: true,
    },
  };

  config.jwt = {
    secret: "egg-traval-jwt",
  };
  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
    salt: "egg-traval-react", // 密码加盐
    redisExpire: 60 * 60 * 24, // 1天redis的过期时间
  };

  return {
    ...config,
    ...userConfig,
  };
};
