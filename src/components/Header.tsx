import { Music } from 'lucide-react'
import { Link } from 'react-router-dom'
import { LINK_LIST } from '../shared/data/link.data'

export const Header = () => {
	return (
		<header className='m-10 p-10 flex items-center justify-between bg-neutral-800 border-neutral-600 border-[0.5px] rounded-2xl'>
			<h1 className='text-red-700 font-bold text-3xl flex items-center gap-2'>
				<Music size={40}/> Music-Player
			</h1>
			<nav className='flex items-center gap-10'>
				{LINK_LIST.map(link =>(
					<Link to={link.to} key={link.id}>{link.text}</Link>
				))}
			</nav>
		</header>
	)
}
