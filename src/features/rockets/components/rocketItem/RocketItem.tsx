import * as React from 'react';
import { Text, View, Image } from 'react-native';
import { Lenght, Mass } from '../../../../redux/rockets/models';
import styles from './styles';
import { calculateMassInTones } from '../../../../utils/helper';

interface RocketItemProps {
  name: string;
  images: string[];
  height: Lenght;
  diameter: Lenght;
  mass: Mass;
  active: boolean;
}

const RocketItem = ({
  name,
  images,
  height,
  diameter,
  mass,
  active,
}: RocketItemProps): JSX.Element => {
  const renderActive = (active: boolean): JSX.Element => {
    return (
      <View style={styles.activityContainer}>
        <Text style={styles.details}>Active</Text>
        <View style={active ? styles.rocketActive : styles.rocketInactive} />
      </View>
    );
  };
  return (
    <View style={styles.containerWrapper}>
      <View style={styles.container}>
        <Image style={styles.image} source={{ uri: images[0] }} />
        <View style={styles.info}>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.details}>{`Height: ${height.meters} m`}</Text>
          <Text style={styles.details}>{`Diameter: ${diameter.meters} m`}</Text>
          <Text style={styles.details}>{`Mass: ${calculateMassInTones(mass.kg)} t`}</Text>
          {renderActive(active)}
        </View>
      </View>
    </View>
  );
};

export default RocketItem;
