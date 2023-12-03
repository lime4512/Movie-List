import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { useState } from 'react'
import '@/style/movie.scss'
export const MovieSelect = ({ onChange }) => {
	const theme = createTheme({
		palette: {
			primary: {
				main: '#ffffff',
				borderColor: '#ffffff',
				contrastText: '#ffffff',
			},
		},
	})

	const selectFieldStyles = {
		'.MuiOutlinedInput-notchedOutline': {
			borderColor: '#ffffff',
		},
		'&:hover .MuiOutlinedInput-notchedOutline': {
			borderColor: '#595959',
			borderWidth: 'thin',
		},
		'&.Mui-focused .MuiOutlinedInput-notchedOutline': {
			borderColor: '#595959',
			borderWidth: 'thin',
		},
	}
	const [category, setСategory] = useState('TOP_250_MOVIES')

	const handleChange = event => {
		setСategory(event.target.value)
		onChange(event.target.value)
	}

	return (
		<ThemeProvider theme={theme}>
			<Box sx={{ minWidth: 120 }}>
				<FormControl fullWidth>
					<InputLabel id='demo-simple-select-label' className='selector'>
						Категория фильмов
					</InputLabel>
					<Select
						labelId='demo-simple-select-label'
						id='demo-simple-select'
						value={category}
						label='Категория фильмов'
						onChange={handleChange}
						sx={selectFieldStyles}
						className='selector'
					>
						<MenuItem value={'TOP_250_MOVIES'}>Топ 250</MenuItem>
						<MenuItem value={'VAMPIRE_THEME'}>Вампиры</MenuItem>
						<MenuItem value={'COMICS_THEME'}>Комиксы</MenuItem>
						<MenuItem value={'FAMILY'}>Семейные</MenuItem>
						<MenuItem value={'LOVE_THEME'}>Любовные</MenuItem>
						<MenuItem value={'ZOMBIE_THEME'}>Зомби</MenuItem>
						<MenuItem value={'CATASTROPHE_THEME'}>Катастрофы</MenuItem>
						<MenuItem value={'KIDS_ANIMATION_THEME'}>Для детей</MenuItem>
					</Select>
				</FormControl>
			</Box>
		</ThemeProvider>
	)
}
