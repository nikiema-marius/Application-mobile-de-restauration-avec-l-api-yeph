import { View, Text } from 'react-native'
import React from 'react'
import { Divider } from 'react-native-elements'
import About from '../conponents/restaurantDetail/About'
import MenuItem from '../conponents/restaurantDetail/MenuItem'
import ViewCart from '../conponents/restaurantDetail/ViewCart'


export default function RestaurantDelai({ route, navigation }) {
  return (
    <View>
      <About route={route} />
      <Divider width={1.8} style={{marginVertical:20}}/>
      <MenuItem restaurantName={route.params.name} />
      <ViewCart navigation={navigation} restaurantName={
        route.params.name} />
    </View>
  );
}