/**
 * @description: 
 * @author: zs
 * @Date: 2021-02-08 14:26:39
 * @LastEditTime: 2021-02-08 17:47:56
 * @LastEditors: zs
 */
export const commonModel = {
  reducers: {
    updateState(state: any, { payload }: any) {
      return {
        ...state,
        ...payload,
      }
    },
    error(state: any, { payload }: any) {
      return {
        ...state,
        error: payload,
      }
    },
    updateParams(state: any, { payload }: any) {
      const { params } = state;
      return {
        ...state,
        params: {
          ...params,
          ...payload
        }
      }
    },
    updatePagination(state: any, { payload }: any) {
      const { pagination } = state;
      return {
        ...state,
        pagination: {
          ...pagination,
          ...payload
        }
      }
    }
  },
}
