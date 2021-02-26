/**
 * @description: 
 * @author: zs
 * @Date: 2021-02-26 15:50:49
 * @LastEditTime: 2021-02-26 15:53:00
 * @LastEditors: zs
 */
import { useState, useCallback } from 'react'
function useForceUpdate() {
  const [, setValue] = useState(0)
  const handleSetvalue = useCallback(() => setValue(new Date().getTime()), [])
  return handleSetvalue
}
export default useForceUpdate