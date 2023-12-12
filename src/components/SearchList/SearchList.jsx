import { Card } from '../Card/Card'
import '../../style/searchList.scss'
import { useEffect, useState } from 'react'

export const SearchList = ({ searchValue }) => {
	const [searchData, setSearchData] = useState([])
	useEffect(() => {
		const MovieApi = async () => {
			fetch(
				`https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=${searchValue}&page=1`,
				{
					headers: {
						'Content-Type': 'application/json',
						'X-API-KEY': process.env.NEXT_PUBLIC_API_KEY,
					},
				}
			)
				.then(res => res.json())
				.then(data => setSearchData(data.films))
				.catch(err => {
					setSearchData([])
					console.log(err)
				})
		}
		MovieApi()
	}, [searchValue])
	return (
		<div>
			{searchData.length == 0 ? (
				<div className='searchList-err'>
					<h1 className='searchList-err-title'>По запросу ничего не найдено</h1>
					<p className='searchList-err-subtitle'>
						Уточни слово поиска или посмотри наши рекомендации
					</p>
				</div>
			) : (
				<ul className='searchList-content'>
					{searchData &&
						searchData.map(item => (
							<li key={Math.random()} className='searchList-item '>
								<Card
									titleRu={item.nameRu}
									titleEn={item.nameEn}
									img={item.posterUrlPreview}
									ratingImdb={item.rating}
									id={item.filmId}
								/>
							</li>
						))}
				</ul>
			)}
		</div>
	)
}
