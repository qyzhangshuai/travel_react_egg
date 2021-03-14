/**
 * @description: 
 * @author: zs
 * @Date: 2021-02-22 22:23:11
 * @LastEditTime: 2021-03-14 11:34:35
 * @LastEditors: zs
 */
import React, { useState, useEffect } from 'react';
import { TextareaItem, Button, Toast, Modal } from 'antd-mobile';
import { useLocation, useSelector, useDispatch } from 'umi';
import { useBindCreator } from '@/hooks'
import styles from '../index.less'

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

  const handleClick = () => setShow(true)

  const handleChange = (value) => setCommentsValue(value)

  const handleClose = () => setShow(false)

  const handleSubmit = () => {
    if (commentsValue) {
      handleClose();
      dispatch.addCommentsAsync({
        comment: commentsValue,
        houseId: query?.id
      });
    } else {
      Toast.fail('请添加信息');
    }
  };

  return (
    <>
      <div className={styles.footer} onClick={handleClick}>  评论~  </div>
      <Modal
        popup
        visible={show}
        onClose={handleClose}
        animationType="slide-up"
      >
        <div className={styles.modal_comment}>
          <TextareaItem
            rows={2}
            count={200}
            onChange={handleChange}
          />
          <Button className={styles.comment_btn} type='warning' onClick={handleSubmit}>评论</Button>
        </div>
      </Modal>
    </>
  )
}

export default Footer
