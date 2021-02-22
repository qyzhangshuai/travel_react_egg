/**
 * @description: 
 * @author: zs
 * @Date: 2021-02-06 18:15:31
 * @LastEditTime: 2021-02-22 22:02:08
 * @LastEditors: zs
 */
import { useSelector } from 'umi'
import { shallowEqual } from 'react-redux'
import Header from './header'
import Hot from './hot'
import Search from './search'
import styles from './index.less';
import { RootState } from '@/types/store'

export default function Home() {
  const {
    cityArr,
    houseArr,
  } = useSelector(({ home }: RootState) => ({
    cityArr: home.cityArr,
    houseArr: home.houseArr
  }), shallowEqual)

  return (
    <div className={styles.home}>
      {/**header登录 */}
      <Header />
      {/**搜索 */}
      <Search citys={cityArr} citysLoading={false} />
      {/**热门民宿 */}
      <Hot houses={houseArr} />
    </div>
  );
}
