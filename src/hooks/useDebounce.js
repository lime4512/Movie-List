import { useEffect, useState } from 'react'

export const useDebounce = value => {
	const [debouncedValue, setDebouncedValue] = useState(value)

	useEffect(() => {
		const timer = setTimeout(() => setDebouncedValue(value), 500)
		return () => {
			clearTimeout(timer)
		}
	}, [value])

	return debouncedValue
}
