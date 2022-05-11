import { View, Text,TouchableOpacity, Modal ,StyleSheet} from 'react-native'
import React,{useState} from 'react'
import { useSelector } from 'react-redux'

export default function ViewCart() { 

  const [modalVisible, setModalVisible] = useState(false);


  const items = useSelector((state)=> state.cartReducer.selectedItems.item )

  const total = items.map((item) => Number(item.price.replace("$", "")))
  .reduce((prev, curr)=> prev + curr, 0 );
  //'2.5'
  //'10.5'
  // Number['10.5'] = 10.5

  const totalUSD = total.toLocaleString("en-US", {
    style: 'currency',
    currency: "USD",
  });

  const styles = StyleSheet.create({
    modalContenaire:{
      flex:1,
      justifyContent:'flex-end',
      backgroundColor: "rgba(0,0,0,0.7)",
    },

    modalCheckoutContenair: {
      backgroundColor: 'white',
      padding:16,
      height:500,
      borderWidth:1,
    },
    modalCheckoutButton: {
      textAlign:'center',
      fontSize:"600",
      marginBottom:10,
      fontSize:18,
    },

    subtotalContenair:{
      flexDirection:'row',
      justifyContent:'space-between',
      marginTop:15
    },
    subtotalText :{
      textAlign:'left',
      fontWeight:"600",
      fontSize:15,
      marginBottom:10,
    },
  });

  console.log(totalUSD);

const checkoutModalContent = ()=>{
  return(
    <View style={{
      flex:1,
      justifyContent:'center',
      alignContent:'center',
      marginTop:30,
    }}>
      <View style={{
        backgroundColor: 'black',
        padding:10,
        borderRadius:30,
        width:150,
        alignItems:'center',
        justifyContent:'center'
      }}>
        <TouchableOpacity onPress={()=> setModalVisible(false) }  >
          <Text style={{color: "white"}} >Checkout</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
};


{/* <View style={styles.modalContenaire}>
<View style={styles.modalCheckoutContenair}>
   <Text style={styles.restaurantName} >{restaurantName}</Text>
</View>
</View> */}
  return (
  <>

  <Modal animationType='slide' visible={modalVisible}
      transparent={true}
      onRequestClose={()=>setModalVisible(false)}
  >
    {checkoutModalContent()}
    </Modal>
  {total ? (
      <View
      style={{
        flex:1,
        alignItems: 'center',
        flexDirection:'row',
        position:"absolute",
        justifyContent:"center",
        zIndex: 999,
    }}>

    <View style={{
            flexDirection:'row',
            justifyContent:"center",
            width:"100%",
        }}>
            <TouchableOpacity style={{
                marginTop: '15%',
                flexDirection:'row',
                backgroundColor:"black",
                alignItems:"center",
                justifyContent:'flex-end',
                padding:15,
                borderRadius:30,
                width:300,
                position:"relative"
            }}
            onPress={()=> setModalVisible(true)}
            >
                <Text style={{color:"white", fontSize:20, marginRight:60}}>ViewCart</Text>
                <Text style={{color:"white",fontSize:20}}>{totalUSD+'$$'}</Text>
          </TouchableOpacity>
        </View>
    </View>
    ) : (
       <></> 
     )}
    </>
  )
}