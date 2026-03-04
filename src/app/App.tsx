import { Route, Routes } from 'react-router-dom';
import { HOME_PAGE } from '../constants/routes.constants';
import AllSongs from '../pages/AllSongs';
import { Layout } from './layout';

export default function App(){
  return (
    <Routes>
      <Route path={HOME_PAGE} element={<Layout />}>
        <Route index element={<AllSongs />}/>
      </Route>
    </Routes>
  )
}