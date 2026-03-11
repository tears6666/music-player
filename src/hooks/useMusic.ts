import type { ISong } from '../shared/types/songs.interface'
import { useSongStore } from '../store/store'

type args = {
  song: ISong
  index: number
}

export const useMusic = () => {
	const currentTrack = useSongStore(state => state.currentTrack)
	const currentTrackIndex = useSongStore(state => state.currentTrackIndex)
	const setCurrentTrack = useSongStore(state => state.setCurrentTrack)

	const handleCurrentSong = ({ song, index }: args) => {
		setCurrentTrack(song, index)
	}

	return { currentTrack, currentTrackIndex, handleCurrentSong }
}