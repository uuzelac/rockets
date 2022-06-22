import { StyleSheet } from 'react-native';
import * as colors from '../../../../../theme/colors';

const styles = StyleSheet.create({
  containerWrapper: {
    padding: 20,
    backgroundColor: colors.white,
    borderRadius: 20,
    marginVertical: 8,
    shadowColor: colors.grey,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.5,
    shadowRadius: 8,
    elevation: 4,
  },
  container: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
  },
  image: {
    height: 56,
    width: 56,
    borderRadius: 28,
  },
  info: {
    marginTop: 4,
    marginStart: 20,
    flex: 8,
  },
  arrowContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    marginBottom: 8,
    color: colors.black,
  },
  details: {
    color: colors.black,
  },
});

export default styles;
