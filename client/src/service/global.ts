/**
 * @description: 
 * @author: zs
 * @Date: 2021-02-07 10:18:30
 * @LastEditTime: 2021-02-07 10:53:31
 * @LastEditors: zs
 */
import { axiosGet, axiosPost } from '@/utils/axios';

interface GetLoginInfo {
  name: string;
}
const getLoginInfo = (params: GetLoginInfo) => axiosGet('/login', params)

interface UpdateLoginInfo {
  name?: string;
  age?: number;
}
// 更新用户信息
const updateLoginInfo = (params: UpdateLoginInfo) => axiosPost('/login', params)

export default {
  getLoginInfo,
  updateLoginInfo,
}


