/**
 * @description: 共用的controller
 * @author: zs
 * @Date: 2021-03-15 15:12:51
 * @LastEditTime: 2021-03-17 18:42:14
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

  error(errMsg = "", status) {
    const { ctx } = this;
    ctx.body = {
      status: status || 500,
      message: errMsg,
    };
  }
}

module.exports = BaseController;
