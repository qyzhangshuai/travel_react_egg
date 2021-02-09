/**
 * @description: 
 * @author: zs
 * @Date: 2021-02-09 10:37:34
 * @LastEditTime: 2021-02-09 10:40:54
 * @LastEditors: zs
 */
import { Effect, Reducer, ImmerReducer, Subscription } from 'umi'



export interface HomeModelState {
  userInfo: string;
}

export interface HomeModelType {
  namespace: 'home';
  state: HomeModelState;
  effects: {
    getUserInfo: Effect;
  };
  reducers: {
    // save: Reducer<GlobalModelState>;
    // 启用 immer 之后
    save: ImmerReducer<HomeModelState>;
  };
  subscriptions: { setup: Subscription };
}