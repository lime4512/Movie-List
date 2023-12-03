'use client'
import '@/style/movie.scss'
import { CardList } from '@/components/Card/CardList'
import { useEffect, useState } from 'react'
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { Container } from '@/components/container/Container'
import { MovieSelect } from '@/components/movieSelect/MovieSelect'

export default function Movie() {
	const theme = createTheme({
		palette: {
			text: {
				primary: '#ffffff',
			},
		},
	})
	const [page, setPage] = useState(1)
	const [TotalPage, setTotalPage] = useState(13)
	const handleChange = (event, value) => {
		setPage(value)
	}

	const [category, setCategory] = useState('TOP_250_MOVIES')
	const handleCategory = text => {
		setCategory(text)
	}
	const [URL, setURL] = useState(
		`https://kinopoiskapiunofficial.tech/api/v2.2/films/collections?type=${category}&page=${page}`
	)

	useEffect(() => {
		setURL(
			`https://kinopoiskapiunofficial.tech/api/v2.2/films/collections?type=${category}&page=${page}`
		)
	}, [page, category])

	const handleTotalPage = page => {
		setTotalPage(page)
	}
	return (
		<Container>
			<h1>Фильмы</h1>
			<MovieSelect onChange={handleCategory} />

			<CardList URL={URL} onTotalPage={handleTotalPage} />
			<div className='cardList-pagination'>
				<ThemeProvider theme={theme}>
					<Stack spacing={2}>
						<Pagination count={TotalPage} page={page} onChange={handleChange} />
					</Stack>
				</ThemeProvider>
			</div>
		</Container>
	)
}
