export default function Playlists() {
	return (
		<div className='rounded-2xl border-[0.5px] border-neutral-600 bg-neutral-800 p-6'>
			<div className='mb-6 flex items-end justify-between gap-4'>
				<div>
					<h1 className='text-3xl font-bold'>Playlists</h1>
				</div>
				<button className='rounded-xl bg-white px-4 py-2 text-sm font-semibold text-black transition hover:bg-neutral-200'>
					+ New playlist
				</button>
			</div>

			<div className='grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3'></div>
		</div>
	)
}
