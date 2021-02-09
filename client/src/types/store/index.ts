/**
 * @description: 
 * @author: zs
 * @Date: 2021-02-09 09:17:32
 * @LastEditTime: 2021-02-09 10:53:07
 * @LastEditors: zs
 */
import { AppModelState } from './app'
import { HomeModelState } from './home'

interface RootState {
  app: AppModelState;
  home: HomeModelState;
}

export {
  RootState,
  AppModelState,
  HomeModelState,
}