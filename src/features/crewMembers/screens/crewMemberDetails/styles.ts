import { StyleSheet } from 'react-native';
import * as colors from '../../../../theme/colors';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundContainer: {
    height: height / 4,
  },
  backgroundStyle: {
    height: height / 4,
    backgroundColor: colors.yellow,
    flex: 1,
    borderBottomLeftRadius: width,
    borderBottomRightRadius: width,
    transform: [{ scaleX: 1.5 }, { translateX: 20 }],
  },
  headerContainer: {
    height: 120,
    start: 0,
    end: 0,
    flex: 1,
    position: 'absolute',
    justifyContent: 'flex-end',
    alignContent: 'flex-end',
    padding: 20,
  },
  infoContainer: {
    flex: 1,
    padding: 16,
  },
  imageContainer: {
    flexDirection: 'row',
  },
  imageWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
  },
  image: {
    width: 96,
    height: 96,
    borderRadius: 48,
  },
  nameContainer: {
    flex: 2,
    justifyContent: 'center',
    padding: 8,
  },
  name: {
    fontSize: 36,
    color: colors.black,
  },
  detailsContainer: {
    padding: 16,
  },
  singleInfoContainer: {
    marginBottom: 24,
  },
  singleInfoLabel: {
    fontSize: 20,
    marginBottom: 8,
    fontWeight: 'bold',
    color: colors.black,
  },
  singleInfo: {
    fontSize: 16,
    color: colors.black,
  },
  singleInfoLink: {
    fontSize: 16,
    color: colors.blue,
  },
});

export default styles;
