import { View, Text,Image } from 'react-native'
import React from 'react'

const yelpRestaurantInfo = {
  name:"la cuisine a la main locale",
  image:'https://i.pinimg.com/564x/03/55/c9/0355c98664582ddd3963f251700583f5.jpg',
  price:'$$',
  reviews:"1500",
  rating:4.5,
  categories:[
    {title:"cote d'Ivoire"},
    {title:'Burkina Faso'},
    {title:'Le resto qui unifie'}
  ],
};



export default function About(props) {

  const {name,image,price,rating,reviews, categories} = 
  props.route.params ;

  const formaltedCategories = categories.map((cat)=>cat.title).join(' . ');
  
  const description = `${formaltedCategories} ${price ?" + "+ price:""}
  .♣. ${rating} ☻ (${reviews}+)`;
  

  return (
    <View>
      <RestaurantImage image={image} /> 
      <RestaurantName name={name}  /> 
      <RestaurantDescription description={description} /> 
    </View>
  );
}

const RestaurantImage =(props) => (
  <Image source={{uri: props.image }} 
  style={{
    width:'100%', 
    height:130,
  }} />
);

const RestaurantName =(props) =>(
  <Text
  style={{
    fontSize:29,
    fontWeight:"600",
    marginTop:10,
    marginHorizontal:15
  }}
  >
    
    {props.name}
  </Text>
);

const RestaurantDescription = (props) =><Text
style={{
  marginTop:10,
  marginHorizontal:15,
  fontWeight:"400",
  fontSize:15.5,

}}
>{props.description}</Text>
  
