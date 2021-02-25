/**
 * @description: 
 * @author: zs
 * @Date: 2021-02-25 13:53:14
 * @LastEditTime: 2021-02-25 18:24:48
 * @LastEditors: zs
 */
import { useState, useEffect, useRef } from 'react';
import { SearchBar, ActivityIndicator, ListView } from 'antd-mobile';
import { useHttpHook, useObserverHook, useImgHook, useValues } from '@/hooks';
import { useLocation } from 'umi';
import { ShowLoading } from '@/components';
import { CommonEnum } from '@/constants';

import styles from './index.less';
interface SearchProps {
}

// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const imgClassName = 'search-item-img'

const Search: React.FC<SearchProps> = ({
}) => {

	const divRef = useRef<ListView>()

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
	const [houseSubmitName, setHouseSubmitName] = useState('');

	const [houses, getHouseLists, loading] = useHttpHook('/api/proxy/house/search', {
		defaultQuery: true,
		data: {
			...paramsState,
			code: query?.code,
			startTime: query?.startTime + ' 00:00:00',
			endTime: query?.endTime + ' 23:59:59'
		}
	});
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

	useImgHook(`.${imgClassName}`, (enties) => { }, null);

	const handleChange = (value: string) => {
		setParamsState({ houseName: value });
	};

	const _handleSubmit = (value) => {
		setParamsState({ houseName: value, ...CommonEnum.PAGE });
		setHouseSubmitName(value);
	};

	const handleCancle = () => {
		_handleSubmit('');
	};

	const handleSubmit = (value) => {
		_handleSubmit(value);
	};

	const handleEndReached = () => {
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
				height: 8,
				borderTop: '1px solid #ECECED',
				borderBottom: '1px solid #ECECED',
			}}
		/>
	);

	const row = (rowData, _sectionID, rowID) => {
		return (
			<div className={styles.item} key={rowID}>
				<img alt='img' className={imgClassName} src={require('@/assets/blank.png')} data-src={rowData.img} />
				<div className={styles.item_right}>
					<div className={styles.title}>{rowData.title}</div>
					<div className={styles.price}>{rowData.price}</div>
				</div>
			</div>
		);
	};

	const getSectionData = (dataBlob, sectionID) => dataBlob[sectionID];
	const getRowData = (dataBlob, _sectionID, rowID) => dataBlob[rowID];

	const handleSource = () => {
		return new ListView.DataSource({
			getRowData,
			getSectionHeaderData: getSectionData,
			rowHasChanged: (row1, row2) => row1 !== row2,
			sectionHeaderHasChanged: (s1, s2) => s1 !== s2,
		});
	}

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
				<ListView
					ref={el => divRef.current = el}
					dataSource={houseState.dataSource}
					renderFooter={() => <ShowLoading showLoading={showLoading} />}
					renderRow={row}
					renderSeparator={separator}
					className="am-list"
					pageSize={4}
					useBodyScroll
					onScroll={() => { console.log('scroll'); }}
					scrollRenderAheadDistance={500}
					onEndReached={handleEndReached}
					onEndReachedThreshold={10}
				/>
			</div>

		</div>
	)
}

export default Search
