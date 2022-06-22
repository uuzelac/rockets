import Toast from 'react-native-toast-message';

export const calculateMassInTones = (mass: number): string => (mass / 1000).toFixed(1);

export const noInternetConnectionToast = (): void => {
  Toast.show({
    type: 'error',
    text1: 'No internet connection',
    text2: 'An error occurred due to connectivity issues.',
  });
};
