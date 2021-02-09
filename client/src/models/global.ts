/**
 * @description: 全局的model
 * @author: zs
 * @Date: 2021-02-07 09:50:13
 * @LastEditTime: 2021-02-09 11:21:32
 * @LastEditors: zs
 */
import modelExtend from 'dva-model-extend'
import { commonModel } from '@/models/common'
import { appService } from '@/service'
import { AppModelType } from '@/types/store/app'

const namespace = 'app'

const globalModel: AppModelType = {
    namespace,
    state: {
        userInfo: { name: 'hxy' },
    },
    effects: {
        *getUserInfo({ payload }, { call, put }) {
            const response = yield call(appService.getLoginInfo, { ...payload, name: 'test' });
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

export default modelExtend(commonModel, globalModel);

