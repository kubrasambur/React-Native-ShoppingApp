import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Detail from './pages/Detail/Detail';
import Products from './pages/Products/Products';
import Home from './pages/Home/Home';
import Electronics from './pages/Categories/Electronics';
import Women from './pages/Categories/Women';
import Man from './pages/Categories/Man';
import Jewelry from './pages/Categories/Jewelry';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomePage"
          component={Home}
          options={{
            title: 'Home',
            headerStyle: {backgroundColor: '#000080'},
            headerTitleStyle: {color: 'white'},
          }}
        />
        <Stack.Screen
          name="ElectronicsPage"
          component={Electronics}
          options={{
            title: 'Electronics',
            headerStyle: {backgroundColor: '#000080'},
            headerTitleStyle: {color: 'white'},
            headerTintColor: 'white',
          }}
        />
        <Stack.Screen
          name="Women"
          component={Women}
          options={{
            title: "Women's Clothing",
            headerStyle: {backgroundColor: '#000080'},
            headerTitleStyle: {color: 'white'},
            headerTintColor: 'white',
          }}
        />
        <Stack.Screen
          name="Man"
          component={Man}
          options={{
            title: "Man's Clothing",
            headerStyle: {backgroundColor: '#000080'},
            headerTitleStyle: {color: 'white'},
            headerTintColor: 'white',
          }}
        />
        <Stack.Screen
          name="Jewelry"
          component={Jewelry}
          options={{
            title: 'Jewelry',
            headerStyle: {backgroundColor: '#000080'},
            headerTitleStyle: {color: 'white'},
            headerTintColor: 'white',
          }}
        />
        <Stack.Screen
          name="ProductPage"
          component={Products}
          options={{
            title: 'Products',
            headerStyle: {backgroundColor: '#000080'},
            headerTitleStyle: {color: 'white'},
            headerTintColor: 'white',
          }}
        />
        <Stack.Screen
          name="DetailPage"
          component={Detail}
          options={{
            title: 'Detail',
            headerStyle: {backgroundColor: '#000080'},
            headerTitleStyle: {color: 'white'},
            headerTintColor: 'white',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;

const styles = StyleSheet.create({});
