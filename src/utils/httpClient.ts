import axios, { AxiosInstance }  from 'axios';
import Toast from 'react-native-toast-message';
// import store from '../store';
// import { loadingStart, loadingStop } from '../actions/LoadingAction';

const httpClient: AxiosInstance = axios.create();

httpClient.interceptors.request.use(request => {
    return request;
});

httpClient.interceptors.response.use(response => {
    return response;
}, error => {
    Toast.show({
        type: 'error',
        text1: 'Network error',
        text2: 'An error occurred. Please try again.'
      });
    throw error;
}
);

export default httpClient;