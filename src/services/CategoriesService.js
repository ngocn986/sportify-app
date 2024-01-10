import axios from 'axios';

const ENDPOINT = 'https://api.spotify.com/v1/browse/categories';

class CategoriesService {
  async getCategories() {
    try {
      const token = localStorage.getItem('token');
      if (token) {
        const response = await axios.get(ENDPOINT, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        return response;
      }
    } catch (error) {
      throw new Error(error.message)
    }
  }
}

export default CategoriesService;
