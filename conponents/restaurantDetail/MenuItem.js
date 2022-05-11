import { View, Text,StyleSheet ,Image,ScrollView} from 'react-native'
import React from 'react'
import { Divider } from 'react-native-elements';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { useDispatch, useSelector } from 'react-redux';


 const foods = [
     {
         title: "Lasagna",
         image:"https://www.thewholesomedish.com/wp-content/uploads/2018/07/Best-Lasagna-550-500x375.jpg",
         price: "$13.50",
         description:"avec beaucoup de laitteue, et de tomate et la sauce "
     },

     {
         title: "stek",
         image:"https://media-cdn.tripadvisor.com/media/photo-s/09/c5/7c/b4/stek.jpg",
         price: "$25.50",
         description:"avec beaucoup de laitteue, et de tomate et la sauce "
     },
     {
         title: "Omar",
         image:"https://media-cdn.tripadvisor.com/media/photo-s/12/1a/30/9f/best-fresh-sea-food-in.jpg",
         price: "$3.50",
         description:"avec beaucoup de laitteue, et de tomate et la sauce "
     },
     {
         title: "Tô",
         image:"https://i.pinimg.com/564x/03/55/c9/0355c98664582ddd3963f251700583f5.jpg",
         price: "$20 .50",
         description:"avec beaucoup de laitteue, et de tomate et la sauce "
     },
     {
         title: "foutou avec la viande d'escargot",
         image:"https://cuisinedecheznous.net/wp-content/uploads/2021/05/165458566_924393805043901_5391106343695105835_n.jpg",
         price: "$20 .50",
         description:"avec beaucoup de laitteue, et de tomate et la sauce "
     },
     {
         title: "choutoumou de la ville de bobo",
         image:"https://burkinatourism.com/local/cache-vignettes/L516xH398/chenilles-9b22d.jpg?1640179216",
         price: "$20 .50",
         description:"avec beaucoup de laitteue, et de tomate et la sauce "
     },
     {
         title: "Placali avec du pnaulo",
         image:"https://i0.wp.com/www.ivorianfood.com/wp-content/uploads/2016/04/DSC_0022.jpg?resize=525%2C300&ssl=1",
         price: "$20 .50",
         description:"avec beaucoup de laitteue, et de tomate et la sauce "
     },
     {
         title: "Placali avec du pnaulo",
         image:"https://i0.wp.com/www.ivorianfood.com/wp-content/uploads/2016/04/DSC_0022.jpg?resize=525%2C300&ssl=1",
         price: "$20 .50",
         description:"avec beaucoup de laitteue, et de tomate et la sauce "
     },
     {
         title: "Placali avec du pnaulo",
         image:"https://i0.wp.com/www.ivorianfood.com/wp-content/uploads/2016/04/DSC_0022.jpg?resize=525%2C300&ssl=1",
         price: "$20 .50",
         description:"avec beaucoup de laitteue, et de tomate et la sauce "
      }, 
 
     // il ya deux element qui ne s'affiche pas 
];




const styles = StyleSheet.create({
    menuItemStyle:{
        flexDirection:'row',
        justifyContent: 'space-between',
        margin:20,
    }, 
    
    titleStyle:{
        fontSize:19,
        fontWeight:"600"
    }
})

export default function MenuItem({ restaurantName }) {
    const dispatch = useDispatch();//
    
    const selectedItem = (item,checkboxValue)=> //
    dispatch({
    type: "ADD_TO_CART",
    payload: {...item,
        restaurantName: restaurantName,//recuperation du nom du restaurant cocher
        checkboxValue: checkboxValue,// recuperation de la selection
    }//
  });


  const cartItems = useSelector(
      (state) => state.cartReducer.selectedItems.item 
  );


  const isFoodInCart = (foods, cartItems) => 
      Boolean(cartItems.find((item)=> item.title === foods.title));
  

  return (
    <ScrollView showsVerticalScrollIndicator={true} >
    {foods.map((foodmap, index) => (
        <View key={index}>
            <View style={styles.menuItemStyle}>
                <BouncyCheckbox 
                iconStyle={{borderColor: "lightgray", borderRadius:1 }}
                fillColor="green"
                onPress={(checkboxValue) => selectedItem(foodmap,checkboxValue)} 
                isChecked={isFoodInCart(foodmap, cartItems)}
                />
                <FoodInfo food={foodmap} /> 
                <FoodImage food={foodmap} /> 
            </View>
            <Divider width={0.5} 
            orientation="vertical"
            style={{marginHorizontal:28}}  />
        </View>
        
    ))}
    </ScrollView>
  );
}

const FoodInfo = (props)=>(
    <View style={{
        width:140,
        justifyContent:'space-evenly'
    }} >
        <Text style={styles.titleStyle} >{props.food.title} </Text>
        <Text >{props.food.description} </Text>
        <Text>{props.food.price} </Text>
    </View>
)


const FoodImage = (props)=>(
    <Image
    source={{uri:props.food.image}}
    style={{
        width:100,
        height:90,
        borderRadius:8
    }}
    />
)