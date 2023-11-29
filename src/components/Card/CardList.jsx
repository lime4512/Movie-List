import { useEffect, useState } from 'react'
import '../../style/cardList.scss'
import { Card } from './Card'
import { Loader } from '../loader/Loader'

export const CardList = ({ page }) => {
	const [isLoading, setIsLoading] = useState(true)
	const [data, setData] = useState([])

	useEffect(() => {
		const MovieApi = async () => {
			fetch(
				`https://kinopoiskapiunofficial.tech/api/v2.2/films/collections?type=TOP_250_MOVIES&page=${page}`,
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
		setIsLoading(false)
	}, [page])
	return (
		<section className='cardList-container'>
			<h1>Фильмы:</h1>
			<span>Страница Номер:{page}</span>
			<div className='cardList-content'>
				{isLoading ? (
					<Loader />
				) : (
					<ul className='cardList'>
						{data.map(item => (
							<li key={Math.random()} className='cardList-item'>
								<Card
									titleRu={item.nameRu}
									titleEn={item.nameEu}
									img={item.posterUrlPreview}
									ratingImdb={item.ratingImdb}
								/>
							</li>
						))}
					</ul>
				)}
			</div>
		</section>
	)
}
