/**
 * @description: 
 * @author: zs
 * @Date: 2021-02-09 09:17:32
 * @LastEditTime: 2021-03-01 15:40:51
 * @LastEditors: zs
 */
import { Loading } from 'umi'
import { AppModelState } from './app'
import { HomeModelState } from './home'
import { HouseModelState } from './house'

interface RootState {
  loading: Loading;
  app: AppModelState;
  home: HomeModelState;
  house: HouseModelState;
}

export {
  RootState,
  AppModelState,
  Loading,
  HomeModelState,
  HouseModelState,
}