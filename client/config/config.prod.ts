/**
 * @description: 生产环境
 * @author: zs
 * @Date: 2021-02-08 11:43:15
 * @LastEditTime: 2021-02-11 08:27:27
 * @LastEditors: zs
 */
import { defineConfig } from 'umi';

export default defineConfig({
  publicPath:'dist/',
  'process.env.ENV': 'prod',
});
