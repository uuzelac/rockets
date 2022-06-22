import * as React from 'react';
import { Text, View } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faFaceFrown } from '@fortawesome/free-solid-svg-icons';
import styles from './styles';
import * as colors from '../../theme/colors';

const NoInternetConnection = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <FontAwesomeIcon icon={faFaceFrown} size={40} style={styles.icon} color={colors.grey} />
      <Text style={styles.text}>No internet connection</Text>
    </View>
  );
};

export default NoInternetConnection;
