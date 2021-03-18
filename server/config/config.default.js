/**
 * @description: 开发配置
 * @author: zs
 * @Date: 2021-02-25 10:25:31
 * @LastEditTime: 2021-03-18 18:27:07
 * @LastEditors: zs
 */
/* eslint valid-jsdoc: "off" */
"use strict";

const path = require("path");

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

  config.static = {
    prefix: "/public/",
    dir: path.join(appInfo.baseDir, "app/public"),
  };

  config.sequelize = {
    dialect: "mysql",
    host: "127.0.0.1",
    port: 3306,
    database: "egg_house",
    user: "root",
    // password: "zhangshuai",
    password: "password",
    define: {
      timestamps: false,
      freezeTableName: true,
    },
  };
  config.jwt = {
    secret: "egg-traval-jwt",
  };
  // set password for root@localhost = password('zhangshuai');
  config.validate = {
    convert: true, // 会对入参进行转换，建议开启。举个例子，使用表单中默认的 submit 类型按钮提交表单时，提交过来的往往是序列化后的字符串，那些期望是数字类型的字段就会始终验证不过。而开启此项后，会对入参按希望的类型进行转换。
    widelyUndefined: true, // 会把空字符串，NaN,null 这些转成 undefined，将这些异常的数据进行了统一，方便后续处理。
  };

  // config.redis = {
  //   client: {
  //     port: 6379,
  //     host: "127.0.0.1",
  //     password: "abc123456",
  //     db: 0,
  //   },
  // };

  // egg-swagger-doc 配置信息。
  config.swaggerdoc = {
    dirScanner: "./app/controller", // 配置自动扫描的控制器路径。
    // 接口文档的标题，描述或其它。
    apiInfo: {
      title: "旅游接口", // 接口文档的标题。
      description: "swagger-ui for NAPI document.", // 接口文档描述。
      version: "1.0.0", // 接口文档版本。
    },
    schemes: ["http", "https"], // 配置支持的协议。
    consumes: ["application/json"], // 指定处理请求的提交内容类型（Content-Type），例如application/json, text/html。
    produces: ["application/json"], // 指定返回的内容类型，仅当request请求头中的(Accept)类型中包含该指定类型才返回。
    securityDefinitions: {
      // 配置接口安全授权方式。
      // apikey: {
      //   type: 'apiKey',
      //   name: 'clientkey',
      //   in: 'header',
      // },
      // oauth2: {
      //   type: 'oauth2',
      //   tokenUrl: 'http://petstore.swagger.io/oauth/dialog',
      //   flow: 'password',
      //   scopes: {
      //     'write:access_token': 'write access_token',
      //     'read:access_token': 'read access_token',
      //   },
      // },
    },
    enableSecurity: false, // 是否启用授权，默认 false（不启用）。
    // enableValidate: true,    // 是否启用参数校验，默认 true（启用）。
    routerMap: true, // 是否启用自动生成路由，默认 true (启用)。
    enable: true, // 默认 true (启用)。
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
