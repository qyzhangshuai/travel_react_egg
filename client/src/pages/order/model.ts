/**
 * @description: 
 * @author: zs
 * @Date: 2021-02-09 10:34:27
 * @LastEditTime: 2021-03-14 22:08:47
 * @LastEditors: zs
 */
import modelExtend from 'dva-model-extend'
import { commonModel } from '@/models/common'
import { orderService } from '@/service'
import { OrderModelType } from '@/types/store/order'
import { CommonEnum } from '@/constants'
import { RootState } from '@/types/store'

const namespace = 'order'

const HouseModel: OrderModelType = {
  namespace,
  state: {
    unpayOrders: [],
    payOrders: [],
    type: 0,
    unpayPage: {
      pageNum: 1,
      pageSize: 10,
    },
    unpayHasmore: false,
    payPage: {
      pageNum: 1,
      pageSize: 10,
    },
    payHasmore: false,
  },
  effects: {
    *fetchOrder({ payload = {} }, { call, put, select }) {
      const {
        unpayOrders,
        payOrders,
        type: typeAlias,
        unpayPage,
        payPage,
      } = yield select((_: RootState) => _[namespace])
      const { type, pageNum } = payload

      const typeResult = type || typeAlias

      const params = {
        ...payload,
        ...(typeResult === 0 ? unpayPage : payPage),
        type: typeResult,
        pageNum: pageNum || (typeResult === 0 ? unpayPage.pageNum : payPage.pageNum)
      }

      const { success, data } = yield call(orderService.fetchOrder, params)
      if (success && data) {
        if (typeResult === 0) {
          yield put({
            type: 'updateState',
            payload: {
              unpayOrders: [...unpayOrders, ...data],
              unpayPage: {
                ...unpayPage,
                pageNum: pageNum || unpayPage.pageNum
              },
              unpayHasmore: data.length < unpayPage.pageSize
            }
          })
        } else {
          yield put({
            type: 'updateState',
            payload: {
              payOrders: [...payOrders, ...data],
              payPage: {
                ...payPage,
                pageNum: pageNum || payPage.pageNum
              },
              payHasmore: data.length < payPage.pageSize
            }
          })
        }
      }
    },

  },
}

export default modelExtend(commonModel, HouseModel)
