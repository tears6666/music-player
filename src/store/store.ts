import { create } from 'zustand'
import type { Id } from '../shared/types/global.type'
import { SONGS } from '../shared/data/songs.data'
import type { ISong } from '../shared/types/songs.interface'

type Store = {
	favorites: ISong[]
	addFavorites: (song: ISong) => void
  removeFavorites: (id: Id) => void
	isFavorite: (id: Id) => boolean
	currentTrack: ISong
	currentTrackIndex: number
	setCurrentTrack: (song: ISong, index: number) => void
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
	currentTrack: SONGS[0],
	currentTrackIndex: 0,
	setCurrentTrack: (song, index) => {
		set({ currentTrack: song, currentTrackIndex: index })
	},
}))
