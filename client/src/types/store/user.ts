/**
 * @description: 
 * @author: zs
 * @Date: 2021-03-14 19:37:55
 * @LastEditTime: 2021-03-14 20:40:51
 * @LastEditors: zs
 */
import { Effect, Reducer, ImmerReducer, Subscription } from 'umi'
import { Page } from './common'

export interface UserModelState {
  id: number,
  username: string,
  avatar: string,
  phone: string,
  sign: string
}

export interface UserModelType {
  namespace: 'user';
  state: UserModelState;
  effects: {
    fetchUnpayOrder: Effect;
    fetchPayOrder: Effect;
    getUserAsync: Effect;
    editUserAsync: Effect;
  };
  subscriptions: { setup: Subscription };
}