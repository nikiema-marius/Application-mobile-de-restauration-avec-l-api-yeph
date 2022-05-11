import 'react-native-gesture-handler';
import { View, Text } from 'react-native'
import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from "./screens/home";
import RestaurantDelai from './screens/RestaurantDelai';
import { Provider as ReduxProvider } from "react-redux"
import configureStore from './redux/store';


 const store = configureStore();

 export default function navigation() {
     const Stack = createNativeStackNavigator();
     const screenOptions = {
         hearderShown: false,
     };
   return (
     <ReduxProvider store={store} >
     <NavigationContainer>
         <Stack.Navigator 
         initialRouteName="Home" 
         screenOptions={screenOptions} 
     >
             <Stack.Screen name='Home' component={Home} />
             <Stack.Screen name='RestaurantDelai' component={RestaurantDelai} />
         </Stack.Navigator>
     </NavigationContainer>
     </ReduxProvider>
   )
 }