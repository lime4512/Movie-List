import '@/style/trailers.scss'
import { useEffect, useState } from 'react'
import Link from 'next/link'
export const Trailers = ({ id }) => {
	const [video, setVideo] = useState([])

	useEffect(() => {
		const MovieTrailers = async () => {
			fetch(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}/videos`, {
				headers: {
					'Content-Type': 'application/json',
					'X-API-KEY': process.env.NEXT_PUBLIC_API_KEY,
				},
			})
				.then(res => res.json())
				.then(data => setVideo(data.items))
				.catch(err => console.log(err))
		}

		MovieTrailers()
	}, [id])

	return (
		<button className='btn-trailers'>
			{video[0] == undefined ? (
				<></>
			) : (
				<Link href={video[0].url}>Посмотреть трейлер</Link>
			)}
		</button>
	)
}
