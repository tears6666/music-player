import { Route, Routes } from 'react-router-dom';
import AllSongs from '../components/AllSongs'
import Playlists from '../components/Playlists'
import { HOME_PAGE, PLAYLISTS } from '../constants/routes.constants'
import { Layout } from './layout';

export default function App(){
  return (
		<Routes>
			<Route path={HOME_PAGE} element={<Layout />}>
				<Route index element={<AllSongs />} />
				<Route path={PLAYLISTS} element={<Playlists />} />
			</Route>
		</Routes>
	)
}