/**
 * @description: 测试环境
 * @author: zs
 * @Date: 2021-02-08 11:43:15
 * @LastEditTime: 2021-02-23 09:31:11
 * @LastEditors: zs
 */
import { defineConfig } from 'umi';

export default defineConfig({
  publicPath: 'dist/',
  define: {
    'process.env.ENV': 'test',
  },
  devtool: false, // 禁用 sourcemap,增量编译提速
});
