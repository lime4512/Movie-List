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
		}
		MovieApi()
	}, [searchValue])

	return (
		<div>
			<h1>Фильмы</h1>
			<h1>{searchValue}</h1>
			<ul className='searchList-content'>
				{searchData.map(item => (
					<li key={Math.random()} className='searchList-item '>
						<Card
							title={item.nameRu}
							img={item.posterUrlPreview}
							ratingImdb={item.ratingImdb}
						/>
					</li>
				))}
			</ul>
		</div>
	)
}
