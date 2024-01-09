import axios from 'axios';

const END_POINT = 'https://api.spotify.com/v1/search';
class SearchService {
  async searchService(query, type) {
    try {
      let token = localStorage.getItem('token');
      let response = await axios.get(`${END_POINT}?q=${query}&type=${type}`, {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      });
      return response;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

export default SearchService;
