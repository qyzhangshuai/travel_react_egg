/**
 * @description: 
 * @author: zs
 * @Date: 2021-02-11 08:34:27
 * @LastEditTime: 2021-02-22 18:51:44
 * @LastEditors: zs
 */
import { styleLog } from '@/utils'

export const ENV = process.env.ENV;
styleLog('环境', ENV);
styleLog('版本', process.env.VERSION);

export const name = '飞天系统';
export const prefix = 'mini-lesson';
export const loginRouter = '/mini/login';