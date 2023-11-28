'use client'
import { CardList } from '@/components/Card/CardList'

import './globals.scss'
import { useState } from 'react'
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'
import { createTheme, ThemeProvider } from '@mui/material/styles'

export default function Home() {
	const theme = createTheme({
		palette: {
			text: {
				primary: '#ffffff',
			},
		},
	})
	const [page, setPage] = useState(1)

	const handleChange = (event, value) => {
		setPage(value)
	}
	return (
		<main>
			<CardList page={page} />
			<div className='cardList-pagination'>
				<ThemeProvider theme={theme}>
					<Stack spacing={2}>
						<Pagination count={13} page={page} onChange={handleChange} />
					</Stack>
				</ThemeProvider>
			</div>
		</main>
	)
}
