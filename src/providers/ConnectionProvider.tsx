import { useEffect } from 'react';
import NetInfo from '@react-native-community/netinfo';
import Toast from 'react-native-toast-message';
import { useDispatch } from 'react-redux';
import { setConnection } from '../redux/appState/reducers';

interface ConnectionProviderProps {
    children: JSX.Element;
}

const ConnectionProvider = ({ children }: ConnectionProviderProps): JSX.Element => {
    const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state): void => {
        dispatch(setConnection(state.isConnected));
        if(!state.isConnected) {
          Toast.show({
            type: 'error',
            text1: 'No internet connection',
            text2: 'An error occurred due to connectivity issues.'
          });
        }
    });

    return unsubscribe();
  }, []);

  return children;
};

export default ConnectionProvider;
