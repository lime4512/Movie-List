import { useEffect, useState } from 'react'
import '../../style/cardList.scss'
import { Card } from './Card'
import { Loader } from '../loader/Loader'

export const CardList = ({ URL, onTotalPage }) => {
	const [isLoading, setIsLoading] = useState(true)
	const [data, setData] = useState([])

	useEffect(() => {
		const MovieApi = async () => {
			fetch(`${URL}`, {
				headers: {
					'Content-Type': 'application/json',
					'X-API-KEY': process.env.NEXT_PUBLIC_API_KEY,
				},
			})
				.then(res => res.json())
				.then(data => {
					setData(data.items)
					onTotalPage(data.totalPages)
				})
				.catch(err => {
					console.log(err)
				})
		}
		MovieApi()
		setIsLoading(false)
	}, [URL, onTotalPage])
	console.log(data)
	return (
		<section className='cardList-container'>
			<div className='cardList-content'>
				{isLoading ? (
					<Loader />
				) : data == undefined ? (
					<></>
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
									year={item.year}
								/>
							</li>
						))}
					</ul>
				)}
			</div>
		</section>
	)
}
