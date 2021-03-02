/**
 * @description: 
 * @author: zs
 * @Date: 2021-03-01 15:39:26
 * @LastEditTime: 2021-03-02 11:14:04
 * @LastEditors: zs
 */
import { Effect, Reducer, ImmerReducer, Subscription } from 'umi'
import { Page } from './common'

export interface HouseModelState {
  banner: any[],
  info: any,
  comments: any[]
  params: Page
}

export interface HouseModelType {
  namespace: 'house';
  state: HouseModelState;
  effects: {
    getHouseDetail: Effect;
    getHouseComments: Effect;
    addCommentsAsync: Effect;
  };
  subscriptions: { setup: Subscription };
}