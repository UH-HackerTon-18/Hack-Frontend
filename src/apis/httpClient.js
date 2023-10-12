import axios from 'axios';
import { REACT_APP_BASE_URL } from 'constants/config';

const instance = axios.create({
  baseURL: REACT_APP_BASE_URL,
  timeout: 10000,
  headers: { 'Content-Type': 'application/json' },
});

instance.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem('accessToken');

    if (accessToken) {
      config.headers.Authorization = accessToken;
    }

    return config;
  },

  (error) => {
    return error;
  },
);

instance.interceptors.response.use(
  (response) => {
    return response;
  },

  (error) => {
    const { status } = error.response;

    const getUpdatedAccessToken = async () => {
      const refreshToken = localStorage.getItem('refreshToken');
      const { data } = await axios.put(`${REACT_APP_BASE_URL}/login`, null, {
        headers: {
          'Refresh-Token': refreshToken,
        },
      });

      return data;
    };

    const setUpdatedAccessToken = (accessToken) => {
      localStorage.setItem('accessToken', accessToken);
    };

    const handleAccessTokenRequest = async () => {
      try {
        const { accessToken } = await getUpdatedAccessToken();
        setUpdatedAccessToken(accessToken);
      } catch (error) {
        console.log('에러');
      }
    };

    if (status === 403) {
      window.location.reload();
      handleAccessTokenRequest();
    }

    return error;
  },
);

export default instance;
