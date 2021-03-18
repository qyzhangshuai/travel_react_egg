/**
 * @description: 
 * @author: zs
 * @Date: 2021-02-07 10:18:30
 * @LastEditTime: 2021-03-18 16:09:42
 * @LastEditors: zs
 */
import { request } from '@/utils';
import { user } from '@/config/apis'

interface GetLoginInfo {
  username: string;
  password: string
}
// 登陆
export const login = (data: GetLoginInfo) => request(user.login, { data, method: 'POST' })

// 得到用户信息
export const getLoginInfo = () => request(user.getLoginInfo)
// 注册用户
export const register = (data: GetLoginInfo) => request(user.register, { data, method: 'POST' })

interface UpdateLoginInfo {
  phone?: string;
  sign?: string;
  avatar?: string;
}
// 更新用户信息
export const updateLoginInfo = (data: UpdateLoginInfo) => request(user.updateUserInfo, { data, method: 'PUT' })
