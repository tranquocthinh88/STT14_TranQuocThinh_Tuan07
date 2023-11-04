import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
export default function ShopNear() {
    var [data, setData] = useState();
    useEffect(() => {
        fetch('https://653f48c19e8bd3be29e02959.mockapi.io/coffeShop')
            .then(response => response.json())
            .then(json => { setData(json); })
    }, [])
    console.log(data)
    return (
        <View style={styles.container} >
            <FlatList
                key='#'
                data={data}
                renderItem={({ item }) => (
                    <View style={styles.box}>
                        <Image source={{ uri: item.image }} style={styles.img}></Image>
                        <View>
                            <View style={{ flexDirection: 'row' }}>
                                <Image source={item.status ? require('../img/Image 178.png') : require('../img/Image 190.png')} style={{ width: 20, height: 20 }}></Image>
                                <Text style={{ color: item.status ? 'green' : 'red' }}>{item.status ? 'Accepting Orders' : 'Tempory Unavailable'}</Text>
                            </View>
                            <View>
                                <Image source={{ uri: item.image }}></Image>
                                <Text></Text>
                                <Image source={{ uri: item.image }}></Image>
                            </View>
                            <Text>{item.title}</Text>
                            <Text>{item.address}</Text>
                        </View>
                    </View>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    box: {
        height: 200,
        width: 350,
        //backgroundColor: 'red',
        marginBottom: 20,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },
    img: {
        width: '100%',
        height: '50%',
        borderRadius: 10
    }
})