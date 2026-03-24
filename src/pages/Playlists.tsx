import { useMemo, useState } from 'react'
import { SONGS } from '../shared/data/songs.data'
import { useSongStore } from '../store/store'

export default function Playlists() {
	const playlists = useSongStore(state => state.playlists)
	const createPlaylist = useSongStore(state => state.createPlaylist)
	const addSongToPlaylist = useSongStore(state => state.addSongToPlaylist)

	const [playlistName, setPlaylistName] = useState('')
	const [selectedPlaylistId, setSelectedPlaylistId] = useState<number | null>(null)
	const [selectedSongId, setSelectedSongId] = useState<number>(SONGS[0]?.id ?? 0)

	const selectedSong = useMemo(
		() => SONGS.find(song => song.id === selectedSongId),
		[selectedSongId],
	)

	const handleCreatePlaylist = () => {
		createPlaylist(playlistName)
		setPlaylistName('')
	}

	const handleAddSong = () => {
		if (!selectedPlaylistId || !selectedSong) return
		addSongToPlaylist(selectedPlaylistId, selectedSong)
	}

	return (
		<div className='w-300 h-150 overflow-y-scroll rounded-2xl border-[0.5px] border-neutral-600 bg-neutral-800 p-6'>
			<div className='mb-6 flex items-end justify-between gap-4'>
				<div>
					<h1 className='text-3xl font-bold'>Playlists ({playlists.length})</h1>
				</div>
			</div>

			<div className='mb-6 grid grid-cols-1 gap-4 rounded-2xl border border-neutral-700 bg-neutral-900/40 p-4 xl:grid-cols-2'>
				<div className='space-y-2'>
					<p className='text-sm font-semibold text-neutral-300'>Create playlist</p>
					<div className='flex gap-2'>
						<input
							value={playlistName}
							onChange={event => setPlaylistName(event.target.value)}
							placeholder='Playlist name'
							className='w-full rounded-xl border border-neutral-700 bg-neutral-800 px-3 py-2 text-sm text-white outline-none transition focus:border-red-500'
						/>
						<button
							onClick={handleCreatePlaylist}
							className='rounded-xl bg-white px-4 py-2 text-sm font-semibold text-black transition hover:bg-neutral-200'
						>
							+ New
						</button>
					</div>
				</div>

				<div className='space-y-2'>
					<p className='text-sm font-semibold text-neutral-300'>
						Add song to playlist
					</p>
					<div className='grid grid-cols-1 gap-2 md:grid-cols-[1fr_1fr_auto]'>
						<select
							value={selectedPlaylistId ?? ''}
							onChange={event =>
								setSelectedPlaylistId(
									event.target.value ? Number(event.target.value) : null,
								)
							}
							className='rounded-xl border border-neutral-700 bg-neutral-800 px-3 py-2 text-sm text-white outline-none transition focus:border-red-500'
						>
							<option value=''>Choose playlist</option>
							{playlists.map(playlist => (
								<option key={playlist.id} value={playlist.id}>
									{playlist.name}
								</option>
							))}
						</select>
						<select
							value={selectedSongId}
							onChange={event => setSelectedSongId(Number(event.target.value))}
							className='rounded-xl border border-neutral-700 bg-neutral-800 px-3 py-2 text-sm text-white outline-none transition focus:border-red-500'
						>
							{SONGS.map(song => (
								<option key={song.id} value={song.id}>
									{song.title} - {song.artist}
								</option>
							))}
						</select>
						<button
							onClick={handleAddSong}
							disabled={!selectedPlaylistId}
							className='rounded-xl bg-red-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-600 disabled:cursor-not-allowed disabled:bg-neutral-600'
						>
							Add
						</button>
					</div>
				</div>
			</div>

			{playlists.length === 0 ? (
				<div className='flex flex-col items-center justify-center rounded-2xl border border-dashed border-neutral-600 py-12 text-center text-neutral-400'>
					<p className='text-sm'>You don't have playlists yet. Create one above.</p>
				</div>
			) : (
				<div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
					{playlists.map(playlist => (
						<div
							key={playlist.id}
							className='rounded-2xl border border-neutral-700 bg-neutral-900/40 p-4'
						>
							<div className='mb-3 flex items-center justify-between'>
								<h2 className='text-lg font-semibold text-white'>{playlist.name}</h2>
								<span className='text-xs text-neutral-400'>
									{playlist.songs.length} songs
								</span>
							</div>

							{playlist.songs.length === 0 ? (
								<p className='text-sm text-neutral-400'>
									This playlist is empty. Add a song above.
								</p>
							) : (
								<ul className='space-y-2'>
									{playlist.songs.map(song => (
										<li
											key={song.id}
											className='rounded-lg border border-neutral-700 bg-neutral-800/70 px-3 py-2 text-sm text-neutral-200'
										>
											{song.title} - {song.artist}
										</li>
									))}
								</ul>
							)}
						</div>
					))}
				</div>
			)}
		</div>
	)
}
