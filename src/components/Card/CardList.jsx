import { useEffect, useState } from 'react'
import '../../style/cardList.scss'
import { Card } from './Card'

export const CardList = () => {
	const [data, setData] = useState([])

	useEffect(() => {
		const MovieApi = async () => {
			fetch(
				'https://kinopoiskapiunofficial.tech/api/v2.2/films/collections?type=TOP_POPULAR_MOVIES&page=1',
				{
					headers: {
						'Content-Type': 'application/json',
						'X-API-KEY': '091dfcfb-8135-4b66-bfa2-776a4810e94d',
					},
				}
			)
				.then(res => res.json())
				.then(data => setData(data.items))
		}
		MovieApi()
	}, [])
	console.log(data)
	return (
		<section>
			<h1>Фильмы:</h1>
			<div className='cardList-container'>
				<ul>
					{data.map(item => (
						<li key={Math.random()}>
							<Card
								title={item.nameRu}
								img={item.posterUrlPreview}
								ratingImdb={item.ratingImdb}
							/>
						</li>
					))}
				</ul>
			</div>
		</section>
	)
}
