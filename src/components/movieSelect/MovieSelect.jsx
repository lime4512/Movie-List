import '@/style/movieSelector.scss'
export const MovieSelect = ({ onChange }) => {
	const handleChange = event => {
		onChange(event.target.value)
	}

	return (
		<div className='selects-content'>
			<select name='year' className='select' onChange={handleChange}>
				<option value='TOP_250_MOVIES'>Топ 250</option>
				<option value='VAMPIRE_THEME'>Вампиры</option>
				<option value='COMICS_THEME'>Комиксы</option>
				<option value='FAMILY'>Семейные</option>
				<option value='LOVE_THEME'>Любовные</option>
				<option value='ZOMBIE_THEME'>Зомби</option>
				<option value='CATASTROPHE_THEME'>Катастрофы</option>
				<option value='KIDS_ANIMATION_THEME'>Для детей</option>
			</select>
		</div>
	)
}
