import { useFormDuration } from '../../hooks/useFormDuration'
import type { ISong } from '../../shared/types/songs.interface'

interface SongCardProps {
	song: ISong
	onClick?: (song: ISong) => void
}
export const SongCard = ({ song, onClick }: SongCardProps) => {
	const formatDuration = useFormDuration()
	return (
		<button
			onClick={() => onClick?.(song)}
			className='group w-full text-left rounded-2xl border border-neutral-700 bg-neutral-900/40 p-3 transition-all hover:-translate-y-0.5 hover:border-neutral-500 hover:bg-neutral-900/70 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500/60'
		>
			<div className='flex gap-3'>
				<div className='min-w-0 flex-1'>
					<div className='flex items-start justify-between gap-3'>
						<div className='min-w-0'>
							<div className='truncate font-semibold text-neutral-100'>
								{song.title}
							</div>
							<div className='truncate text-sm text-neutral-400'>
								{song.artist}
							</div>
						</div>
						<div className='shrink-0 text-xs text-neutral-400'>
							{formatDuration(song.durationSec)}
						</div>
					</div>

					<div className='mt-2 flex flex-wrap items-center gap-2'>
						<span className='rounded-full border border-neutral-700 bg-neutral-800/60 px-2 py-0.5 text-xs text-neutral-300'>
							{song.album}
						</span>
						<span className='rounded-full border border-neutral-700 bg-neutral-800/60 px-2 py-0.5 text-xs text-neutral-300'>
							{song.year}
						</span>
						<span className='rounded-full border border-neutral-700 bg-neutral-800/60 px-2 py-0.5 text-xs text-neutral-300'>
							{song.genre}
						</span>
					</div>
				</div>
			</div>
		</button>
	)
}
