/**
 * @description: 
 * @author: zs
 * @Date: 2021-03-19 13:58:58
 * @LastEditTime: 2021-03-19 14:02:57
 * @LastEditors: zs
 */
// import { createLogger } from 'redux-logger';
import { Toast } from 'antd-mobile';

export const dva = {
  config: {
    // onAction: createLogger(),
    onError(error: Error) {
      Toast.fail(`dva报错: ${error.message}`)
    },
    // 这里我们可以加强reducer操作
    // onReducer: reducer => (state, action) => { // 它其实是对reducer的封装或改进
    //   console.log('准备要执行reducer了', action)
    //   return reducer(state, action)
    // },
  },
};