import { SONGS } from '../shared/data/songs.data'
import { SongCard } from './ui/SongCard'

export default function AllSongs() {
	return (
		<div className='rounded-2xl border-[0.5px] border-neutral-600 bg-neutral-800 p-6'>
			<div className='mb-6 flex items-end justify-between gap-4'>
				<div>
					<h1 className='text-3xl font-bold'>All songs ({SONGS.length})</h1>
				</div>
			</div>

			<div className='grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3'>
				{SONGS.map(song => (
					<SongCard key={song.id} song={song} />
				))}
			</div>
		</div>
	)
}
