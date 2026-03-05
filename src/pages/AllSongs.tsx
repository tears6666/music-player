import { SONGS } from '../shared/data/songs.data'

export default function AllSongs() {
	return (
		<div className='flex flex-col items-center bg-neutral-800 border-[0.5px] border-neutral-600 rounded-2xl'>
			<h1 className='text-3xl font-bold'>All songs ({SONGS.length})</h1>
			<div>
				{SONGS.map(song => (
					<div key={song.id}>{song.title}</div>
				))}
			</div>
		</div>
	)
}
