/**
 * @description: 注册路由
 * @author: zs
 * @Date: 2021-02-25 10:25:31
 * @LastEditTime: 2021-03-16 20:22:57
 * @LastEditors: zs
 */
"use strict";

/**
 * @param {Egg.Application} app - egg application
 */

// const baseUrl = '/api'

module.exports = (app) => {
  const { router, controller } = app;
  router.get("/", controller.home.index);
  router.get("/house/hot", controller.house.hot);
  router.post("/house/search", controller.house.search);
  router.get("/house/detail", controller.house.detail);
};
