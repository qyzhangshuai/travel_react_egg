/**
 * @description: 全局model声明
 * @author: zs
 * @Date: 2021-02-07 10:22:33
 * @LastEditTime: 2021-03-18 13:54:16
 * @LastEditors: zs
 */
import { Effect, Reducer, ImmerReducer, Subscription } from 'umi'

interface UserInfo {
  id?: number,
  username?: string,
  avatar?: string,
  phone?: string,
  sign?: string,
}

export interface AppModelState {
  userInfo: UserInfo;
}

export interface AppModelType {
  namespace: 'app';
  state: AppModelState;
  effects: {
    getUserInfo: Effect;
    login: Effect;
    register: Effect;
    updateLoginInfo: Effect;
  };
  reducers: {
    // save: Reducer<GlobalModelState>;
    // 启用 immer 之后
    save: ImmerReducer<AppModelState>;
  };
  subscriptions: { setup: Subscription };
}