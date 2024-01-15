import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/User/HomePage';
import ShowPlayList from '../components/showPlayList';
import BrowseAll from '../components/BrowseAll';
import LoginPage from '../pages/Auth/Login';
import CategoriesPlaylist from '../pages/User/CategoriesPlaylist';
import PlaylistDetail from '../pages/User/PlaylistDetail';
import SearchSong from '../pages/User/SearchSong';
import SearchArtist from '../pages/User/SearchArtist';
import SearchPlaylist from '../pages/User/SearchPlaylist';
import SearchAlbum from '../pages/User/SearchAlbum';
import SearchShow from '../pages/User/SearchShow';
import ErrorAuthorize from '../components/ErrorAuthorize';
function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path='login' element={<LoginPage></LoginPage>}></Route>
        <Route path='/' element={<HomePage />}>
          <Route
            path='errorAuthor'
            element={<ErrorAuthorize></ErrorAuthorize>}
          ></Route>
          <Route index element={<ShowPlayList />} />
          <Route path='search/browseAll' element={<BrowseAll />} />
          <Route
            path='genre/:categoriesId'
            element={<CategoriesPlaylist></CategoriesPlaylist>}
          ></Route>
          <Route
            path='playlist/:playlistId'
            element={<PlaylistDetail></PlaylistDetail>}
          ></Route>
          <Route
            path='search/:q/:type'
            element={<SearchSong></SearchSong>}
          ></Route>
          <Route
            path='search/:q/:type'
            element={<SearchPlaylist></SearchPlaylist>}
          ></Route>
          <Route
            path='search/:q/:type'
            element={<SearchArtist></SearchArtist>}
          ></Route>
          <Route
            path='search/:q/:type'
            element={<SearchAlbum></SearchAlbum>}
          ></Route>
          <Route
            path='search/:q/:type'
            element={<SearchShow></SearchShow>}
          ></Route>
        </Route>
      </Routes>
    </>
  );
}

export default AppRoutes;
