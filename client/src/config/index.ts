/**
 * @description: 
 * @author: zs
 * @Date: 2021-02-11 08:34:27
 * @LastEditTime: 2021-02-11 08:34:27
 * @LastEditors: zs
 */
/**
 * @description 
 * @author ronffy
 * @Date 2019-11-29 10:16:33
 * @LastEditTime 2021-02-04 14:09:52
 * @LastEditors ronffy
 */
import { styleLog } from '@/utils'
const apis = require('./apis');
const ENV = process.env.ENV;
styleLog('环境', ENV);
styleLog('版本', process.env.VERSION);

module.exports = {
  ENV,
  name: '飞天系统',
  prefix: 'mini-lesson',
  loginRouter: '/mini/login',
};
