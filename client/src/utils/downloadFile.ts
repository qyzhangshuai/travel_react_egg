/**
 * @description: POST导出下载文件方法
 * @author: zs
 * @Date: 2021-02-11 08:33:20
 * @LastEditTime: 2021-02-11 08:50:16
 * @LastEditors: zs
 */
import axios from 'axios';
import { message } from 'antd';
import storage from './storage'
import { prefix } from '@/config';

const defaultHeaders = {
  'X-Requested-With': 'XMLHttpRequest',
  'Accept': 'application/json',
  'Content-Type': 'application/json; charset=utf-8',
}

export default function downloadFile(options, name = 'file.xlsx') {
  const token = storage.getItem(`${prefix}-token`);
  return axios({
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`,
      ...defaultHeaders
    },
    responseType: 'blob', //'arraybuffer'、'stream'
    ...options,
  })
    .then((res) => {
      const objectUrl = URL.createObjectURL(res.data);
      const a = document.createElement('a');
      document.body.appendChild(a);
      a.style.display = "none";
      a.href = objectUrl;
      a.download = name;
      a.click();
      document.body.removeChild(a);
      return Promise.resolve({
        success: true
      })
    })
    .catch((error) => {
      message.error(error.message);
      return Promise.resolve({
        success: false
      })
    });
}
