import React, { useEffect } from 'react';
import { Text, View, Image, TouchableOpacity, AppState, Platform } from 'react-native';
import { useSelector } from 'react-redux';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import styles from './styles';
import * as colors from '../../../../../theme/colors';
import { useNavigation } from '@react-navigation/native';
import * as ROUTE_NAMES from '../../../../../navigation/routeNames';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../../navigation/types';
import { handlePermissionsIOS, handlePermissions } from '../../../../../utils/permissions';
import { getAppState } from '../../../../../redux/appState/selectors';

interface CrewMemberItemProps {
  name: string;
  image: string;
  id: string;
}

const CrewMemberItem = ({ name, image, id }: CrewMemberItemProps): JSX.Element => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const appState = useSelector(getAppState);

  const onItemPress = (id: string): void => {
    handlePermissions(appState, navigateToPage);
  };

  const navigateToPage = (): void => {
    navigation.navigate(ROUTE_NAMES.CREW_MEMBER_DETAILS, {
      id,
    });
  }

  return (
    <TouchableOpacity onPress={() => onItemPress(id)}>
      <View style={styles.containerWrapper}>
        <View style={styles.container}>
          <Image style={styles.image} source={{ uri: image }} />
          <View style={styles.info}>
            <Text style={styles.title}>{name}</Text>
          </View>
          <View style={styles.arrowContainer}>
            <FontAwesomeIcon icon={faAngleRight} color={colors.black} />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CrewMemberItem;
