/**
 * @description: 
 * @author: zs
 * @Date: 2021-02-06 18:15:31
 * @LastEditTime: 2021-02-08 17:01:12
 * @LastEditors: zs
 */
declare module '*.css';
declare module '*.less';
declare module '*.png';
declare module '*.svg' {
  export function ReactComponent(props: React.SVGProps<SVGSVGElement>): React.ReactElement
  const url: string
  export default url
}

declare module 'postcss-plugin-px2rem';
declare module 'hard-source-webpack-plugin';
declare module 'dva-model-extend';