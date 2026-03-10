import { useMemo, useState } from 'react'
import type { ISong } from '../shared/types/songs.interface'

export const useHandleSearch = (products: ISong[] | undefined) => {
	const [searchQuery, setSearchQuery] = useState('')

	const handleSearch = (query: string) => {
		setSearchQuery(query)
	}

	const filteredProducts = useMemo(() => {
		if (!searchQuery) {
			return products
		}
		return products?.filter(product =>
			product.title.toLowerCase().includes(searchQuery.toLowerCase())
		)
	}, [searchQuery, products])

	return {
		searchQuery,
		handleSearch,
		filteredProducts,
	}
}