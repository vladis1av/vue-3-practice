import axios from '@/core/axios';

const authApi = {
  async signUp(userData) {
    const res = axios.post('/auth/local/register', userData);
    return res;
  },
  async signIn(userData) {
    const res = axios.post('/auth/local', userData);
    return res;
  },
  fetchCurrentUser() {
    return axios.get('/users/me');
  },
};

export default authApi;
