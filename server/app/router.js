/**
 * @description: 注册路由
 * @author: zs
 * @Date: 2021-02-25 10:25:31
 * @LastEditTime: 2021-03-18 15:48:55
 * @LastEditors: zs
 */
"use strict";

/**
 * @param {Egg.Application} app - egg application
 */

// const baseUrl = '/api'

module.exports = (app) => {
  const { router, controller } = app;
  router.post("/user/register", controller.user.register); // 注册
  router.post("/user/login", controller.user.login); // 登陆
  router.get("/user/detail", controller.user.detail); // 查询个人详情信息
  router.put("/user/updateUserInfo", controller.user.updateUserInfo); // 更改个人详情信息
  router.get("/house/hot", controller.house.hot); // 最热民宿
  router.post("/house/search", controller.house.search); // 民宿搜索
  router.get("/house/detail", controller.house.detail); // 房屋详情
};
