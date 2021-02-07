/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
// Screen
import HomeScreen from './app/screen/home/HomeScreen';
import SearchScreen from './app/screen/search/SearchScreen';
import ShoppingCartScreen from './app/screen/shopping_cart/ShoppingCartScreen';
import FavScreen from './app/screen/fav/FavScreen';
import ProfileScreen from './app/screen/profile/ProfileScreen';

const App: React.FC = () => {
  const BottomTab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <BottomTab.Navigator
        initialRouteName="HomeScreen"
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}>
        <BottomTab.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            tabBarLabel: 'HOME',
            tabBarIcon: ({color, size}) => (
              <Ionicons name="home" color={color} size={size} />
            ),
          }}
        />
        <BottomTab.Screen name="SearchScreen" component={SearchScreen} />
        <BottomTab.Screen
          name="ShoppingCartScreen"
          component={ShoppingCartScreen}
        />
        <BottomTab.Screen name="FavScreen" component={FavScreen} />
        <BottomTab.Screen name="ProfileScreen" component={ProfileScreen} />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
};

export default App;
