/**
 * @description: 
 * @author: zs
 * @Date: 2021-02-07 10:18:30
 * @LastEditTime: 2021-02-22 22:06:44
 * @LastEditors: zs
 */
import { request } from '@/utils';

interface GetLoginInfo {
  name: string;
}
export const getLoginInfo = (data: GetLoginInfo) => request('/login', { data })

interface UpdateLoginInfo {
  name?: string;
  age?: number;
}
// 更新用户信息
export const updateLoginInfo = (data: UpdateLoginInfo) => request('/login', { data })
