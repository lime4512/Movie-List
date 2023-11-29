'use client'

import { useState } from 'react'

export default function Search() {
	const [inpValue, setInpValue] = useState('')
	const handleInputChange = event => {
		setInpValue(event.target.value)
	}
	return (
		<section className='main-search'>
			<h1>ПОИСК!!!!</h1>

			<input
				type='text'
				placeholder='Поиск...'
				onChange={handleInputChange}
				value={inpValue}
			/>
			<h1>{inpValue}</h1>
		</section>
	)
}
