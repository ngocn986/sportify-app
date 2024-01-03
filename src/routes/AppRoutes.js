import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/User/HomePage';
import ShowPlayList from '../components/showPlayList';
import BrowseAll from '../components/BrowseAll';
function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />}>
          <Route index element={<ShowPlayList />} />
          <Route path='browseAll' element={<BrowseAll />} />
        </Route>
      </Routes>
    </>
  );
}

export default AppRoutes;
