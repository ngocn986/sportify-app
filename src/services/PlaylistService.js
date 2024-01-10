import axios from 'axios';

class PlaylistService {
  async getCategoriesPlaylist(categoriesId) {
    try {
      const token = localStorage.getItem('token');
      if (token) {
        const response = await axios.get(
          `https://api.spotify.com/v1/browse/categories/${categoriesId}/playlists`,
          {
            headers: {
              Authorization: 'Bearer ' + token,
            },
          }
        );
        return response;
      }
    } catch (error) {
      throw new Error(error.message);
    }
  }
  async getPlaylist(playlistId) {
    try {
      const token = localStorage.getItem('token');
      if (token) {
        const response = await axios.get(
          `https://api.spotify.com/v1/playlists/${playlistId}`,
          {
            headers: {
              Authorization: 'Bearer ' + token,
            },
          }
        );
        return response;
      }
    } catch (error) {
      throw new Error(error.message);
    }
  }
  async getFeaturedPlaylists() {
    try {
      const token = localStorage.getItem('token');
      console.log('tokenFeature: ' + token);
      if (token) {
        const response = await axios.get(
          'https://api.spotify.com/v1/browse/featured-playlists',
          {
            headers: {
              Authorization: 'Bearer ' + token,
            },
          }
        );
        return response;
      }
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

export default PlaylistService;
