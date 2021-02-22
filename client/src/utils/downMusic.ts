/**
 * @description: 
 * @author: zs
 * @Date: 2021-02-11 08:40:24
 * @LastEditTime: 2021-02-22 21:42:03
 * @LastEditors: zs
 */
import axios, { AxiosRequestConfig } from 'axios';
import storage from './storage'
import { prefix } from '@/config';

const defaultHeaders = {
  'X-Requested-With': 'XMLHttpRequest',
  'Accept': 'application/json',
  'Content-Type': 'application/json; charset=UTF-8',
}
export default (options: AxiosRequestConfig, name = "音乐") => {
  return new Promise<void>((resolve, reject) => {
    const token = storage.getItem(`${prefix}-token`);
    axios({
      method: 'POST',
      // 必须显式指明响应类型是一个Blob对象，这样生成二进制的数据，才能通过window.URL.createObjectURL进行创建成功
      responseType: 'blob',
      headers: {
        'Authorization': `Bearer ${token}`,
        ...defaultHeaders,
        "Access-Control-Allow-Origin": "*"
      },
      ...options,
    }).then((res) => {
      if (!res) {
        return
      }
      // 将lob对象转换为域名结合式的url
      const blobUrl = window.URL.createObjectURL(res.data)
      const link = document.createElement('a')
      document.body.appendChild(link)
      link.style.display = 'none'
      link.href = blobUrl
      // 设置a标签的下载属性，设置文件名及格式，后缀名最好让后端在数据格式中返回
      link.download = name
      // 自触发click事件
      link.click()
      document.body.removeChild(link)
      window.URL.revokeObjectURL(blobUrl);
      resolve()
    })
  })

}