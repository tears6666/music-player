import { SongCard } from '../components/ui/SongCard'
import { useSongStore } from '../store/store'

export default function Favorites() {
	const favorites = useSongStore(state => state.favorites)

	return (
		<div className='w-300 h-150 overflow-y-scroll rounded-2xl border-[0.5px] border-neutral-600 bg-neutral-800 p-6'>
			<div className='mb-6 flex items-end justify-between gap-4'>
				<div>
					<h1 className='text-3xl font-bold'>Favorites ({favorites.length})</h1>
				</div>
			</div>

			{favorites.length === 0 ? (
				<div className='flex flex-col items-center justify-center rounded-2xl border border-dashed border-neutral-600 py-12 text-center text-neutral-400'>
					<p className='text-sm'>You don't have any favorite tracks yet.</p>
				</div>
			) : (
				<div className='grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3'>
					{favorites.map(fav => (
						<SongCard key={fav.id} song={fav} />
					))}
				</div>
			)}
		</div>
	)
}