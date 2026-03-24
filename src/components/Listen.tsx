import { useMusic } from '../hooks/useMusic'

export const Listen = () => {
	const { currentTrack } = useMusic()
	return (
		<aside className='w-80 shrink-0 self-start rounded-2xl border-[0.5px] border-neutral-600 bg-neutral-800 p-4'>
			<div className='flex items-center justify-between gap-3'>
				<div className='min-w-0'>
					<p className='text-xs font-medium tracking-wide text-neutral-400'>
						NOW PLAYING
					</p>
					<h3 className='truncate text-base font-semibold text-neutral-100'>
						{currentTrack.title}
					</h3>
					<p className='truncate text-sm text-neutral-400'>
						{currentTrack.artist}
					</p>
				</div>
			</div>

			<div className='mt-4'>
				<audio className='w-full' controls src={currentTrack.audioUrl} />
			</div>

			<div className='mt-4 grid grid-cols-2 gap-2 text-xs text-neutral-400'>
				<div className='rounded-xl border border-neutral-700 bg-neutral-900/40 p-3'>
					<p className='text-[10px] uppercase tracking-wide text-neutral-500'>
						Album
					</p>
					<p className='mt-1 truncate text-neutral-200'>{currentTrack.album}</p>
				</div>
				<div className='rounded-xl border border-neutral-700 bg-neutral-900/40 p-3'>
					<p className='text-[10px] uppercase tracking-wide text-neutral-500'>
						Year
					</p>
					<p className='mt-1 truncate text-neutral-200'>{currentTrack.year}</p>
				</div>
				<div className='col-span-2 rounded-xl border border-neutral-700 bg-neutral-900/40 p-3'>
					<p className='text-[10px] uppercase tracking-wide text-neutral-500'>
						Genre
					</p>
					<p className='mt-1 truncate text-neutral-200'>{currentTrack.genre}</p>
				</div>
			</div>
		</aside>
	)
}
