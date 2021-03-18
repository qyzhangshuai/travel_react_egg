/**
 * @description: 
 * @author: zs
 * @Date: 2021-03-14 22:51:22
 * @LastEditTime: 2021-03-18 11:09:12
 * @LastEditors: zs
 */
/**
 * @description: 
 * @author: zs
 * @Date: 2021-03-14 19:37:14
 * @LastEditTime: 2021-03-14 20:43:13
 * @LastEditors: zs
 */
 import modelExtend from 'dva-model-extend'
 import { commonModel } from '@/models/common'
 import { houseService } from '@/service'
 import { UserModelType } from '@/types/store/user'
 import { CommonEnum } from '@/constants'
 import { RootState } from '@/types/store'
 
 const namespace = 'user'
 
 const HouseModel: UserModelType = {
   namespace,
   state: {
     id: undefined,
     username: undefined,
     avatar: undefined,
     phone: undefined,
     sign: undefined,
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
     // 得到用户信息
     *getUserAsync({ payload = {} }, { call }) {
       // const user = await Http({
       //   url: '/user/detail',
       //   body: payload
       // });
       // if(user){
       //   dispatch({
       //     type: 'getUser',
       //     payload: user
       //   });
       // }
     },
     // 编辑用户信息
     * editUserAsync({ payload = {} }, { call }) {
       // const result = await Http({
       //   url: '/user/edit',
       //   body: payload
       // });
       // if (result) {
       //   Toast.success('编辑成功');
       //   history.push('/user');
       // }
     },
 
   },
 }
 
 export default modelExtend(commonModel, HouseModel)
 