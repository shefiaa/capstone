import axios from 'axios';
import Cookies from 'js-cookie';

// Set baseURL untuk Axios jika perlu
axios.defaults.baseURL = 'http://localhost:3000';

// Mengatur interceptor untuk menangkap respons
axios.interceptors.response.use(
  (response) => {
    const token = response.data.token; // Gantilah dengan properti token yang sesuai dengan respons server
    if (token) {
      Cookies.set('token', token, { expires: 1 }); // Simpan token dalam cookie
    }
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axios;
