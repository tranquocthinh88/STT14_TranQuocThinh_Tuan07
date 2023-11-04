import { StyleSheet, Text, View, Image,TouchableOpacity,ScrollView, FlatList } from 'react-native';
import { useEffect, useState } from 'react';
import { AntDesign } from "@expo/vector-icons";

export default function ShopNear({navigation}) {

    const [data, setData] = useState();
    useEffect(() => {
        fetch('https://65426f70ad8044116ed35ecf.mockapi.io/shops')
            .then(response => response.json())
            .then(json => { setData(json); })
    }, [])
    console.log(data)

  return (
    <View style = {styles.container}>
        <View style={styles.top}>
            <AntDesign
            name="arrowleft"
            size={25}
            onPress={()=> navigation.goBack()}
            ></AntDesign>
            <Text style={{fontSize:30, fontFamily:"arial", fontWeight:700,}} >Shops Near Me</Text>
            <AntDesign
            name='search1'
            size={25}
            color="#1DD75B"
            ></AntDesign>
        </View>
       <ScrollView>
            <FlatList
                key='#'
                data = {data}
                renderItem={({item})=>(
                    <View style={styles.content}>
                        <TouchableOpacity style={{width:"100%", alignItems:"center", }} onPress={()=>navigation.push('Drinks',{data:item})} >
                            <Image source={{uri:item.img}} style={{width:"90%", height:100, borderRadius:10}} ></Image>
                        </TouchableOpacity>
                        <View style={{flexDirection:"row", justifyContent:"space-between", width:"90%", marginTop:8}}>
                            <View style={{flexDirection:"row",backgroundColor:"#D9D9D9",width:"50%" , height:30, alignItems:"center", }}>
                            <Image source={item.status? require('../img/Image 178.png'):require('../img/Image 190.png')} style={{width:20, height:20}} ></Image>
                            <Text style={{color: item.status? "green":"red", marginLeft:8}} >{item.status ? 'Accepting Orders':'Tempory Unavailable'}</Text>
                            </View>
                            <View style={{flexDirection:"row",backgroundColor:"#D9D9D9", width:"40%", height:30, alignItems:"center", justifyContent:"space-evenly"}}>
                            <Image source={require('../img/Image 180.png')} style={{width:20, height:20}} ></Image>
                            <Text style={{color:"red"}}>5-10 minutes</Text>
                            </View>
                            <Image source={require('../img/Image 181.png')} 
                            style={{width:20, height:26,alignItems:"center", justifyContent:"space-evenly"}} ></Image>
                          
                        </View>
                        <View style={{width:"90%",marginTop:8}}>
                                <Text style={{fontSize:15, fontFamily:"arial", fontWeight:700,}}>{item.name}</Text>
                            </View>
                            <View style={{width:"90%",marginTop:8}}>
                                <Text style={{fontSize:13, fontFamily:"arial", fontWeight:700,color:"grey"}}>{item.address}</Text>
                            </View>
                    </View>
                   
                )}

            ></FlatList>
       </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'space-evenly',
  },
  top:{
    flexDirection:"row",
   justifyContent:"space-between",
   marginTop:20,
   width:"95%"

  },
  btn:{
    backgroundColor:"#00BDD6",
    height:45,
    borderRadius:8,
    alignItems:"center",
    justifyContent:"center"
  }, content:{
    alignItems:"center",
    justifyContent:"space-between",
    marginTop:20,
    lineHeight:22,
    width:400,
    
  }
});
