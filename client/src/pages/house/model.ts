/**
 * @description: 
 * @author: zs
 * @Date: 2021-02-09 10:34:27
 * @LastEditTime: 2021-03-17 11:20:09
 * @LastEditors: zs
 */
import modelExtend from 'dva-model-extend'
import { commonModel } from '@/models/common'
import { houseService } from '@/service'
import { HouseModelType } from '@/types/store/house'
import { CommonEnum } from '@/constants'
import { RootState } from '@/types/store'

const namespace = 'house'

const HouseModel: HouseModelType = {
  namespace,
  state: {
    banner: [],
    info: {},
    comments: [],
    params: CommonEnum.PAGE,
  },
  subscriptions: {
    setup({ dispatch, history }) {
      // @ts-ignore
      return history.listen(({ pathname, query }) => {
        if (/^\/house/g.test(pathname)) {
          dispatch({ type: 'getHouseDetail', payload: query });
          dispatch({ type: 'getHouseComments', payload: query });
        }
      });
    },
  },
  effects: {
    *getHouseDetail({ payload }, { call, put }) {
      const { success, data } = yield call(houseService.getHouseDetail, payload);
      if (success && data) {
        const { imgs = [], ...info } = data || {}
        yield put({
          type: 'updateState',
          payload: { banner: imgs.map(item => item.url), info }
        });
      }
    },
    *getHouseComments({ payload = {} }, { call, put, select }) {
      const { params, comments } = yield select((_: RootState) => _[namespace])
      const { pageNum, id } = payload
      const { success, data } = yield call(houseService.getHouseComments, {
        ...params,
        id,
        pageNum: pageNum || params.pageNum
      });
      if (success && data) {
        yield put({
          type: 'updateState',
          payload: {
            comments: Array.isArray(comments) && !comments.length ? data : comments.concat(data),
            params: {
              ...params,
              pageNum: pageNum || params.pageNum
            },
          },
        });
      }
    },
    *addCommentsAsync({ payload = {} }, { call }) {
      const { success } = yield call(houseService.addCommentsAsync, payload)
      return { success }
    },

  },
}

export default modelExtend(commonModel, HouseModel)
