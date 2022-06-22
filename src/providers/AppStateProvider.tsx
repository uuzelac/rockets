import { useEffect } from 'react';
import { AppState } from 'react-native';
import { useDispatch } from 'react-redux';
import { setAppState } from '../redux/appState/reducers';

interface AppStateProviderProps {
  children: JSX.Element;
}

const AppStateProvider = ({ children }: AppStateProviderProps): JSX.Element => {
  const dispatch = useDispatch();
  useEffect(() => {
    const listener = AppState.addEventListener('change', (nextAppState) => {
      dispatch(setAppState(nextAppState));
    });

    return listener.remove;
  }, []);

  return children;
};

export default AppStateProvider;
