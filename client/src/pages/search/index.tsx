/**
 * @description: 
 * @author: zs
 * @Date: 2021-02-25 13:53:14
 * @LastEditTime: 2021-03-17 20:13:04
 * @LastEditors: zs
 */
import { useState, useEffect, useRef } from 'react';
import { SearchBar, ListView } from 'antd-mobile';
import { useLocation } from 'umi';
import { useHttpHook, useImgHook, useValues } from '@/hooks';
import { ShowLoading } from '@/components';
import { CommonEnum } from '@/constants';
import { search } from '@/config/apis'
import styles from './index.less';
import Skeletons from './Skeletons'
import { useImgHook1 } from '@/hooks/useImgHook'

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const imgClassName = 'search-item-img'

const Search: React.FC<{}> = ({
}) => {

	const listRef = useRef<ListView>()

	// @ts-ignore
	const { query } = useLocation();
	const [houseState, setHouseState] = useValues({
		houseLists: [],
		dataSource: new ListView.DataSource({ rowHasChanged: (row1, row2) => row1 !== row2 }),
	})
	const [paramsState, setParamsState] = useValues({
		houseName: '',
		...CommonEnum.PAGE,
	})
	const [showLoading, setShowLoading] = useState(true); // 是不是取完了，默认没有

	const [houses, getHouseLists, loading] = useHttpHook(search.getSearch, {
		defaultQuery: true,
		method: 'POST',
		data: {
			...paramsState,
			code: query?.code,
			startTime: query?.startTime + ' 00:00:00',
			endTime: query?.endTime + ' 23:59:59'
		}
	});
	// 卸载组件时，清空状态
	useEffect(() => {
		return () => {
			setHouseState({
				houseLists: [],
				dataSource: new ListView.DataSource({ rowHasChanged: (row1, row2) => row1 !== row2 }),
			})
			setParamsState({
				houseName: '',
				...CommonEnum.PAGE,
			})
			setShowLoading(true)
		}
	}, [])

	// 这是放数据用的
	useEffect(() => {
		if (!houses || !Array.isArray(houses)) return
		const { houseLists, dataSource } = houseState
		const data = [...houseLists, ...houses]
		setHouseState({
			houseLists: data,
			dataSource: dataSource.cloneWithRows(data)
		})
		if (houses.length < CommonEnum.PAGE.pageSize) {
			// 数据取完了
			setShowLoading(false)
		} else {
			setShowLoading(true)
		}
	}, [houses])

	// const [throttleLazyload] = useImgHook(`.${imgClassName}`);
	useImgHook1(`.${imgClassName}`, null, null);

	const handleChange = (value: string) => {
		setParamsState({ houseName: value });
	};

	const _handleSubmit = async (value) => {
		listRef.current?.scrollTo(0, 0)
		const data = { houseName: value, pageNum: 1 }
		// 搜索前，先将本次数据清空
		setHouseState({
			houseLists: [],
			dataSource: new ListView.DataSource({ rowHasChanged: (row1, row2) => row1 !== row2 }),
		})
		setShowLoading(true)
		setParamsState(data);
		// 请求
		const { success } = await getHouseLists(data)
		if (!success) return
		// throttleLazyload()
	};

	const handleCancle = () => {
		setParamsState({ houseName: '' })
	};

	const handleSubmit = (value) => {
		_handleSubmit(value);
	};

	const handleEndReached = () => {
		// showLoading为false说明数据已经全部加载完毕，所以我们不需要再请求数据了
		if (!showLoading) return
		// 未加载
		if (!loading) {
			const pageNum = paramsState.pageNum + 1
			setParamsState({ pageNum })
			getHouseLists({ pageNum })
		}
	}

	const separator = (sectionID, rowID) => (
		<div
			key={`${sectionID}-${rowID}`}
			style={{
				backgroundColor: '#F5F5F9',
				height: 5,
			}}
		/>
	);

	const row = (rowData, _sectionID, rowID) => {
		return (
			<div className={styles.item} key={rowID}>
				<img alt='img' className={imgClassName} src={require('@/assets/blank.png')} data-src={rowData.imgs[0]?.url} />
				<div className={styles.item_right}>
					<div className={styles.title}>{rowData.name}</div>
					<div className={styles.price}>￥{rowData.price}</div>
				</div>
			</div>
		);
	};
	return (
		<div className={styles.search_page}>
			{/**顶部搜索栏 */}
			<SearchBar
				placeholder='搜索民宿'
				value={paramsState.houseName}
				onChange={handleChange}
				onCancel={handleCancle}
				onSubmit={handleSubmit}
			/>
			{/**搜索结果 */}
			<div className={styles.result}>
				{
					(!houseState.houseLists || !houseState.houseLists.length) && showLoading ? (
						// 首次渲染时的骨架屏组件
						<Skeletons />
					) : (
							<ListView
								ref={dom => listRef.current = dom}
								dataSource={houseState.dataSource}
								renderFooter={() => <ShowLoading showLoading={showLoading} />}
								renderRow={row}
								renderSeparator={separator}
								className="am-list"
								pageSize={4}
								useBodyScroll
								scrollRenderAheadDistance={500}
								onEndReached={handleEndReached}
								onEndReachedThreshold={10}
							/>
						)
				}

			</div>

		</div>
	)
}

export default Search
