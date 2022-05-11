import { View, Text ,SafeAreaView,ScrollView} from 'react-native'
import Heardertabs from "../conponents/home/HeaderTabs"
import SearchBar from '../conponents/home/Searchbar';
import Categories from '../conponents/home/Categories';
import RestaurantItem,{locaclRestaurant} from '../conponents/home/RestaurantItem';
import React,{useEffect,useState} from 'react';
import { Divider } from 'react-native-elements';
import BottomTabs from '../conponents/home/BottomTabs';


const YELPH_API_KEY ="hl6P-is6plNHsNSduD6HYu2RUEpOczKYY3uz9a3T8wvvMjLe3eRLX8dyVqY-TzaKVLOrVTuH-XoP_tWtQ0UBNGN78Laxh5BL1GgGuTnN2DEtV7BW1HfVBVJz5WREYnYx";


export default function Home({ navigation }) {
    const [restaurantData, setRestaurantData] = useState([locaclRestaurant])// par default on recupere les donnees de restarant dans le restaurentitem
    const [city,setCity] = useState("Hollywood")//on changera le pays avec les recherche effectué dans la barre de recheche
    const [activeTab,setActiveTab] = useState('Delivery');

    const getRestaurantsFromYelp= () => {// le lien de mon compte sur yelp.com
    const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurant&location=${city}`;
 
    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELPH_API_KEY}`,//autorisation de la clé
      }, 
    };
      return fetch(yelpUrl, apiOptions)//parcours les resultat donnnés par l'api
      .then((response) => response.json())
      .then(json =>setRestaurantData(
              json.businesses.filter((businesses)=>
              businesses.transactions.includes(activeTab.toLowerCase())  
              )
           )
          );
       
  };
  useEffect(()=>{
    getRestaurantsFromYelp();//on execute normalent cette fonction avec comme pys city=Hollwood
  }, [city, activeTab]);// ici le hood change alors on excute avec city=setcity

 
  return (
    <SafeAreaView style={{backgroundColor:"#eee", flex:1 }}>
    <View style={{backgroundColor: "white",padding:15}}>
        <Heardertabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <SearchBar cityHandler={setCity}/>
    </View>
    <ScrollView showsVerticalScrollIndicator={false} >
       <Categories /> 
       <RestaurantItem  
       restaurantData={restaurantData} 
       navigation={ navigation } />
        
    </ScrollView>
    <Divider width={1}/>
    <BottomTabs/>
    </SafeAreaView>
  );
}