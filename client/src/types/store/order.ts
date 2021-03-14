/**
 * @description: 
 * @author: zs
 * @Date: 2021-03-14 18:51:03
 * @LastEditTime: 2021-03-14 19:10:52
 * @LastEditors: zs
 */
import { Effect, Reducer, ImmerReducer, Subscription } from 'umi'
import { Page } from './common'

export interface OrderModelState {
  unpayOrders: [],
  payOrders: []
}

export interface OrderModelType {
  namespace: 'order';
  state: OrderModelState;
  effects: {
    fetchUnpayOrder: Effect;
    fetchPayOrder: Effect;
  };
  subscriptions: { setup: Subscription };
}