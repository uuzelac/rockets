import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface componentNameProps {}

const Rockets = (props: componentNameProps) => {
  return (
    <View style={styles.container}>
      <Text>Rockets</Text>
    </View>
  );
};

export default Rockets;

const styles = StyleSheet.create({
  container: {}
});
