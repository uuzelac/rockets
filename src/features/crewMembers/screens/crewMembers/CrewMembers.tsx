import React, { useEffect } from 'react';
import { ThunkDispatch } from 'redux-thunk';
import { Action } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import { Text, View, FlatList, ActivityIndicator } from 'react-native';
import { fetchCrewMembers } from '../../../../redux/crewMembers/modules';
import { getAllCrewMembers, isLoadingCrewMembers } from '../../../../redux/crewMembers/selectors';
import { isConnected } from '../../../../redux/appState/selectors';
import { RootReducerType } from '../../../../redux/types';
import CrewMemberItem from './components/CrewMemberItem';
import CrewMember from '../../../../redux/crewMembers/models/CrewMember';
import styles from './styles';
import * as colors from '../../../../theme/colors';
import NoInternetConnection from '../../../../components/noInternetConnection';

const CrewMembers = (): JSX.Element => {
  const dispatch = useDispatch<ThunkDispatch<RootReducerType, any, Action<any>>>();

  const members: CrewMember[] | null = useSelector(getAllCrewMembers);
  const isLoading: boolean = useSelector(isLoadingCrewMembers);
  const connection: boolean | null = useSelector(isConnected);

  useEffect(() => {
    dispatch(fetchCrewMembers());
  }, []);

  const renderItem = ({ item }: { item: CrewMember }): JSX.Element => (
    <CrewMemberItem name={item.name} image={item.image} id={item.id} />
  );

  const renderMembersList = (): JSX.Element => {
    if (!members && !connection) {
      return <NoInternetConnection />;
    }
    if (isLoading || !members) {
      return (
        <ActivityIndicator size="large" color={colors.black} style={styles.activityIndicator} />
      );
    }
    return (
      <FlatList
        style={styles.flatList}
        data={members}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.backgroundStyle} />
      <View style={styles.content}>
        <Text style={styles.title}>Crew Members</Text>
        {renderMembersList()}
      </View>
    </View>
  );
};

export default CrewMembers;
