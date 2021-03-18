/**
 * @description: 设置编辑
 * @author: zs
 * @Date: 2021-03-14 20:04:09
 * @LastEditTime: 2021-03-18 16:07:00
 * @LastEditors: zs
 */
import { useState, useEffect, useMemo } from 'react';
import { useSelector } from 'umi'
import { List, ImagePicker, Toast, InputItem, Button } from 'antd-mobile';
import { createForm } from 'rc-form';
import { RootState } from '@/types/store';
import { shallowEqual } from 'react-redux'
import { useBindCreator } from '@/hooks'

interface EditProps {
  form: any
}

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const namespace = 'app'

const Edit: React.FC<EditProps> = ({ form }) => {
  const { getFieldProps, validateFields } = useMemo(() => form, [form]);
  const { avatar, phone, sign } = useSelector(({ user }: RootState) => user, shallowEqual)
  const { getUserAsync, editUserAsync } = useBindCreator({
    getUserAsync: (payload) => ({ type: `${namespace}/getUserInfo`, payload }),
    editUserAsync: (payload) => ({ type: `${namespace}/updateLoginInfo`, payload }),
  })
  const [files, setFiles] = useState([{ url: avatar }]);

  const handleChange = (files) => {
    if (files[0]?.file?.size / 1024 / 1024 > 0.5) {
      Toast.fail('图片大小不能大于0.5M');
      return;
    }
    setFiles(files);
  };

  const handleSubmit = () => {
    if (!files.length) {
      Toast.fail('请上传图片');
      return;
    }
    validateFields((error, value) => {
      if (error) {
        Toast.fail('请将信息补充完整');
        return;
      } else {
        editUserAsync({
          avatar: files[0].url,
          phone: value.tel,
          sign: value.sign
        });
      }
    });
  };

  useEffect(() => {
    getUserAsync({});
  }, [])

  return (
    <>
      <List>
        <ImagePicker
          files={files}
          selectable={files.length < 1}
          onChange={handleChange}
        />
        <InputItem
          {...getFieldProps('tel', {
            rules: [{ required: true }],
            initialValue: phone
          })}
          placeholder='电话'
        >
          电话：
        </InputItem>
        <InputItem
          {...getFieldProps('sign', {
            rules: [{ required: true }],
            initialValue: sign
          })}
          placeholder='签名'
        >
          签名：
        </InputItem>
      </List>
      <Button type='warning' style={{ marginTop: '20px' }} onClick={handleSubmit}>修改</Button>
    </>
  )
}

export default createForm()(Edit)
