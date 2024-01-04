import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PlaylistService from '../../services/PlaylistService';
function CategoriesPlaylist() {
  const categoriesId = useParams();
  const getCategoriesPlaylist = async () => {
    try {
      let services = new PlaylistService();
      const response = await services.getCategoriesPlaylist(categoriesId);
      console.log('response: ', response.data.playlists.items);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getCategoriesPlaylist()
  })

  return <div>CategoriesPlaylist</div>;
}

export default CategoriesPlaylist;
