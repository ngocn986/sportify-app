import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/User/HomePage';
import ShowPlayList from '../components/showPlayList';
import BrowseAll from '../components/BrowseAll';
import LoginPage from '../pages/Auth/Login';
import CategoriesPlaylist from '../pages/User/CategoriesPlaylist';
import PlaylistDetail from '../pages/User/PlaylistDetail';
function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path='login' element={<LoginPage></LoginPage>}></Route>
        <Route path='/' element={<HomePage />}>
          <Route index element={<ShowPlayList />} />
          <Route path='browseAll' element={<BrowseAll />} />
          <Route
            path='genre/:categoriesId'
            element={<CategoriesPlaylist></CategoriesPlaylist>}
          ></Route>
          <Route
            path='playlist/:playlistId'
            element={<PlaylistDetail></PlaylistDetail>}
          ></Route>
        </Route>
      </Routes>
    </>
  );
}

export default AppRoutes;
