import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from 'react-native';
export default function HomeScreen({ navigation }) {
    var [data, setData] = useState();
    useEffect(() => {
        fetch('https://653f48c19e8bd3be29e02959.mockapi.io/coffeImg')
        .then(response => response.json())
        .then(json => { setData(json); })
    }, [])

    
    return (
        <View style={styles.container}>
            <Text style={{fontWeight: 'bold', marginTop: 50, fontSize: 25}}>Welcome to Cafe world</Text>
            <FlatList
                key='#'
                data={data}
                renderItem={({ item }) => (

                    <Image source={{
                        uri: item.image,
                    }} style={styles.img}></Image>

                )}
                keyExtractor={item => item.id}

            />
            <TouchableOpacity style={styles.btn} onPress={() => {navigation.navigate('ShopNear')}}>
                <Text style={styles.txtBtn}>GET STARTED</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    img: {
        marginTop: 50,
        width: 200,
        height: 80,
        borderRadius: 10,

    },
    btn: {
        width: '80%',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 40,
        backgroundColor: '#00BDD6'
    },
    txtBtn: {
        fontSize: 15,
        color: '#fff'
    }

});