import { View, Text,Image , ScrollView } from 'react-native'
import React from 'react';

// const items = [
//     {
//         image: require('../src/images/shopping-bag.png'),
//         text:"Pick-up",
//     },
//     {
//         image: require("../src/images/bread.png"),
//         text: "Baskery Items",
//     },
//     {
//         image: require("../src/images/fast-food.png"),
//         text:"Fast Foods",
//     },
//     {
//         image: require("../src/images/soft-drink.png"),
//         text:"Soft Drinks",
//     },
//     {
//         image: require("../src/images/coffe.png"),
//         text:"Coffee & Tea",
//     },
//     {
//         image: require("../src/images/deals.png"),
//         text:"Deals",
//     },
//     {
//         image: require("../src/images/desserts.png"),
//         text:"Desserts",
//     },
// ];

export default function Categories() {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>

        <View style={{alignItems:"center",marginRight:30}}>

                <Image source={require('../../src/images/shopping-bag.png')}
                 style={{
                        width:50,
                        height:40,
                        resizeMode:'contain'
                    }}
                />
                <Text style={{fontSize:13, fontWeight:'900'}}>Pick-up </Text>
       </View>

       <View style={{alignItems:"center",marginRight:30}}>

                <Image source={require('../../src/images/bread.png')}
                 style={{
                        width:50,
                        height:40,
                        resizeMode:'contain'
                    }}
                />
                <Text style={{fontSize:13, fontWeight:'900'}}>Baskery </Text>
       </View>

       <View style={{alignItems:"center",marginRight:30}}>

                <Image source={require('../../src/images/fast-food.png')}
                 style={{
                        width:50,
                        height:40,
                        resizeMode:'contain'
                    }}
                />
                <Text style={{fontSize:13, fontWeight:'900'}}>Fast Foods </Text>
       </View>

       <View style={{alignItems:"center",marginRight:30}}>

                <Image source={require('../../src/images/soft-drink.png')}
                 style={{
                        width:50,
                        height:40,
                        resizeMode:'contain'
                    }}
                />
                <Text style={{fontSize:13, fontWeight:'900'}}>soft-drink </Text>
       </View>

       <View style={{alignItems:"center",marginRight:30}}>

                <Image source={require('../../src/images/splash.png')}
                 style={{
                        width:50,
                        height:40,
                        resizeMode:'contain'
                    }}
                />
                <Text style={{fontSize:13, fontWeight:'900'}}>coffe et the</Text>
       </View>

       <View style={{alignItems:"center",marginRight:30}}>

                <Image source={require('../../src/images/deals.png')}
                 style={{
                        width:50,
                        height:40,
                        resizeMode:'contain',
                    }}
                />
                <Text style={{fontSize:13, fontWeight:'900'}}>deals </Text>
       </View>
    </ScrollView>
  )
}