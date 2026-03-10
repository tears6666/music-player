import { Route, Routes } from 'react-router-dom';
import AllSongs from '../components/AllSongs'
import { FAVORITES, HOME_PAGE, PLAYLISTS } from '../constants/routes.constants'
import Favorites from '../pages/Favorites'
import Playlists from '../pages/Playlists'
import { Layout } from './layout';

export default function App(){
  return (
		<Routes>
			<Route path={HOME_PAGE} element={<Layout />}>
				<Route index element={<AllSongs />} />
				<Route path={PLAYLISTS} element={<Playlists />} />
				<Route path={FAVORITES} element={<Favorites />} />
			</Route>
		</Routes>
	)
}