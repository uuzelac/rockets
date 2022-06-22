import { Alert, Platform } from 'react-native';
import { requestMultiple, PERMISSIONS, RESULTS, openSettings } from 'react-native-permissions';

const handleMultiplePermissionsAndroid = (callbackAction: () => void): void  => {
  requestMultiple([PERMISSIONS.ANDROID.CAMERA, PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE]).then(
    (statuses) => {
      const isPermissionsEnabled = !Object.values(statuses).some(
        (element) => element === RESULTS.BLOCKED || element === RESULTS.DENIED
      );

      if (!isPermissionsEnabled) {
        let message = '';
        if (
          statuses[PERMISSIONS.ANDROID.CAMERA] === RESULTS.BLOCKED ||
          statuses[PERMISSIONS.ANDROID.CAMERA] === RESULTS.DENIED
        ) {
          message =
            'Rockets needs permission to access your camera. Please go to Settings > Privacy > Permission manager > Camera, and enable Rockets.';
        } else if (
          statuses[PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE] === RESULTS.BLOCKED ||
          statuses[PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE] === RESULTS.DENIED
        ) {
          message =
            'Rockets needs permission to access your photo library. Please go to Settings > Privacy > Permission manager > Files and media, and enable Rockets.';
        }
        Alert.alert('Permission Required', message, [
          {
            text: 'Not now',
            style: 'cancel',
          },
          {
            text: 'Open settings',
            onPress: openSettings,
          },
        ]);
      } else {
        callbackAction();
      }
    }
  );
};

const handleMultiplePermissionsIOS = (callbackAction: () => void): void  => {
  requestMultiple([
    PERMISSIONS.IOS.APP_TRACKING_TRANSPARENCY,
    PERMISSIONS.IOS.CAMERA,
    PERMISSIONS.IOS.PHOTO_LIBRARY,
  ]).then((statuses) => {
    const isPermissionsEnabled = !Object.values(statuses).some(
      (element) => element === RESULTS.BLOCKED
    );

    if (!isPermissionsEnabled) {
      let message = '';
      if (statuses[PERMISSIONS.IOS.CAMERA] === RESULTS.BLOCKED) {
        message =
          'Rockets needs permission to access your camera. Please go to Settings > Privacy > Photos, and enable Rockets.';
      } else if (statuses[PERMISSIONS.IOS.PHOTO_LIBRARY] === RESULTS.BLOCKED) {
        message =
          'Rockets needs permission to access your photo library. Please go to Settings > Privacy > Permission manager > Files and media, and enable Rockets.';
      } else if (statuses[PERMISSIONS.IOS.APP_TRACKING_TRANSPARENCY] === RESULTS.BLOCKED) {
        message =
          'Rockets needs permission to track your activities. Please go to Settings > Privacy';
      }
      Alert.alert('Permission Required', message, [
        {
          text: 'Not now',
          style: 'cancel',
        },
        {
          text: 'Open settings',
          onPress: openSettings,
        },
      ]);
    } else {
      callbackAction();
    }
  });
};

export const handlePermissionsIOS = (appState: string | null, callbackAction: () => void): void => {
  if (appState && appState === 'active') {
    handleMultiplePermissionsIOS(callbackAction);
  }
};

export const handlePermissionsAndroid = (callbackAction: () => void): void => {
  handleMultiplePermissionsAndroid(callbackAction);
};

export const handlePermissions = (appState: string | null, callbackAction: () => void): void => {
  const platform = Platform.select({
    ios: () => handlePermissionsIOS(appState, callbackAction),
    android: () => handlePermissionsAndroid(callbackAction),
  });
  if (platform) {
    platform();
  }
};
