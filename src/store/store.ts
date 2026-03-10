import { create } from 'zustand'
import type { ISong } from '../shared/types/songs.interface'

type Id = number | string

type Store = {
	favorites: ISong[]
	addFavorites: (song: ISong) => void
  removeFavorites: (id: Id) => void
	isFavorite: (id: Id) => boolean
}

export const useSongStore = create<Store>((set, get) => ({
	favorites: [],
	addFavorites: song => {
		set(state => ({ favorites: [...state.favorites, song] }))
	},
	removeFavorites: id => {
		set(state => ({ favorites: state.favorites.filter(fav => fav.id !== id) }))
	},
	isFavorite: id => {
		return get().favorites.some(fav => fav.id === id)
	},
}))
