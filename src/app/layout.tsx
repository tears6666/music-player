import { Outlet } from 'react-router-dom'
import { Header } from '../components/Header'

export const Layout = () => {
	return (
		<div className='max-w-7xl mx-auto'>
			<Header />
      <Outlet />
		</div>
	)
}
