import * as React from 'react';
import { Text, View, Image, TouchableOpacity, Linking, Alert } from 'react-native';
import { useSelector } from 'react-redux';
import styles from './styles';
import { NavProps } from '../../../../navigation/types';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import * as colors from '../../../../theme/colors';
import { getCrewMemberById } from '../../../../redux/crewMembers/selectors';
import { RootReducerType } from '../../../../redux/types';
import CrewMember from '../../../../redux/crewMembers/models/CrewMember';

const CrewMemberDetails = ({ route, navigation }: NavProps): JSX.Element => {
  const { id } = route.params!;
  const crewMember: CrewMember | undefined = useSelector((state: RootReducerType) =>
    getCrewMemberById(state, id)
  );
  const { name, agency, image, status, wikipedia } = crewMember!;

  const openLink = (link: string): void => {
    Linking.canOpenURL(link).then((supported) => {
      if (supported) {
        Linking.openURL(link);
      } else {
        Alert.alert(`Don't know how to open URI: ${link}`);
      }
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.backgroundContainer}>
        <View style={styles.backgroundStyle} />
        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={navigation.goBack}>
            <FontAwesomeIcon icon={faAngleLeft} color={colors.black} size={32} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.imageContainer}>
          <View style={styles.imageWrapper}>
            <Image style={styles.image} source={{ uri: image }} />
          </View>
          <View style={styles.nameContainer}>
            <Text style={styles.name}>{name}</Text>
          </View>
        </View>
        <View style={styles.detailsContainer}>
          <View style={styles.singleInfoContainer}>
            <Text style={styles.singleInfoLabel}>AGENCY</Text>
            <Text style={styles.singleInfo}>{agency}</Text>
          </View>
          <View style={styles.singleInfoContainer}>
            <Text style={styles.singleInfoLabel}>STATUS</Text>
            <Text style={styles.singleInfo}>{status}</Text>
          </View>
          <View style={styles.singleInfoContainer}>
            <Text style={styles.singleInfoLabel}>LINK</Text>
            <TouchableOpacity onPress={() => openLink(wikipedia)}>
              <Text style={styles.singleInfoLink}>{wikipedia}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CrewMemberDetails;
