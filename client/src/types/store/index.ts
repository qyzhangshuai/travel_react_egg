/**
 * @description: 
 * @author: zs
 * @Date: 2021-02-09 09:17:32
 * @LastEditTime: 2021-03-14 20:36:13
 * @LastEditors: zs
 */
import { Loading } from 'umi'
import { AppModelState } from './app'
import { HomeModelState } from './home'
import { HouseModelState } from './house'
import { OrderModelState } from './order'
import { UserModelState } from './user'

interface RootState {
  loading: Loading;
  app: AppModelState;
  home: HomeModelState;
  house: HouseModelState;
  order: OrderModelState;
  user: UserModelState;
}

export {
  RootState,
  AppModelState,
  Loading,
  HomeModelState,
  HouseModelState,
  OrderModelState,
  UserModelState,
}