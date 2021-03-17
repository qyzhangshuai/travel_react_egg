/**
 * @description: 
 * @author: zs
 * @Date: 2021-02-09 09:36:02
 * @LastEditTime: 2021-03-17 10:43:53
 * @LastEditors: zs
 */
import React, { useState, useEffect, memo } from 'react';
import { Picker, List, Calendar, Button, Toast } from 'antd-mobile';
import dayjs from 'dayjs';
import { history } from 'umi';
import { isEqual } from 'lodash';
import styles from './index.less'
interface SearchProps {
  citys: any[]
  citysLoading: boolean
}

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const Search: React.FC<SearchProps> = ({
  citys,
  citysLoading,
}) => {
  const [selectedCity, setSelectedCity] = useState(['10001']);
  const [times, setTimes] = useState('可选时间');
  const [dateShow, setDateShow] = useState(false);

  const handleCityChange = (value) => setSelectedCity(value)

  const handleDate = () => setDateShow(!dateShow)

  const handleDateConfirm = (startTime, endTime) => {
    setDateShow(!dateShow);
    setTimes(dayjs(startTime).format('YYYY-MM-DD') + '~' + dayjs(endTime).format('YYYY-MM-DD'));
  };

  const handleClick = () => {
    if (times.includes('~')) {
      history.push({
        pathname: '/search',
        query: {
          code: selectedCity,
          startTime: times.split('~')[0],
          endTime: times.split('~')[1],
        }
      });
    } else {
      Toast.fail('请选择时间');
    }
  };

  return (
    <div className={styles.search}>
      {/**可选城市 */}
      <div className={styles.search_addr}>
        {!citysLoading ? (
          <Picker
            title='城市'
            data={citys}
            value={selectedCity}
            cascade={false}
            cols={1}
            onChange={handleCityChange}
          >
            <List.Item>可选城市</List.Item>
          </Picker>
        ) : null}
      </div>
      {/**可选时间 */}
      <div className={styles.search_time} onClick={handleDate}>
        <p className={styles.search_time_left}>出租时间</p>
        <p className={styles.search_time_right}>{times}</p>
      </div>
      {/**点击按钮 */}
      <Button type='warning' size='large' onClick={handleClick}>搜索民宿</Button>
      <Calendar
        visible={dateShow}
        onCancel={handleDate}
        onConfirm={handleDateConfirm}
        // minDate={dayjs().subtract(7, 'year').toDate()}
      />
    </div>
  )
}

export default memo(Search, isEqual)