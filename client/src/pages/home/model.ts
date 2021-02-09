/**
 * @description: 
 * @author: zs
 * @Date: 2021-02-09 10:34:27
 * @LastEditTime: 2021-02-09 11:23:38
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
    userInfo: '',
  },
  effects: {
    *getUserInfo({ payload }, { call, put }) {
      const response = yield call(homeService.getLoginInfo, { ...payload, name: 'test' });
      if (response.status === 'ok') {
        yield put({
          type: 'save',
          payload: {
            userInfo: response.data,
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
      state.userInfo = action.payload;
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname }) => {
        const reg = /^\/login/g;
        if (reg.test(pathname)) {
          dispatch({
            type: 'getUserInfo',
            payload: {},
          });
        }
      });
    },
  },
}

export default modelExtend(commonModel, HomeModel)

