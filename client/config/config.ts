/**
 * @description: 
 * @author: zs
 * @Date: 2021-02-08 11:43:15
 * @LastEditTime: 2021-03-16 20:20:41
 * @LastEditors: zs
 */
import { defineConfig } from 'umi';
import px2rem from 'postcss-plugin-px2rem';
import HardSourceWebpackPlugin from 'hard-source-webpack-plugin'
import AntdDayjsWebpackPlugin from 'antd-dayjs-webpack-plugin';
import routes from './route'
import theme from './utils/theme.config'
import version from './utils/version'

const ENV = process.env.ENV || 'dev'
const isDev = ENV === 'dev'
const isTest = ENV === 'test'
const isProd = ENV === 'prod'
const publicPathObj = {
  'dev': '/',
  'test': '/dist/',
  'prod': '/dist/'
}

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
    'process.env.ENV': ENV,
    'process.env.version': version,
  },
  devtool: isDev ? 'cheap-module-eval-source-map' : false,
  publicPath: publicPathObj[ENV],
  dynamicImport: {
    loading: '@/components/Loading',
  },
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
  terserOptions: isProd ? {
    pure_funcs: ['console.log']
  } : {},
  // extraBabelPlugins: [
  //   [
  //     'import',
  //     {
  //       'libraryName': 'z-react-ui',
  //       'libraryDirectory': 'es',
  //       'style': true
  //     },
  //     "z-react-ui"
  //   ],
  // ],
  proxy: {
    '/api/proxy': {
      'target': 'http://127.0.0.1:7001/',
      'changeOrigin': true,
      'pathRewrite': {
        '^/api/proxy': ''
      },
    }
  },
  externals: {
    lodash: "_",
  },
  headScripts: [
    "https://cdn.bootcdn.net/ajax/libs/lodash.js/4.17.20/lodash.min.js",
  ].filter(Boolean),
  ignoreMomentLocale: true,
  analyze: {
    analyzerMode: 'server',
    analyzerPort: 8888,
    openAnalyzer: true,
    // generate stats file while ANALYZE_DUMP exist
    generateStatsFile: false,
    statsFilename: 'stats.json',
    logLevel: 'info',
    defaultSizes: 'parsed', // stat  // gzip
  },
  chainWebpack(memo) {
    //   memo.plugin('HardSourceWebpackPlugin').use(new HardSourceWebpackPlugin())
    //  插件
    memo.plugin('AntdDayjsWebpackPlugin').use(new AntdDayjsWebpackPlugin());
  },
});
