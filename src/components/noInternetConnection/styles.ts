import { StyleSheet } from 'react-native';
import * as colors from '../../theme/colors'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    marginBottom: 16,
  },
  text: {
    color: colors.grey,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default styles;
