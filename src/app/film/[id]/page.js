'use client'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
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
		<div>
			<h1>Фильм: {dataId.nameRu}</h1>
		</div>
	)
}
