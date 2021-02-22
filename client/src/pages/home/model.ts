/**
 * @description: 
 * @author: zs
 * @Date: 2021-02-09 10:34:27
 * @LastEditTime: 2021-02-22 22:00:51
 * @LastEditors: zs
 */
import modelExtend from 'dva-model-extend'
import { commonModel } from '@/models/common'
import { homeService } from '@/service'
import { HomeModelType } from '@/types/store/home'

const namespace = 'home'

const HomeModel: HomeModelType = {
  namespace,
  state: {
    cityArr: [],
    houseArr: []
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname }) => {
        if (/^\/home/g.test(pathname)) {
          // 请求城市 以及 请求 最热民宿
          dispatch({ type: 'getCity' });
          dispatch({ type: 'getHotHouse' });
        }
      });
    },
  },
  effects: {
    *getCity(_, { call, put }) {
      const { success, data } = yield call(homeService.getCity);
      if (success && data) {
        yield put({
          type: 'updateState',
          payload: {
            cityArr: data,
          },
        });
      }
    },
    *getHotHouse(_, { call, put }) {
      const { success, data } = yield call(homeService.getHotHouse);
      if (success && data) {
        yield put({
          type: 'updateState',
          payload: {
            houseArr: data,
          },
        });
      }
    },

  },
  reducers: {
    // save(state, action) {
    //     return {
    //         ...state,
    //         ...action.payload,
    //     };
    // },
    // 启用 immer 之后
    save(state, action) {
      state.cityArr = action.payload;
    },
  },

}

export default modelExtend(commonModel, HomeModel)
