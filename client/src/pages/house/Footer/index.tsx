/**
 * @description: 
 * @author: zs
 * @Date: 2021-02-22 22:23:11
 * @LastEditTime: 2021-03-02 15:01:29
 * @LastEditors: zs
 */
import React, { useState, useEffect } from 'react';
import { TextareaItem, Button, Toast, Modal } from 'antd-mobile';
import { useLocation, useSelector, useDispatch } from 'umi';
import { RootState } from '@/types/store';
import { useBindCreator } from '@/hooks'

interface FooterProps {
}

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const namespace = 'house'

const Footer: React.FC<FooterProps> = ({
}) => {
  const [show, setShow] = useState(false);
  const [commentsValue, setCommentsValue] = useState();
  // @ts-ignore
  const { query } = useLocation();

  const dispatch = useBindCreator({
    addCommentsAsync: (payload) => ({ type: `${namespace}/addCommentsAsync`, payload })
  })

  const handleClick = () => {
    setShow(true)
  };

  const handleChange = (value) => {
    // console.log(value)
    setCommentsValue(value);
  };

  const handleClose = () => {
    setShow(false)
  };

  const handleSubmit = () => {
    if (commentsValue) {
      handleClose();
      addCommentsAsync({
        comment: commentsValue,
        houseId: query?.id
      });
    } else {
      Toast.fail('请添加信息');
    }
  };

  useEffect(() => {

  }, [])
  return (
    <>
      <div className='footer' onClick={handleClick}>
        评论~
    </div>
      <Modal
        show={show}
        styleBody={{
          height: '220px',
          bottom: '0px',
          top: 'unset'
        }}
        onClose={handleClose}
      >
        <div className='modal-comment'>
          <TextareaItem
            rows={2}
            count={200}
            onChange={handleChange}
          />
          <Button className='comment-btn' type='warning' onClick={handleSubmit}>评论</Button>
        </div>
      </Modal>
    </>
  )
}

export default Footer
