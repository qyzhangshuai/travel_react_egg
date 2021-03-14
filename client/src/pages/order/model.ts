/**
 * @description: 
 * @author: zs
 * @Date: 2021-02-09 10:34:27
 * @LastEditTime: 2021-03-14 19:06:42
 * @LastEditors: zs
 */
import modelExtend from 'dva-model-extend'
import { commonModel } from '@/models/common'
import { houseService } from '@/service'
import { OrderModelType } from '@/types/store/order'
import { CommonEnum } from '@/constants'
import { RootState } from '@/types/store'

const namespace = 'order'

const HouseModel: OrderModelType = {
  namespace,
  state: {
    unpayOrders: [],
    payOrders: [],
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname }) => {
        if (/^\/house/g.test(pathname)) {

        }
      });
    },
  },
  effects: {
    *fetchUnpayOrder({ payload = {} }, { call }) {
      const { success } = yield call(houseService.addCommentsAsync, payload)
      return { success }
    },
    *fetchPayOrder({ payload = {} }, { call }) {
      const { success } = yield call(houseService.addCommentsAsync, payload)
      return { success }
    },

  },
}

export default modelExtend(commonModel, HouseModel)
