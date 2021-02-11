/**
 * @description: 
 * @author: zs
 * @Date: 2021-02-08 11:43:15
 * @LastEditTime: 2021-02-11 09:11:43
 * @LastEditors: zs
 */
import { defineConfig } from 'umi';
import px2rem from 'postcss-plugin-px2rem';
import HardSourceWebpackPlugin from 'hard-source-webpack-plugin'
import routes from './route'
import theme from './utils/theme.config'
import version from './utils/version'

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  theme,
  dva: {
    // hmr: true,
    immer: true
  },
  define: {
    'process.env.ENV': 'dev',
    'process.env.version': version,
  },
  devtool: false, // 禁用 sourcemap,增量编译提速
  dynamicImport: {},
  // dynamicImport:{
  //   loading: '@/components/loading',
  // },
  extraPostCSSPlugins: [
    //https://www.npmjs.com/package/postcss-plugin-px2rem
    px2rem({
      // 过滤属性
      propBlackList: ['border', 'border-top', 'border-left', 'border-right', 'border-bottom', 'border-radius', 'font-size'],//这些属性不需要转换
      exclude: /(node_module)/i,
      selectorBlackList: ['html', 'mp-', 'calendar', 'iconfont'],
      minPixelValue: 1,
    })
  ],
  routes: routes,
  fastRefresh: {},
  // chainWebpack(memo) {
  //   memo.plugin('HardSourceWebpackPlugin').use(new HardSourceWebpackPlugin())
  //   // antd组件库
  //   // memo.plugin('AntdDayjsWebpackPlugin').use(new AntdDayjsWebpackPlugin());
  // },
});
