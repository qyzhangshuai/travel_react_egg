/**
 * @description: 生产环境
 * @author: zs
 * @Date: 2021-02-08 11:43:15
 * @LastEditTime: 2021-02-22 21:43:24
 * @LastEditors: zs
 */
import { defineConfig } from 'umi';

export default defineConfig({
  publicPath: 'dist/',
  'process.env.ENV': 'prod',
  devtool: false, // 禁用 sourcemap,增量编译提速
});
