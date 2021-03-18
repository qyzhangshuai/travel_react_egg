/**
 * @description: 开发配置
 * @author: zs
 * @Date: 2021-02-25 10:25:31
 * @LastEditTime: 2021-03-18 13:37:36
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
  config.middleware = ["errorHandler"];

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

  config.validate = {
    convert: true, // 会对入参进行转换，建议开启。举个例子，使用表单中默认的 submit 类型按钮提交表单时，提交过来的往往是序列化后的字符串，那些期望是数字类型的字段就会始终验证不过。而开启此项后，会对入参按希望的类型进行转换。
    widelyUndefined: true, // 会把空字符串，NaN,null 这些转成 undefined，将这些异常的数据进行了统一，方便后续处理。
  };

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
    salt: "egg-traval-react", // 密码加盐
    redisExpire: 60 * 60 * 24, // 1天redis的过期时间
    env: "dev",
  };

  return {
    ...config,
    ...userConfig,
  };
};
