import { View, Text ,Image,TouchableOpacity} from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';



export const locaclRestaurant = [
    {
        name: "Beachside Bar",
        image_url:
          "https://static7.depositphotos.com/1021014/788/i/600/depositphotos_7887929-stock-photo-modern-restaurant.jpg",
        categories: ["cafe","Bar"],
        price:"$$",
        reviews: 2244,
        rating:4.7

        },

        {
            name: "benihana",
            image_url:
              "https://media-cdn.tripadvisor.com/media/photo-s/10/84/0c/4f/salle.jpg",
            categories: ["cafe","Bar"],
            price:"$$",
            reviews: 1244,
            rating:4.5
    
        },
       
        {
            name: " Laico Bar",
            image_url:
              "https://media-cdn.tripadvisor.com/media/photo-s/06/6a/d9/55/totem-restaurant-in-lillooet.jpg",
            categories: ["cafe","Bar"],
            price:"$$",
            reviews: 1544,
            rating:5.2
    
       },

       {
        name: "capuchino bar",
        image_url:
          "https://media-cdn.tripadvisor.com/media/photo-s/09/41/af/eb/restaurant-l-ecurie.jpg",
        categories: ["cafe","Bar"],
        price:"$$",
        reviews: 1204,
        rating:5.3

    },

];

export default function RestaurantItem({ navigation, ...props }) {// on va connecter une appli a l'api yelph pour recuperer les restaurent 
  return (
     <>
     {props.restaurantData.map((restaurant, index) => (
        <TouchableOpacity key={index} activeOpacity={0.5} style={{marginBottom:30}} 
           onPress={()=> navigation.navigate
          ('RestaurantDelai',{
            name: restaurant.name,
            image: restaurant.image_url,
            price: restaurant.price,
            rating : restaurant.rating,
            categories: restaurant.categories,
            reviews: restaurant.reviews,
          })
           } 
         >
          
            <View  
            style={{marginTop:10, padding:15, backgroundColor:"white"}}
            >
                <RestaurantImage image ={restaurant.image_url} /> 
                <RestaurantInfo  name={restaurant.name} rating={restaurant.rating}  />  
            </View>
        </TouchableOpacity>
      ))}
       
       </>
  );
}

 {/* <Text> fonction (render) qui appelle le component image (RestaurantImage)  </Text>*/}
const RestaurantImage = (props) =>(

    <>
    <Image source={{
     uri: props.image
    }}
        style={{ width: "100%", height: 180 }} />
        
        <TouchableOpacity style={{position: 'absolute', right:20,top:20}} >
            <MaterialCommunityIcons name="heart-outline" size={30} color="white"/>
        </TouchableOpacity>
        </>
);

 {/* <Text> fonction (render) qui appelle le component pour l'info image (RestaurantImage)  </Text>*/}
 
 const RestaurantInfo = (props) =>(
     <View style={{
         flexDirection:'row',
         justifyContent: 'space-between',
         alignItems:"center",
         marginTop:10,
     }}>
         <Text style={{
             fontSize:15,
             fontWeight:"bold"
         }}> {props.name} </Text>
         <Text style={{
             fontSize:13,
             color:"gray"
         }}> 30-50 . min</Text>
         <View style={{
             backgroundColor:'#eee',
             height:30,
             width:30,
             alignItems:'center',
             justifyContent:"center",
             borderRadius:15,
         }}>
           <Text >{props.rating}</Text>
         </View>
     </View>
 );