/**
 * @description: 
 * @author: zs
 * @Date: 2021-03-01 15:39:26
 * @LastEditTime: 2021-03-01 15:44:41
 * @LastEditors: zs
 */
import { Effect, Reducer, ImmerReducer, Subscription } from 'umi'

export interface HouseModelState {
  banner: any[],
  info: any,
  comments: any[]
}

export interface HouseModelType {
  namespace: 'house';
  state: HouseModelState;
  effects: {
    getHouseDetail: Effect;
    getHouseComments: Effect;
  };
  subscriptions: { setup: Subscription };
}