import { useEffect, useState } from 'react'
import '../../style/filmDetails.scss'
import Image from 'next/image'
export const FilmDetails = ({
	img,
	nameO,
	nameRu,
	year,
	countries,
	AgeLimits,
	slogan,
	genres,
	description,
}) => {
	const [genre, setGenre] = useState([])
	useEffect(() => {
		setGenre(genres)
	}, [genres])
	console.log(genre)
	return (
		<div className='filmDetails-container'>
			<div className='film-content'>
				<div className='film-img'>
					{img && (
						<Image
							loader={() => `${img}`}
							src={img}
							alt='Img'
							fill={true}
							unoptimized={true}
							className='imgTotal-card'
						/>
					)}
				</div>
				<div className='film-text'>
					<h1 className='film-title-ru'>{nameRu}</h1>
					<p className='film-title-original'>{nameO}</p>
					<h2>Описание</h2>
					<p>Год производства: {year}</p>

					<ul className='film-genres'>
						<li>Жанры:</li>
						{genre == undefined ? (
							<p>Нет</p>
						) : (
							genre.map(item => <li key={Math.random()}>{item.genre}</li>)
						)}
					</ul>

					<p>Страна: </p>
					<p>Возрастное ограничение: {AgeLimits}</p>
					<p>Слоган:{slogan}</p>
				</div>
			</div>
			<div className='film-description'>
				<h3>Сюжет</h3>
				<p>{description}</p>
			</div>
		</div>
	)
}
