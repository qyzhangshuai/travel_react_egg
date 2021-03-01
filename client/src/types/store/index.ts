/**
 * @description: 
 * @author: zs
 * @Date: 2021-02-09 09:17:32
 * @LastEditTime: 2021-03-01 13:40:27
 * @LastEditors: zs
 */
import { Loading } from 'umi'
import { AppModelState } from './app'
import { HomeModelState } from './home'

interface RootState {
  app: AppModelState;
  home: HomeModelState;
  loading: Loading;
}

export {
  RootState,
  AppModelState,
  HomeModelState,
  Loading,
}