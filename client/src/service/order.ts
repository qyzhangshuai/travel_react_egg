/**
 * @description: 
 * @author: zs
 * @Date: 2021-03-14 21:34:28
 * @LastEditTime: 2021-03-14 21:40:52
 * @LastEditors: zs
 */
import { request } from '@/utils';
import { order } from '@/config/apis'
import { Page } from '@/types/store/common'

// 搜索房屋信息
type FetchOrder = Page & {
  type: 0 | 1;
}
export const fetchOrder = (data: FetchOrder) => request(order.fetchOrder, { data })
