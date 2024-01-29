/* eslint-disable prettier/prettier */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, StyleSheet, Button, Alert, TouchableOpacity } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Tab1" component={Tab1} options={{headerShown: false, tabBarLabel: 'Tab1'}} />
      <Tab.Screen name="Tab2" component={HomeScreen} options={{headerShown: false}} />
    </Tab.Navigator>
  );
};

const Tab1 = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'purple'}}>
      <Text style={{fontSize: 40, color: '#fff', fontWeight: 'bold'}}>Tab1</Text>
    </View>
  );
};

const HomeScreen = ({ navigation }): React.JSX.Element => {
  return (
    <View style={styles.homeContainer}>
      <Text style={styles.mainText}>Home Screen</Text>
      <Button title="Move to details screen" onPress={() => navigation.navigate('Details', {
        data: 'This is some data',
      })} />
    </View>
  );
};

const DetailScreen = ({route}): React.JSX.Element => {
  const { data } = route.params;

  return (
    <View style={styles.detailsContainer}>
      <Text style={styles.mainText}>Details Screen</Text>
      <Text style={{fontSize: 20, color: '#fff'}}>{data}</Text>
    </View>
  );
};

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen name="Home" component={HomeScreen} options={{
          headerShown: false,
          headerTitleStyle: {
            color: '#fff',
          },
          headerStyle: {
            backgroundColor: 'purple',
          },
          headerRight: () => <Button title="Tap here" onPress={() => Alert.alert("Hello")} />,
        }} />
        <Stack.Screen name="Details" component={DetailScreen} options={{
          headerRight: () => <TouchableOpacity onPress={() => Alert.alert("Info", "This is some info")}><Text style={{color: "crimson", fontSize: 15, fontWeight: "bold"}}>Show Info</Text></TouchableOpacity>
        }} />
        <Stack.Screen name="Main" component={MyTabs} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'teal',
  },
  detailsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'crimson',
  },
  mainText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default App;
