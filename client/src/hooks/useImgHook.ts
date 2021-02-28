/**
 * @description: 图片懒加载
 * @author: zs
 * @Date: 2021-02-25 10:25:31
 * @LastEditTime: 2021-02-26 16:39:03
 * @LastEditors: zs
 */
import { DependencyList, useCallback, useEffect, useMemo } from 'react';
import { isEmpty } from 'project-libs';
import { throttle } from 'lodash'
import { useForceUpdate } from '@/hooks'
import useExeOnlyOne from './common/useExeOnlyOne';

const imgLoadAttribute = 'data-src' // 这个属性表示图片的懒加载属性
/**
 * 图片懒加载方式一
 * @param ele 懒加载元素
 * @param parentElement 懒加载的父级元素，作用：滚动事件触发，默认是document
 */
export default function useImgHook(ele: string, parentElement?: string) {
  const viewHeight = document.documentElement.clientHeight//获取可视区高度
  const lazyload = useCallback(() => {
    const nodes = document.querySelectorAll<HTMLImageElement>(`img[${imgLoadAttribute}]${ele}`)
    Array.from(nodes).forEach((item) => {
      let rect: DOMRect
      if (!item.getAttribute(imgLoadAttribute)) return
      rect = item.getBoundingClientRect()// 用于获得页面中某个元素的左，上，右和下分别相对浏览器视窗的位置
      if (rect.bottom >= 0 && rect.top < viewHeight) {
        ; (function () {
          const img = new Image()
          img.src = item.getAttribute(imgLoadAttribute)
          img.onload = function () {
            item.src = img.src
          }
          item.removeAttribute(imgLoadAttribute)//移除属性，下次不再遍历
        })()
      }
    })
  }, [ele])

  const throttleLazyload = useMemo(() => throttle(lazyload, 200), [lazyload])
  const forceUpdate = useForceUpdate()
  // 主要处理，先loading效果，后来img图片才替换loading出来，首次没有scroll事件，所以图片第一次没有加载出来
  useExeOnlyOne((isFirst) => {
    if (isFirst.current) {
      const eles = document.querySelectorAll<HTMLImageElement>(`img[${imgLoadAttribute}]${ele}`)
      if (eles && eles.length) {
        throttleLazyload()
        // 手动更新组件一次
        forceUpdate()
        isFirst.current = false
      }
    }
  }, null)

  useEffect(() => {
    throttleLazyload()
    let parentEle
    if (parentElement) {
      parentEle = document.querySelectorAll(parentElement)
    }

    if (parentEle && parentEle.length > 1) {
      console.error('父节点存在多个，需要唯一，请重新设置')
      return
    }

    let listenerDom: any = document
    if (parentEle && parentEle.length) listenerDom = parentEle[0]
    listenerDom.addEventListener("scroll", throttleLazyload)
    return () => {
      listenerDom.removeEventListener("scroll", throttleLazyload)
    }
  }, [throttleLazyload, parentElement])

  return [throttleLazyload]
}

/**
 * 图片懒加载方式二
 * 1，监听图片是否进入可视区域；
 * 2，将src属性的值替换为真实的图片地址，data-src
 * 3，停止监听当前的节点
 * @param {*} ele 类名 id名都可
 * @param {*} callback 回调函数
 * @param {*} watch 依赖项
 */
type Callback = (entries?: any) => void
let observer: IntersectionObserver;
const defaultCallback = () => null
// 这种写法的弊端：如果长列表，使用dom会变化，拿到的nodes不准确
export function useImgHook1(ele: string = '', callback: Callback = defaultCallback, watch = []) {
  useEffect(() => {
    const nodes = document.querySelectorAll(`img[data-src]${ele}`);
    console.log('node', nodes, watch)
    if (!isEmpty(nodes)) {
      observer = new IntersectionObserver((entries) => {
        callback && callback(entries);
        entries.forEach(item => {
          if (item.isIntersecting) {
            const dataSrc = item.target.getAttribute(imgLoadAttribute);
            item.target.setAttribute('src', dataSrc);
            item.target.removeAttribute(imgLoadAttribute)
            observer.unobserve(item.target);
          }
        });
      });
      nodes.forEach(item => {
        observer.observe(item);
      });
    }

    return () => {
      if (!isEmpty(nodes) && observer) {
        observer.disconnect();
      }
    }
  }, watch)


}