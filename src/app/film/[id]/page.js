'use client'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import '../film.scss'
import { FilmDetails } from '@/components/FilmsDetails/FilmDetails'
export default function Film() {
	const { id } = useParams()

	const [dataId, setDataId] = useState([])

	useEffect(() => {
		const MovieApi = async () => {
			fetch(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}`, {
				headers: {
					'Content-Type': 'application/json',
					'X-API-KEY': '091dfcfb-8135-4b66-bfa2-776a4810e94d',
				},
			})
				.then(res => res.json())
				.then(data => setDataId(data))
				.catch(err => console.log(err))
		}
		MovieApi()
	}, [id])
	return (
		<div className='film-container'>
			<FilmDetails
				countries={dataId.countries}
				genres={dataId.genres}
				description={dataId.description}
				nameO={dataId.nameOriginal}
				nameRu={dataId.nameRu}
				img={dataId.posterUrl}
				AgeLimits={dataId.ratingAgeLimits}
				ratingI={dataId.ratingImdb}
				ratingK={dataId.ratingKinopoisk}
				slogan={dataId.slogan}
				year={dataId.year}
			/>
		</div>
	)
}
