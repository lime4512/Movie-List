import '@/style/selects.scss'
export const Selects = ({ setYear, setMonth }) => {
	const handleYears = event => {
		setYear(event.target.value)
	}
	const handleMonth = event => {
		setMonth(event.target.value)
	}
	return (
		<div className='selects-content'>
			<select name='year' className='select' onChange={handleYears}>
				<option value='2023'>2023</option>
				<option value='2021'>2021</option>
				<option value='2022'>2022</option>
				<option value='2004'>2004</option>
				<option value='2007'>2007</option>
				<option value='2009'>2009</option>
				<option value='2012'>2012</option>
				<option value='2015'>2015</option>
				<option value='2018'>2018</option>
				<option value='2019'>2019</option>
				<option value='2020'>2020</option>
			</select>

			<select name='month' className='select' onChange={handleMonth}>
				<option value='JANUARY'>Январь</option>
				<option value='FEBRUARY'>Февраль</option>
				<option value='MARCH'>Март</option>
				<option value='APRIL'>Апрель</option>
				<option value='MAY'>Май</option>
				<option value='JUNE'>Июнь</option>
				<option value='JULY'>Июль</option>
				<option value='AUGUST'>Август</option>
				<option value='SEPTEMBER'>Сентябрь</option>
				<option value='OCTOBER'>Октябрь</option>
				<option value='DECEMBER'>Декабрь</option>
			</select>
		</div>
	)
}
