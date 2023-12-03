import { useEffect, useState } from 'react'
import '../../style/cardList.scss'
import { Card } from './Card'
import { Loader } from '../loader/Loader'

export const CardList = ({ URL }) => {
	const [isLoading, setIsLoading] = useState(true)
	const [data, setData] = useState([])

	useEffect(() => {
		const MovieApi = async () => {
			fetch(`${URL}`, {
				headers: {
					'Content-Type': 'application/json',
					'X-API-KEY': '091dfcfb-8135-4b66-bfa2-776a4810e94d',
				},
			})
				.then(res => res.json())
				.then(data => setData(data.items))
				.catch(err => {
					console.log(err)
				})
		}
		MovieApi()
		setIsLoading(false)
	}, [URL])
	return (
		<section className='cardList-container'>
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
									id={item.kinopoiskId}
								/>
							</li>
						))}
					</ul>
				)}
			</div>
		</section>
	)
}
