import { useEffect, useState } from 'react'
import { Card } from '../Card/Card'
import '@/style/mainList.scss'
export const MainList = ({ mainUrl }) => {
	const [url, setUrl] = useState('')
	const [data, setData] = useState([])
	useEffect(() => {
		setUrl(mainUrl)
		const MovieApi = async () => {
			fetch(url, {
				headers: {
					'Content-Type': 'application/json',
					'X-API-KEY': process.env.NEXT_PUBLIC_API_KEY,
				},
			})
				.then(res => res.json())
				.then(data => setData(data.items.slice(0, 5)))
				.catch(err => {
					console.log(err)
				})
		}
		MovieApi()
	}, [url, mainUrl])
	return (
		<div className='mainList-content'>
			<ul className='mainList-list'>
				{data.length == 0 ? (
					<li>Не найдено</li>
				) : (
					data.map(item => (
						<li key={Math.random()}>
							<Card
								titleRu={item.nameRu}
								titleEn={item.nameEu}
								img={item.posterUrlPreview}
								ratingImdb={item.ratingImdb}
								id={item.kinopoiskId}
								year={item.year}
							/>
						</li>
					))
				)}
			</ul>
		</div>
	)
}
