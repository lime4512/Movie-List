'use client'
import Link from 'next/link'
import { MainList } from '@/components/MainList/MainList'
import './globals.scss'
import { Container } from '@/components/container/Container'

export default function Home() {
	return (
		<Container>
			<Link href='/movie'>
				<h1 className='main-title'>Топ фильмов</h1>
			</Link>
			<MainList
				mainUrl={
					'https://kinopoiskapiunofficial.tech/api/v2.2/films?order=NUM_VOTE&type=FILM&ratingFrom=0&ratingTo=10&yearFrom=1000&yearTo=3000&page=1'
				}
			/>
			<Link href='/serials'>
				<h1 className='main-title'>Топ Сериалов</h1>
			</Link>
			<MainList
				mainUrl={
					'https://kinopoiskapiunofficial.tech/api/v2.2/films?order=NUM_VOTE&type=TV_SERIES&ratingFrom=0&ratingTo=10&yearFrom=1000&yearTo=3000&page=1'
				}
			/>
			<Link href='/premieres'>
				<h1 className='main-title'>Кинопремьеры</h1>
			</Link>
			<MainList
				mainUrl={
					'https://kinopoiskapiunofficial.tech/api/v2.2/films/premieres?year=2023&month=NOVEMBER'
				}
			/>
		</Container>
	)
}
