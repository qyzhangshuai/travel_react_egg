/**
 * @description: 
 * @author: zs
 * @Date: 2021-03-14 18:51:03
 * @LastEditTime: 2021-03-14 22:00:03
 * @LastEditors: zs
 */
import { Effect, Reducer, ImmerReducer, Subscription } from 'umi'
import { Page } from './common'

export interface OrderModelState {
  unpayOrders: any[],
  payOrders: any[],
  type: 0 | 1,
  unpayPage: Page
  payPage: Page
  unpayHasmore: boolean
  payHasmore: boolean
}

export interface OrderModelType {
  namespace: 'order';
  state: OrderModelState;
  effects: {
    fetchOrder: Effect;
  };
}