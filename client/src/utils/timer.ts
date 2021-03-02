/**
 * @description: 
 * @author: zs
 * @Date: 2021-03-02 10:29:33
 * @LastEditTime: 2021-03-02 10:30:04
 * @LastEditors: zs
 */
import dayjs from 'dayjs';

export default function timer(time, type='all'){
  return dayjs(time).format(type === 'all' ? 'YYYY-MM-DD HH:mm:ss' : 'YYYY-MM-DD');
}