/**
 * @description: 
 * @author: zs
 * @Date: 2021-02-09 11:22:55
 * @LastEditTime: 2021-02-22 21:39:59
 * @LastEditors: zs
 */
import { request } from '@/utils';
import { home } from '@/config/apis'

// 获取最热民宿
interface GetHotHouse {
  name: string;
}
export const getHotHouse = (data: GetHotHouse) => request(home.getHotHouse, { data })

// 获取城市列表
export const getCity = () => request(home.getCity)

