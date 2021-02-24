/**
 * @description: 404页面
 * @author: zs
 * @Date: 2021-02-24 16:05:18
 * @LastEditTime: 2021-02-24 16:13:04
 * @LastEditors: zs
 */
import { Button, Result } from 'antd';
import React from 'react';
import { history } from 'umi';

const NoFoundPage: React.FC<{}> = () => (
  <Result
    status="404"
    subTitle="不好意思，您访问的页面不存在."
    extra={
      <Button type="primary" onClick={() => history.push('/')}>
        返回首页
      </Button>
    }
  />
);

export default NoFoundPage;