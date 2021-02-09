/**
 * @description: 
 * @author: zs
 * @Date: 2021-02-09 11:22:55
 * @LastEditTime: 2021-02-09 16:55:04
 * @LastEditors: zs
 */
import { axiosGet } from '@/utils/axios';
import { home } from '@/config/apis'
// const { home } = apis
// 获取最热民宿
interface GetHotHouse {
  name: string;
}
const getHotHouse = (params: GetHotHouse) => axiosGet(home.getHotHouse, params)

// 获取城市列表
const getCity = () => axiosGet(home.getCity)

export default {
  getHotHouse,
  getCity,
}
