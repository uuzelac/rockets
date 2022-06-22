import { useEffect } from 'react';
import NetInfo from '@react-native-community/netinfo';
import { useDispatch } from 'react-redux';
import { setConnection } from '../redux/appState/reducers';
import { noInternetConnectionToast } from '../utils/helper';

interface ConnectionProviderProps {
  children: JSX.Element;
}

const ConnectionProvider = ({ children }: ConnectionProviderProps): JSX.Element => {
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state): void => {
      dispatch(setConnection(state.isConnected));
      if (!state.isConnected) {
        noInternetConnectionToast();
      }
    });

    return unsubscribe();
  }, []);

  return children;
};

export default ConnectionProvider;
