/**
 * @description: 
 * @author: zs
 * @Date: 2021-03-14 22:26:03
 * @LastEditTime: 2021-03-18 11:12:26
 * @LastEditors: zs
 */
import { useMemo } from 'react';
import { List, InputItem, Button, Toast } from 'antd-mobile';
import { createForm } from 'rc-form';
import { history, useDispatch } from 'umi';
import styles from './index.less'

interface LoginProps {
  form: any
}

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const Login: React.FC<LoginProps> = ({
  form,
}) => {
  const { getFieldProps, validateFields } = useMemo(() => form, [form])

  const dispatch = useDispatch()

  const handleSubmit = () => {
    validateFields((error, value) => {
      if (error) {
        Toast.fail('请将信息填写完整');
        return;
      } else {
        dispatch({
          type: 'app/login',
          payload: { ...value }
        })
      }
    });
  };

  const handleClick = () => {
    history.push('/register');
  };
  return (
    <div className={styles.login_page}>
      <List
        renderHeader={() => '用户登录'}
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
        >
          密码：
        </InputItem>
      </List>
      <Button type='warning' onClick={handleSubmit}>登录</Button>
      <div className={styles.register} onClick={handleClick}>没有账户，去注册</div>
    </div>
  )
}

export default createForm()(Login)
