import { create } from 'zustand'
import { SONGS } from '../shared/data/songs.data'
import type { Id } from '../shared/types/global.types'
import type { ISong } from '../shared/types/songs.interfaces'

type IPlaylist = {
	id: number
	name: string
	songs: ISong[]
}

type Store = {
	favorites: ISong[]
	playlists: IPlaylist[]
	currentTrack: ISong
	currentTrackIndex: number
	addFavorites: (song: ISong) => void
	removeFavorites: (id: Id) => void
	isFavorite: (id: Id) => boolean
	createPlaylist: (name: string) => void
	addSongToPlaylist: (playlistId: number, song: ISong) => void
	setCurrentTrack: (song: ISong, index: number) => void
}

export const useSongStore = create<Store>((set, get) => ({
	favorites: [],
	playlists: [],
	currentTrack: SONGS[0],
	currentTrackIndex: 0,
	addFavorites: song => {
		set(state => ({ favorites: [...state.favorites, song] }))
	},
	removeFavorites: id => {
		set(state => ({ favorites: state.favorites.filter(fav => fav.id !== id) }))
	},
	isFavorite: id => {
		return get().favorites.some(fav => fav.id === id)
	},
	createPlaylist: name => {
		const normalizedName = name.trim()
		if (!normalizedName) return

		set(state => {
			const exists = state.playlists.some(
				playlist =>
					playlist.name.toLowerCase() === normalizedName.toLowerCase(),
			)
			if (exists) return state

			return {
				playlists: [
					...state.playlists,
					{ id: Date.now(), name: normalizedName, songs: [] },
				],
			}
		})
	},
	addSongToPlaylist: (playlistId, song) => {
		set(state => ({
			playlists: state.playlists.map(playlist => {
				if (playlist.id !== playlistId) return playlist

				const alreadyAdded = playlist.songs.some(
					playlistSong => playlistSong.id === song.id,
				)
				if (alreadyAdded) return playlist

				return { ...playlist, songs: [...playlist.songs, song] }
			}),
		}))
	},
	setCurrentTrack: (song, index) => {
		set({ currentTrack: song, currentTrackIndex: index })
	},
}))
