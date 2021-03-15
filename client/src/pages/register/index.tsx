/**
 * @description: 
 * @author: zs
 * @Date: 2021-03-14 22:26:42
 * @LastEditTime: 2021-03-15 10:28:53
 * @LastEditors: zs
 */
import { useMemo } from 'react';
import { List, InputItem, Button, Toast } from 'antd-mobile';
import { createForm } from 'rc-form';
import { history, useDispatch } from 'umi';
import styles from './index.less'

interface RegisterProps {
  form: any
}


// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const Register: React.FC<RegisterProps> = ({
  form,
}) => {
  const { getFieldProps, validateFields } = useMemo(() => form, [form])

  const handleSubmit = () => {
    validateFields((error, value) => {
      if (error) {
        Toast.fail('请将信息填写完整');
        return;
      } else {
        if (value.password !== value.password2) {
          Toast.fail('密码和确认密码必须一致');
          return;
        }
        // registerAsync(value);
      }
    });
  };

  const handleClick = () => {
    history.push('/traval/login');
  };

  return (
    <div className={styles.register_page}>
      <List
        renderHeader={() => '用户注册'}
      >
        <InputItem
          {...getFieldProps('username', {
            rules: [{ required: true }]
          })}
          placeholder='用户名'
        >
          用户名：
        </InputItem>
        <InputItem
          {...getFieldProps('password', {
            rules: [{ required: true }]
          })}
          placeholder='密码'
          type="password"
        >
          密码：
        </InputItem>
        <InputItem
          {...getFieldProps('password2', {
            rules: [{ required: true }]
          })}
          placeholder='确认密码'
          type="password"
        >
          确认密码：
        </InputItem>
      </List>
      <Button type='warning' onClick={handleSubmit}>注册</Button>
      <div className={styles.login} onClick={handleClick}>已有账户，去登录</div>
    </div>
  )
}

export default createForm()(Register)
