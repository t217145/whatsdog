import * as React from 'react';
import { View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/AntDesign';
import ListScreen from './ListScreen';
import FormScreen from './FormScreen';
import DrawScreen from './DrawScreen';
import { navigationRef } from './RootNavigation';
import * as RootNavigation from './RootNavigation';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator 
        mode="modal"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen name="Draw" component={DrawScreen} 
          options={{
            headerRight: () => (
              <View style={{ flexDirection: 'row', justifyContent: 'space-between'}} >
                <Icon name="bars" size={30} style={{marginRight: 20, }} color="#fff" onPress={() => {RootNavigation.navigate('List')}}/>
                <Icon name="pluscircle" size={30} style={{marginRight: 10, }} color="#fff" onPress={() => {RootNavigation.navigate('Form', {isNew : true})}}/>
              </View>
            ),
          }}
        />        
        <Stack.Screen name="List" component={ListScreen} 
          options={{
            headerRight: () => (
              <View style={{ flexDirection: 'row', justifyContent: 'space-between'}} >
                <Icon name="home" size={30} style={{marginRight: 20, }} color="#fff" onPress={() => {RootNavigation.navigate('Draw')}}/>
                <Icon name="pluscircle" size={30} style={{marginRight: 10, }} color="#fff" onPress={() => {RootNavigation.navigate('Form', {isNew : true})}}/>
              </View>
            ),
          }}
        />
        <Stack.Screen name="Form" component={FormScreen} />      
      </Stack.Navigator>
    </NavigationContainer>
  );
}