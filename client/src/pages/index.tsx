/**
 * @description: 
 * @author: zs
 * @Date: 2021-02-06 18:15:31
 * @LastEditTime: 2021-02-08 14:23:50
 * @LastEditors: zs
 */
import styles from './index.less';
import { useSelector } from 'umi'

export default function IndexPage() {

  const state = useSelector(state => state)

  console.log('state', state)

  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
    </div>
  );
}
