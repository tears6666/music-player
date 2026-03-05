import { Outlet } from 'react-router-dom'
import { Header } from '../components/Header'

export const Layout = () => {
	return (
		<div className='max-w-7xl mx-auto m-10'>
			<Header />
			<div className='mt-10'>
				<Outlet />
			</div>
		</div>
	)
}
