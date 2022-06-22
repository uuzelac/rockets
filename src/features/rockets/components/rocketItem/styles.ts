import { StyleSheet } from 'react-native';
import * as colors from '../../../../theme/colors';

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
    flex: 1,
    borderRadius: 10,
    aspectRatio: 1 / 1,
  },
  info: {
    marginStart: 20,
    flex: 2,
  },
  title: {
    fontSize: 24,
    marginBottom: 8,
    color: colors.black,
  },
  details: {
    color: colors.black,
  },
  activityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rocketActive: {
    marginStart: 10,
    marginTop: 1,
    width: 8,
    height: 8,
    backgroundColor: colors.green,
    borderRadius: 4,
  },
  rocketInactive: {
    marginStart: 10,
    marginTop: 1,
    width: 8,
    height: 8,
    backgroundColor: colors.red,
    borderRadius: 4,
  },
});

export default styles;
