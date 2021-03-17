/**
 * @description: 
 * @author: zs
 * @Date: 2021-02-09 16:01:12
 * @LastEditTime: 2021-03-17 11:04:03
 * @LastEditors: zs
 */
import { mockPrefix } from '../src/config/apis'

export default {
  [`get ${mockPrefix}/commons/citys`]: (req, res) => {
    res.json({
      status: 200,
      data: [[{ label: '杭州', value: '10001' }, { label: '苏州', value: '10002' }]]
    });
  },

  [`get ${mockPrefix}/house/hot`]: (req, res) => {
    res.json({
      status: 200,
      data: [
        {
          id: 1,
          imgs: [{ url: 'http://img3.mukewang.com/szimg/5d1032ab08719e0906000338-360-202.jpg' }],
          name: '东城民宿',
          info: '东城区交通方便',
          price: '100'
        },
        {
          id: 2,
          imgs: [{ url: 'http://img2.mukewang.com/szimg/5dc9047a09bae31e12000676-360-202.png' }],
          name: '西城民宿',
          info: '西城区山水怡情',
          price: '120'
        },
        {
          id: 3,
          imgs: [{ url: 'http://img2.mukewang.com/szimg/5ad05dc00001eae705400300-360-202.jpg' }],
          name: '新区民宿',
          info: '新区民宿位置优越',
          price: '200'
        },
        {
          id: 4,
          imgs: [{ url: 'http://img1.mukewang.com/szimg/5a1f65a900015d1505400300-360-202.jpg' }],
          name: '老城民宿',
          info: '老城区风景秀美',
          price: '220'
        }
      ]
    });
  }
};