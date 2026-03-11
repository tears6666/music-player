import { Heart } from 'lucide-react'
import { useFormDuration } from '../../hooks/useFormDuration'
import { useMusic } from '../../hooks/useMusic'
import { useToggleFavorite } from '../../hooks/useToggleFavorite'
import type { ISong } from '../../shared/types/songs.interface'

interface SongCardProps {
	song: ISong
}
export const SongCard = ({ song }: SongCardProps) => {
	const formatDuration = useFormDuration()
	const { favorite, toggleFavorite } = useToggleFavorite(song)
	const { handleCurrentSong, currentTrack } = useMusic()

	const openTrack = () => handleCurrentSong({ song, index: song.id })
	const isCurrent = currentTrack?.id === song.id
	return (
		<div
			role='button'
			onClick={() => openTrack()}
			className={`group relative w-full text-left rounded-2xl border p-3 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500/60 ${
				isCurrent
					? 'border-red-500/70 bg-red-500/10'
					: 'border-neutral-700 bg-neutral-900/40 hover:-translate-y-0.5 hover:border-neutral-500 hover:bg-neutral-900/70'
			}`}
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
			<button
				onClick={toggleFavorite}
				className={
					'absolute right-3 top-12 inline-flex h-8 w-8 items-center justify-center rounded-full bg-neutral-900/80 text-neutral-400 opacity-0 ring-1 ring-neutral-700 transition hover:bg-neutral-800 hover:text-red-400 group-hover:opacity-100'
				}
			>
				<Heart
					className={`h-4 w-4 transition ${
						favorite ? 'fill-red-500 text-red-500' : ''
					}`}
				/>
			</button>
		</div>
	)
}
