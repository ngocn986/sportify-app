import axios from 'axios';

const client_id = 'b8ac00583314427388804fdfc6b4c02c';
const client_secret = 'c80c3b8051ed44119d278df121e0d510';

const authOptions = {
  url: 'https://accounts.spotify.com/api/token',
  headers: {
    Authorization: 'Basic ' + btoa(`${client_id}:${client_secret}`),
  },
  form: {
    grant_type: 'client_credentials',
  },
  json: true,
};

class Auther {
  async token() {
    try {
      const response = await axios.post(authOptions.url, null, {
        headers: authOptions.headers,
        params: authOptions.form,
      });
      return response;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

export default Auther;
