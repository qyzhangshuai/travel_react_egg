/**
 * @description: 
 * @author: zs
 * @Date: 2021-03-01 15:34:14
 * @LastEditTime: 2021-03-02 10:24:39
 * @LastEditors: zs
 */
import { request } from '@/utils';
import { house } from '@/config/apis'

// 搜索房屋信息
interface GetHouseDetail {
  id: string | number;
}
export const getHouseDetail = (data: GetHouseDetail) => request(house.getHouseDetail, { data })

// 评论
export const getHouseComments = (data: GetHouseDetail) => request(house.getHouseComments, { data })