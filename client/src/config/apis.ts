/**
 * @description: 
 * @author: zs
 * @Date: 2021-02-09 16:20:28
 * @LastEditTime: 2021-02-09 22:45:24
 * @LastEditors: zs
 */
const apiPrefixObj = {
  prod: '',
  test: '',
  dev: '/api/proxy',
}
let apiPrefix = apiPrefixObj[process.env.ENV] || '/api/proxy';

export const home = {
  getHotHouse: `${apiPrefix}/house/hot`, // 获取最热民宿
  getCity: `${apiPrefix}/commons/citys`, // 获取城市列表
}

