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
						'X-API-KEY': '091dfcfb-8135-4b66-bfa2-776a4810e94d',
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
	console.log(searchData)
	return (
		<div>
			<h1>Фильмы</h1>
			{searchData.length == 0 ? (
				<h1>Фильм не найден!!!!</h1>
			) : (
				<ul className='searchList-content'>
					{searchData.map(item => (
						<li key={Math.random()} className='searchList-item '>
							<Card
								titleRu={item.nameRu}
								titleEn={item.nameEn}
								img={item.posterUrlPreview}
								ratingImdb={item.rating}
							/>
						</li>
					))}
				</ul>
			)}
		</div>
	)
}
