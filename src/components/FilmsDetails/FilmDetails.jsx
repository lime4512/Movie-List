import { useEffect, useState } from 'react'
import '../../style/filmDetails.scss'
import Image from 'next/image'
import { ModalSources } from '../modalSources/ModalSources'
import { Trailers } from '../trailers/Trailers'
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
	ratingI,
	ratingK,
	id,
}) => {
	const [genre, setGenre] = useState([])
	const [country, serCountry] = useState([])
	useEffect(() => {
		setGenre(genres)
		serCountry(countries)
	}, [genres, countries])

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
							className='imgTotal-film'
						/>
					)}
				</div>

				<div className='film-text'>
					<h1 className='film-title-ru'>
						{nameRu == undefined ? nameO : nameRu}
					</h1>
					<p className='film-title-original'>
						{nameRu == undefined ? <></> : nameO}
					</p>
					<h2 className='film-opisanie'>Описание</h2>
					<p className='film-year'>
						<span className='gray'>Год производства:</span> {year}
					</p>

					<ul className='film-genres'>
						<li className='gray'>Жанры:</li>
						{genre == undefined ? (
							<p>-</p>
						) : (
							genre.map(item => <li key={Math.random()}>{item.genre}</li>)
						)}
					</ul>

					<ul className='film-countries'>
						<li className='gray'>Страны:</li>
						{country == undefined ? (
							<p>-</p>
						) : (
							country.map(item => <li key={Math.random()}>{item.country}</li>)
						)}
					</ul>
					<div className='film-ageLimits'>
						<p className='film-ageLimits-title gray'>
							Возрастное ограничение:{' '}
						</p>
						{AgeLimits == undefined ? (
							<span>-</span>
						) : (
							AgeLimits.replace('age', '') + '+'
						)}
					</div>
					<div className='film-slogan'>
						<p className='film-slogan-title gray'>Слоган:</p>
						{slogan == undefined ? <span>-</span> : slogan.substring(0, 210)}
					</div>

					<h1 className='film-rating-title'>Рейтинг</h1>
					<div className='modal-rating'>
						<div className='film-rating'>
							<div className='rating-imdb'>
								<span className='gray'>Imb: </span>
								{ratingI == undefined ? <span>-</span> : ratingI}
							</div>
							<div className='rating-kinopoisk'>
								<span className='gray'>Kinopoisk: </span>
								{ratingK == undefined ? <span>-</span> : ratingK}
							</div>
						</div>
						<ModalSources id={id} />
					</div>
				</div>
			</div>
			<div className='film-description'>
				<h3 className='film-plot'>Сюжет</h3>
				<p className='film-plot-text'>
					{description == undefined ? <span>-</span> : description}
				</p>
			</div>
			<div className='btn-filmDetails'>
				<Trailers id={id} />
				<button className='btn-favorites'>Добавить в избраное</button>
			</div>
		</div>
	)
}
