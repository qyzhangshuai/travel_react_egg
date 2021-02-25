/**
 * @description: 图片懒加载
 * @author: zs
 * @Date: 2021-02-25 10:25:31
 * @LastEditTime: 2021-02-25 18:16:59
 * @LastEditors: zs
 */
import { useEffect } from 'react';
import { isEmpty } from 'project-libs';

/**
 * 1，监听图片是否进入可视区域；
 * 2，将src属性的值替换为真实的图片地址，data-src
 * 3，停止监听当前的节点
 * @param {*} ele 
 * @param {*} callback 
 * @param {*} watch 
 */
type Callback = (entries?: any) => void
let observer;
const defaultCallback = () => null
export default function useImgHook(ele: string, callback: Callback = defaultCallback, watch = []) {
  useEffect(() => {
    const nodes = document.querySelectorAll(ele);
    if (!isEmpty(nodes)) {
      observer = new IntersectionObserver((entries) => {
        callback && callback(entries);
        entries.forEach(item => {
          if (item.isIntersecting) {
            const dataSrc = item.target.getAttribute('data-src');
            item.target.setAttribute('src', dataSrc);
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