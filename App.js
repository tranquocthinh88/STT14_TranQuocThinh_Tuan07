import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/HomeScreen';
import ShopNear from './src/ShopNear';
import Drinks from './src/Drinks';
import Orders from './src/Orders';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
        <Stack.Screen name="ShopNear" component={ShopNear} options={{headerShown: false}} />
        <Stack.Screen name="Drinks" component={Drinks} options={{headerShown: false}}/>
        <Stack.Screen name="Orders" component={Orders} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}