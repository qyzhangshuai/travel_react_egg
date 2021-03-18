/**
 * @description: 共用的controller
 * @author: zs
 * @Date: 2021-03-15 15:12:51
 * @LastEditTime: 2021-03-18 15:57:54
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
  /**
   *
   * @param {*} errMsg 可以是错误信息也可以是returnErrorMsg函数中msgObj的key
   * @param {*} status 返回状态码
   */
  error(errMsg = "", status) {
    const { ctx } = this;
    const errorMsg = this.returnErrorMsg(errMsg);
    ctx.body = {
      status: status || 200,
      message: errMsg.toString(),
      code: -1,
      ...errorMsg,
    };
  }

  returnErrorMsg(key) {
    const msgObj = {
      PASSWORD_ERROR: { message: "密码错误" },
      TOKEN_EXPIRE_ERROR: { message: "token失效", status: 401 },
    };

    return msgObj[key];
  }
}

module.exports = BaseController;
