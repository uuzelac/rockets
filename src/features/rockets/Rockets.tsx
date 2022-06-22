import React, { useEffect } from 'react';
import { ThunkDispatch } from 'redux-thunk';
import { Action } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import { Text, View, FlatList, Dimensions, ActivityIndicator } from 'react-native';
import { fetchRockets } from '../../redux/rockets/modules';
import { getAllRockets, isLoadingRockets } from '../../redux/rockets/selectors';
import { isConnected } from '../../redux/appState/selectors';
import { RootReducerType } from '../../redux/types';
import RocketItem from './components/rocketItem';
import { Rocket } from '../../redux/rockets/models';
import styles from './styles';
import * as colors from '../../theme/colors';
import NoInternetConnection from '../../components/noInternetConnection';

const Rockets = (): JSX.Element => {
  const dispatch = useDispatch<ThunkDispatch<RootReducerType, any, Action<any>>>();

  const rockets: Rocket[] | null = useSelector(getAllRockets);
  const isLoading: boolean = useSelector(isLoadingRockets);
  const connection: boolean | null = useSelector(isConnected);

  useEffect(() => {
    dispatch(fetchRockets());
  }, []);

  const renderItem = ({ item }: { item: Rocket }): JSX.Element => (
    <RocketItem
      name={item.name}
      images={item.flickrImages}
      height={item.height}
      diameter={item.diameter}
      mass={item.mass}
      active={item.active}
    />
  );

  const renderRocketsList = (): JSX.Element => {
    if (!rockets && !connection) {
      return <NoInternetConnection />;
    }
    if (isLoading || !rockets) {
      return (
        <ActivityIndicator size="large" color={colors.black} style={styles.activityIndicator} />
      );
    }
    return (
      <FlatList
        style={styles.flatList}
        data={rockets}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.backgroundStyle} />
      <View style={styles.content}>
        <Text style={styles.title}>Rockets</Text>
        {renderRocketsList()}
      </View>
    </View>
  );
};

export default Rockets;
