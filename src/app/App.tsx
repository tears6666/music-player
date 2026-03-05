import { Route, Routes } from 'react-router-dom';
import { HOME_PAGE, PLAYLISTS } from '../constants/routes.constants'
import AllSongs from '../pages/AllSongs';
import Playlists from '../pages/Playlists'
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