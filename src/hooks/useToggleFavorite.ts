import type React from 'react'
import type { ISong } from '../shared/types/songs.interface'
import { useSongStore } from '../store/store'

export const useToggleFavorite = (song: ISong) => {
	const { addFavorites, removeFavorites, isFavorite } = useSongStore()
	const favorite = isFavorite(song.id)

	const toggleFavorite = (e: React.MouseEvent) => {
		e.stopPropagation()
		e.preventDefault()
		if (favorite) {
			removeFavorites(song.id)
		} else {
			addFavorites(song)
		}
	}

	return { favorite, toggleFavorite }
}