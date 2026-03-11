import { Outlet } from 'react-router-dom'
import { Header } from '../components/Header'
import { Listen } from '../components/Listen'

export const Layout = () => {
	return (
		<div className='max-w-7xl mx-auto m-10'>
			<Header />
			<div className='mt-10 flex justify-between gap-10'>
				<Listen />
				<Outlet />
			</div>
		</div>
	)
}
