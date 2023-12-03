'use client'
import { useState } from 'react'
import './search.scss'
import { SearchList } from '@/components/SearchList/SearchList'
import { useDebounce } from '@/hooks/useDebounce'
import Image from 'next/image'
import { Container } from '@/components/container/Container'

export default function Search() {
	const [inpValue, setInpValue] = useState('')
	const debouncedValue = useDebounce(inpValue)

	const handleInputChange = event => {
		setInpValue(event.target.value)
	}

	return (
		<Container>
			<h1 className='search-title'>Поиск</h1>
			<div className='search-input-content'>
				<Image
					src='/search-img.png'
					alt='img'
					width={24}
					height={24}
					className='search-input-img'
				/>
				<input
					className='search-input'
					type='text'
					placeholder='Поиск...'
					onChange={handleInputChange}
					value={inpValue}
				/>
			</div>

			<SearchList searchValue={debouncedValue} />
		</Container>
	)
}
