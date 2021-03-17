/**
 * @description: 
 * @author: zs
 * @Date: 2021-02-22 22:35:26
 * @LastEditTime: 2021-03-17 11:18:58
 * @LastEditors: zs
 */
import { mockPrefix } from '../src/config/apis'

export default {
  [`post ${mockPrefix}/house/search`]: (req, res) => {
    setTimeout(() => {
      let data;
      if (req.body?.pageNum < 4) {
        data = [
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
          },
          {
            id: 5,
            imgs: [{ url: 'http://img3.mukewang.com/szimg/5d1032ab08719e0906000338-360-202.jpg' }],
            name: '东城民宿',
            info: '东城区交通方便',
            price: '100'
          },
          {
            id: 6,
            imgs: [{ url: 'http://img2.mukewang.com/szimg/5dc9047a09bae31e12000676-360-202.png' }],
            name: '西城民宿',
            info: '西城区山水怡情',
            price: '120'
          },
          {
            id: 7,
            imgs: [{ url: 'http://img2.mukewang.com/szimg/5ad05dc00001eae705400300-360-202.jpg' }],
            name: '新区民宿',
            info: '新区民宿位置优越',
            price: '200'
          },
          {
            id: 8,
            imgs: [{ url: 'http://img1.mukewang.com/szimg/5a1f65a900015d1505400300-360-202.jpg' }],
            name: '老城民宿',
            info: '老城区风景秀美',
            price: '220'
          },
          {
            id: 9,
            imgs: [{ url: 'http://img1.mukewang.com/szimg/5a1f65a900015d1505400300-360-202.jpg' }],
            name: '老城民宿',
            info: '老城区风景秀美',
            price: '220'
          },
          {
            id: 10,
            imgs: [{ url: 'http://img1.mukewang.com/szimg/5a1f65a900015d1505400300-360-202.jpg' }],
            name: '老城民宿',
            info: '老城区风景秀美',
            price: '220'
          },
        ]
      } else {
        data = []
      }
      res.json({
        status: 200,
        data
      });
    }, 500);

  },
  [`get ${mockPrefix}/house/detail`]: (req, res) => {
    res.json({
      status: 200,
      data: {
        id: 8,
        imgs: [
          { url: 'http://img2.mukewang.com/szimg/5dc9047a09bae31e12000676-360-202.png' },
          { url: 'http://img2.mukewang.com/szimg/5ad05dc00001eae705400300-360-202.jpg' },
          { url: 'http://img1.mukewang.com/szimg/5a1f65a900015d1505400300-360-202.jpg' },
        ],
        name: '老城民宿',
        info: '老城区风景秀美',
        price: '220',
        publishTime: 1595238771000,
        startTime: 1595238771000,
        endTime: 1597917171000,
      }
    });
  },
  [`get ${mockPrefix}/house/comments/lists`]: (req, res) => {
    setTimeout(() => {
      let data;
      if (req.query?.pageNum < 4) {
        data = [
          {
            id: 1,
            user: {
              avatar: 'http://img2.mukewang.com/szimg/5dc9047a09bae31e12000676-360-202.png',
              username: 'user',
            },
            createTime: 1595238771000,
            msg: '房屋很满意'
          },
          {
            id: 2,
            user: {
              avatar: 'http://img1.mukewang.com/szimg/5a1f65a900015d1505400300-360-202.jpg',
              username: 'user',
            },
            createTime: 1595238771000,
            msg: '空气清新'
          },
          {
            id: 3,
            user: {
              avatar: 'http://img2.mukewang.com/szimg/5dc9047a09bae31e12000676-360-202.png',
              username: 'user',
            },
            createTime: 1595238771000,
            msg: '态度温和'
          },
          {
            id: 4,
            user: {
              avatar: 'http://img1.mukewang.com/szimg/5a1f65a900015d1505400300-360-202.jpg',
              username: 'user',
            },
            createTime: 1595238771000,
            msg: '早餐味道美'
          },
          {
            id: 5,
            user: {
              avatar: 'http://img2.mukewang.com/szimg/5dc9047a09bae31e12000676-360-202.png',
              username: 'user',
            },
            createTime: 1595238771000,
            msg: '态度温和'
          },
          {
            id: 6,
            user: {
              avatar: 'http://img1.mukewang.com/szimg/5a1f65a900015d1505400300-360-202.jpg',
              username: 'user',
            },
            createTime: 1595238771000,
            msg: '早餐味道美'
          },
          {
            id: 7,
            user: {
              avatar: 'http://img2.mukewang.com/szimg/5dc9047a09bae31e12000676-360-202.png',
              username: 'user',
            },
            createTime: 1595238771000,
            msg: '态度温和'
          },
          {
            id: 8,
            user: {
              avatar: 'http://img1.mukewang.com/szimg/5a1f65a900015d1505400300-360-202.jpg',
              username: 'user',
            },
            createTime: 1595238771000,
            msg: '早餐味道美'
          },
          {
            id: 9,
            user: {
              avatar: 'http://img2.mukewang.com/szimg/5dc9047a09bae31e12000676-360-202.png',
              username: 'user',
            },
            createTime: 1595238771000,
            msg: '态度温和'
          },
          {
            id: 10,
            user: {
              avatar: 'http://img1.mukewang.com/szimg/5a1f65a900015d1505400300-360-202.jpg',
              username: 'user',
            },
            createTime: 1595238771000,
            msg: '早餐味道美'
          },
        ]
      } else {
        data = [];
      }
      res.json({
        status: 200,
        data
      });
    }, 100);
  },
  [`get ${mockPrefix}/house/comments/add`]: (req, res) => {
    res.json({
      status: 200,
      data: 'ok'
    });
  }
};