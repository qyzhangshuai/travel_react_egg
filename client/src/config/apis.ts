/**
 * @description: 请求接口集合
 * @author: zs
 * @Date: 2021-02-09 16:20:28
 * @LastEditTime: 2021-03-17 18:14:06
 * @LastEditors: zs
 */
const apiPrefixObj = {
  prod: '',
  test: '/api/proxy',
  dev: '/api/proxy',
}
const apiPrefix = apiPrefixObj[process.env.ENV] // 实际的请求接口前缀
export const mockPrefix = '/api/mock' // mock的请求接口前缀，用于开发环境

export const home = { // 首页
  getHotHouse: `${apiPrefix}/house/hot`, // 获取最热民宿
  getCity: `${mockPrefix}/commons/citys`, // 获取城市列表
}

export const search = { // 房屋搜索页面
  getSearch: `${apiPrefix}/house/search`, // 获取查询搜索信息
}

export const house = {
  getHouseDetail: `${apiPrefix}/house/detail`, // 搜索房屋信息
  getHouseComments: `${mockPrefix}/comments/lists`, // 评论
  addCommentsAsync: `${mockPrefix}/comments/add`, // 添加评论
}

export const order = {
  fetchOrder: `${mockPrefix}/orders/lists`, // 获取未支付或者支付的订单信息
}
