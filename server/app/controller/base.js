/**
 * @description: 共用的controller
 * @author: zs
 * @Date: 2021-03-15 15:12:51
 * @LastEditTime: 2021-03-15 15:13:33
 * @LastEditors: zs
 */
"use strict";

const Controller = require("egg").Controller;

class BaseController extends Controller {
  success(data = {}) {
    const { ctx } = this;
    ctx.body = {
      status: 200,
      data,
    };
  }

  error(errMsg = "") {
    const { ctx } = this;
    ctx.body = {
      status: 500,
      errMsg,
    };
  }
}

module.exports = BaseController;
