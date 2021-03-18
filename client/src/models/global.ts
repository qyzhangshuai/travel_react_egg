/**
 * @description: 全局的model
 * @author: zs
 * @Date: 2021-02-07 09:50:13
 * @LastEditTime: 2021-03-18 14:43:26
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
        userInfo: {},
    },
    effects: {
        // 登陆
        *login({ payload }, { call, put }) {
            const { success, data } = yield call(appService.login, payload);
            if (success && data) {
                yield put({
                    type: 'updateState',
                    payload: {
                        userInfo: data,
                    },
                });
            }
        },
        // 得到用户信息
        *getUserInfo(_, { call, put }) {
            const { success, data } = yield call(appService.getLoginInfo);
            if (success && data) {
                yield put({
                    type: 'updateState',
                    payload: {
                        userInfo: data,
                    },
                });
            }
        },
        // 注册用户
        *register({ payload }, { call, put }) {
            const { success, data } = yield call(appService.register, payload);
            if (success && data) {
                yield put({
                    type: 'updateState',
                    payload: {
                        userInfo: data,
                    },
                });
            }
            return { success }
        },

        // 更改用户信息
        * updateLoginInfo({ payload }, { call, put }) {
            const { success, data } = yield call(appService.updateLoginInfo, payload);
            if (success && data) {

                yield put({
                    type: 'updateState',
                    payload: {
                        userInfo: data,
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

