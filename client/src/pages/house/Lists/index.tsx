/**
 * @description: 
 * @author: zs
 * @Date: 2021-02-22 22:23:11
 * @LastEditTime: 2021-03-14 10:35:12
 * @LastEditors: zs
 */
import { memo } from 'react';
import { ShowLoading } from '@/components';
import { timer } from '@/utils';
import styles from '../index.less'
interface FooterProps {
  lists: any[]
  showLoading?: boolean
}

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const Footer: React.FC<FooterProps> = ({
  lists,
  showLoading,
}) => {

  return (
    <div className={styles.comment}>
      <h1 className={styles.comment_title}>评论</h1>
      <div className={styles.comment_lists}>
        {
          lists?.map(item => (
            <div className={styles.comment_lists_item} key={item?.id}>
              <img alt='user' className='avatar' src={item?.user?.avatar} />
              <div className={styles.right}>
                <div className={styles.right_top}>
                  <p>{item?.user?.username}</p>
                  <p>{timer(item?.createTime)}</p>
                </div>
                <div className={styles.right_bottom}>
                  {item?.msg}
                </div>
              </div>
            </div>
          ))
        }
        <ShowLoading showLoading={showLoading} />
      </div>
    </div>
  )
}

export default memo(Footer)
