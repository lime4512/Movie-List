'use client'
import { Selects } from '@/components/Selects/Selects'
import { Container } from '@/components/container/Container'
import { useState, useEffect } from 'react'
import { Card } from '@/components/Card/Card'
import '@/style/release.scss'
export default function Release() {
	const [year, setYears] = useState('2023')
	const [month, setMonths] = useState('JANUARY')

	const handleYear = year => {
		setYears(year)
	}

	const handleMonth = month => {
		setMonths(month)
	}
	const [data, setData] = useState()
	useEffect(() => {
		const releaseMovie = async () => {
			fetch(
				`https://kinopoiskapiunofficial.tech/api/v2.1/films/releases?year=${year}&month=${month}&page=1`,
				{
					headers: {
						'Content-Type': 'application/json',
						'X-API-KEY': process.env.NEXT_PUBLIC_API_KEY,
					},
				}
			)
				.then(res => res.json())
				.then(data => {
					setData(data.releases)
				})
				.catch(err => {
					console.log(err)
				})
		}
		releaseMovie()
	}, [year, month])
	return (
		<Container>
			<h1>Релизы</h1>
			<Selects setYear={handleYear} setMonth={handleMonth} />
			<div className='release-content'>
				{data == undefined ? (
					<h1>Релизов нет</h1>
				) : data.length == 0 ? (
					<h1>Релизов не найдено</h1>
				) : (
					<ul className='cardList'>
						{data.map(item => (
							<li key={Math.random()} className='cardList-item'>
								<Card
									titleRu={item.nameRu}
									titleEn={item.nameEu}
									img={item.posterUrlPreview}
									ratingImdb={item.rating}
									id={item.filmId}
								/>
							</li>
						))}
					</ul>
				)}
			</div>
		</Container>
	)
}
