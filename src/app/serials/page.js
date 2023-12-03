'use client'
import { Container } from '@/components/container/Container'
import { CardList } from '@/components/Card/CardList'
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { useEffect, useState } from 'react'
import '@/style/movie.scss'
export default function Serials() {
	const theme = createTheme({
		palette: {
			text: {
				primary: '#ffffff',
			},
		},
	})
	const [TotalPage, setTotalPage] = useState(13)
	const handleTotalPage = page => {
		setTotalPage(page)
	}
	const [page, setPage] = useState(1)

	const handleChange = (event, value) => {
		setPage(value)
	}

	const [URL, setURL] = useState(
		`https://kinopoiskapiunofficial.tech/api/v2.2/films?order=RATING&type=TV_SERIES&ratingFrom=0&ratingTo=10&yearFrom=1000&yearTo=3000&page=1`
	)

	useEffect(() => {
		setURL(
			`https://kinopoiskapiunofficial.tech/api/v2.2/films?order=RATING&type=TV_SERIES&ratingFrom=0&ratingTo=10&yearFrom=1000&yearTo=3000&page=${page}`
		)
	}, [page])
	return (
		<Container>
			<h1>Сериалы</h1>
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
