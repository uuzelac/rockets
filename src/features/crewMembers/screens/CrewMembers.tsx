import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface componentNameProps {}

const CrewMembers = (props: componentNameProps) => {
  return (
    <View style={styles.container}>
      <Text>CrewMembers</Text>
    </View>
  );
};

export default CrewMembers;

const styles = StyleSheet.create({
  container: {}
});
