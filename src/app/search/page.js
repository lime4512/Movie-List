'use client'
import { useState } from 'react'
import './search.scss'
import { SearchList } from '@/components/SearchList/SearchList'
import { useDebounce } from '@/hooks/useDebounce'

export default function Search() {
	const [inpValue, setInpValue] = useState('')
	const debouncedValue = useDebounce(inpValue)

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
			<SearchList searchValue={debouncedValue} />
		</section>
	)
}
