import {useEffect} from 'react';
import {useFonts} from "expo-font";
import * as SplashScreen from 'expo-splash-screen';
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreen} from "./HomeScreen";
import {UserScreen} from "./UserScreen";
import {Ionicons, Fontisto} from "@expo/vector-icons";

SplashScreen.preventAutoHideAsync();

// const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {

   const [loaded, error] = useFonts({
    'Designer': require('./assets/fonts/Designer.otf'),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!error && !loaded) return null;

  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home" id="stack">
        <Tab.Screen name="Home" component={HomeScreen}
                    options={{
                      tabBarLabel: 'Main',
                      tabBarIcon: ({color, size, focused}) => {
                        if (focused) {
                          return <Ionicons name="home" size={size} color={color} />
                        } else {
                          return <Ionicons name="home-outline" size={size} color={color}/>
                        }
                      }
        }} />
        <Tab.Screen name="User" component={UserScreen}
                    options={{
                      tabBarLabel: 'Profile',
                      tabBarIcon: ({color, size, focused}) => {
                        if (focused) {
                          return <Ionicons name="beer" size={size} color={color} />
                        } else {
                          return <Ionicons name="beer-outline" size={size} color={color}/>
                        }
                      }
        }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
