/**
 * @description: 全局model声明
 * @author: zs
 * @Date: 2021-02-07 10:22:33
 * @LastEditTime: 2021-02-08 17:49:15
 * @LastEditors: zs
 */
import { Effect, Reducer, ImmerReducer, Subscription } from 'umi'

interface UserInfo {
  name: string
}

export interface AppModelState {
  userInfo: UserInfo;
}

export interface AppModelType {
  namespace: 'app';
  state: AppModelState;
  effects: {
    getUserInfo: Effect;
  };
  reducers: {
    // save: Reducer<GlobalModelState>;
    // 启用 immer 之后
    save: ImmerReducer<AppModelState>;
  };
  subscriptions: { setup: Subscription };
}