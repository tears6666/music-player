import { Search } from 'lucide-react'
import { useState } from 'react'

export type SearchProp = {
	onSearch: (query: string) => void
}
export const Input = ({ onSearch }: SearchProp) => {
	const [query, setQuery] = useState('')

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const newQuery = event.target.value
		setQuery(newQuery)
		onSearch(newQuery)
	}
	return (
		<div className='border border-neutral-400 rounded-xl flex items-center gap-2 p-2'>
			<Search className='text-neutral-400' />
			<input
				className='outline-none'
				type='text'
				placeholder='Search...'
				value={query}
				onChange={handleInputChange}
			/>
		</div>
	)
}
