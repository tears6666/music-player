import { Music } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import { LINK_LIST } from '../shared/data/link.data'

export const Header = () => {
	const { pathname } = useLocation()
	return (
		<header className='p-10 flex items-center justify-between bg-neutral-800 border-neutral-600 border-[0.5px] rounded-2xl'>
			<h1 className='font-bold text-3xl flex items-center gap-2 bg-gradient-to-r from-red-800 via-red-500 to-red-400 text-transparent bg-clip-text'>
				<Music color='red' size={40} /> Music-Player
			</h1>
			<nav className='flex items-center gap-10'>
				{LINK_LIST.map(link => (
					<Link
						className={`transition-all ${pathname === link.to ? 'font-bold' : ''}`}
						to={link.to}
						key={link.id}
					>
						{link.text}
					</Link>
				))}
			</nav>
		</header>
	)
}
