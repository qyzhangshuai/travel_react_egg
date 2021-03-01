/**
 * @description: 
 * @author: zs
 * @Date: 2021-02-09 10:34:27
 * @LastEditTime: 2021-03-01 15:46:29
 * @LastEditors: zs
 */
import modelExtend from 'dva-model-extend'
import { commonModel } from '@/models/common'
import { houseService } from '@/service'
import { HouseModelType } from '@/types/store/house'

const namespace = 'house'

const HouseModel: HouseModelType = {
  namespace,
  state: {
    banner: [],
    info: {},
    comments: []
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname }) => {
        if (/^\/house/g.test(pathname)) {
          dispatch({ type: 'getHouseDetail' });
          dispatch({ type: 'getHouseComments' });
        }
      });
    },
  },
  effects: {
    *getHouseDetail(_, { call, put }) {
      const { success, data } = yield call(houseService.getHouseDetail);
      if (success && data) {
        const { banner = {}, info = {} } = data || {}
        yield put({
          type: 'updateState',
          payload: { banner, info }
        });
      }
    },
    *getHouseComments(_, { call, put }) {
      const { success, data } = yield call(houseService.getHouseComments);
      if (success && data) {
        yield put({
          type: 'updateState',
          payload: {
            comments: data,
          },
        });
      }
    },

  },
}

export default modelExtend(commonModel, HouseModel)
