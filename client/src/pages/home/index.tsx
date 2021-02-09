/**
 * @description: 
 * @author: zs
 * @Date: 2021-02-06 18:15:31
 * @LastEditTime: 2021-02-09 14:10:38
 * @LastEditors: zs
 */
import { useSelector, useDispatch } from 'umi'
import { connect, shallowEqual } from 'react-redux'
import Header from './header'
import Hot from './hot'
import Search from './search'
import styles from './index.less';
import { RootState } from '@/types/store'
import { isEqual } from 'lodash';

export default function Home() {
  // const home = useSelector((state: RootState) => state.app, shallowEqual)
  const home = useSelector((state: RootState) => state.app, isEqual)
  const dispatch = useDispatch()

  return (
    <div className={styles.home}>
      {/**header登录 */}
      <Header />
      {/**搜索 */}
      <Search citys={[]} citysLoading={false} />
      {/**热门民宿 */}
      <Hot houses={[]} />
    </div>
  );
}
