import * as React from 'react';
import { View, FlatList, Button } from 'react-native';
import Constants from 'expo-constants';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Icon, ListItem } from "react-native-elements";
import styles from './CustomStyle';

export default function ListScreen({ navigation, route }) {
  const [dataSource, setDataSource] = React.useState([]);

  React.useEffect(() => {
    fetch('https://lunchapps-api.azurewebsites.net/api/restaurants', {
      method: 'GET'
    })
    .then((response) => response.json())
    .then((responseJson) => {
        console.log(responseJson);
        setDataSource(responseJson);
    })
    .catch((error) => {
        console.error(error);
    });
  }, [route.params?.isRefresh]);

  return (
    <View style={styles.container}>
      <FlatList
        data={dataSource}
        renderItem={({ item }) => (
          <ListItem
            roundAvatar
            title={item.rName}
            subtitle={item.rAddr} 
            onPress={() => navigation.navigate('Form', { obj: item, isRefresh: ((route.params?.isRefresh || false) ? false : true) }) }
            bottomDivider chevron
            leftIcon={{ name:"restaurant" }}
          />
        )} />
    </View>
  );
}