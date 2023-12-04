'use client'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { FilmDetails } from '@/components/FilmsDetails/FilmDetails'
import { Container } from '@/components/container/Container'
import { Similar } from '@/components/Similars/Similars'
export default function Film() {
	const { id } = useParams()

	const [dataId, setDataId] = useState([])
	const [simData, setSimData] = useState([])
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

		const MovieSimulators = async () => {
			fetch(
				`https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}/similars`,
				{
					headers: {
						'Content-Type': 'application/json',
						'X-API-KEY': '091dfcfb-8135-4b66-bfa2-776a4810e94d',
					},
				}
			)
				.then(res => res.json())
				.then(data => setSimData(data.items.slice(0, 5)))
				.catch(err => console.log(err))
		}

		MovieSimulators()
	}, [id])
	return (
		<Container>
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
			<Similar sim={simData} />
		</Container>
	)
}
