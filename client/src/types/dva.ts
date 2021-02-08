/**
 * @description: 
 * @author: zs
 * @Date: 2021-02-08 14:45:16
 * @LastEditTime: 2021-02-08 14:50:58
 * @LastEditors: zs
 */
import { ReducersMapObjectWithEnhancer, EffectsMapObject, SubscriptionsMapObject } from 'dva'
import { ReducersMapObject } from 'redux'
// 扩展model
export interface DvaModel<T> {
  namespace: string,
  state?: T,
  reducers?: ReducersMapObject | ReducersMapObjectWithEnhancer,
  effects?: EffectsMapObject,
  subscriptions?: SubscriptionsMapObject,
}
