import { StyleSheet } from 'react-native';
import * as colors from '../../../../theme/colors';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('screen');

const styles = StyleSheet.create({
  backgroundStyle: {
    position: 'absolute',
    height: height / 3,
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: colors.yellow,
    flex: 1,
    borderBottomLeftRadius: width,
    borderBottomRightRadius: width,
    transform: [{ scaleX: 1.5 }],
  },
  container: {
    flex: 1,
  },
  title: {
    fontSize: 48,
    color: colors.black,
    marginStart: 40,
    marginEnd: 40,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  content: {
    paddingTop: 88,
    flex: 1,
  },
  activityIndicator: {
    flex: 1,
  },
  flatList: {
    paddingStart: 20,
    paddingEnd: 20,
  },
});

export default styles;
