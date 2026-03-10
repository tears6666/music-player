import { useMemo, useState } from 'react'
import type { ISong } from '../shared/types/songs.interface'

export const useHandleSearch = (songs: ISong[] | undefined) => {
	//usestate
	const [searchQuery, setSearchQuery] = useState('')
	//state funcs
	const handleSearch = (query: string) => {
		setSearchQuery(query)
	}
	const filteredSongs = useMemo(() => {
		if (!searchQuery) {
			return songs
		}
		return songs?.filter(song =>
			song.title.toLowerCase().includes(searchQuery.toLowerCase()),
		)
	}, [searchQuery, songs])

	return {
		searchQuery,
		handleSearch,
		filteredSongs,
		totalSongs: songs?.length,
	}
}