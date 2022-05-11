import { View, Text } from 'react-native'
import React from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Iconicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function Searchbar({cityHandler} ) {
  return (
    <View style={{marginTop:15, flexDirection:"row"}}>
        <GooglePlacesAutocomplete //l'api de google apiplaces permet de donnee de sugestion dans la barre de recherche
        query={{
            key: "AIzaSyCHzVrm3N4VJaeR2viNQwkXpsKrOyjNeY4"
        }}
        onPress={(data, detail = null)=>{
            console.log(data.description);//recupere l'element selectionner dans la bar de recherche et afficher dans la console
            const city = data.description.split(',')[0] 
           cityHandler(city); // la on recupere l'element dans la bare de recherche et on change le pays 
        }}
        placeholder='Search' 
        styles={{
            textInput:{
                backgroundColor:'#eee',
                borderRadius:20,
                fontWeight:'700',
                marginTop:7,
            },
            textInputContainer:{
                backgroundColor:'#eee',
                borderRadius:50,
                flexDirection:"row",
                alignItems:'center',
                marginRight:10,
            },
        }}
        renderLeftButton={()=> (
            <View style={{marginLeft:10}}>
             <Iconicons name='location-sharp' size={24} />
           </View>
        )}
        renderRightButton={()=> (
             <View style={
                 {
                  flexDirection:"row",
                  backgroundColor:"white",
                  marginRight:8,
                  padding:9,
                  borderRadius:30,
                  alignItems:"center",
                 }
             }
             >
                 <AntDesign name='clockcircle'
                  size={11}
                  style={{marginRight:6}} />
                  <Text>Search</Text> 
              </View>
              )}
        />
    </View>
  )
}