/**
 * @description: 民宿
 * @author: zs
 * @Date: 2021-03-16 16:28:13
 * @LastEditTime: 2021-03-18 17:35:35
 * @LastEditors: zs
 */
"use strict";

const BaseController = require("./base");

// /**
//  * @Controller house
//  */
class HouseController extends BaseController {
  async hot() {
    const result = await this.service.house.hot();
    this.success(result);
  }
  async search() {
    const { ctx } = this;
    const params = ctx.params();
    const result = await this.service.house.search(params);
    this.success(result);
  }
  async detail() {
    const { ctx } = this;
    const result = await this.service.house.detail(ctx.params("id"));
    this.success(result);
  }
}

module.exports = HouseController;
