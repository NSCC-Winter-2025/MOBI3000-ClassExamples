import {useEffect, useState} from 'react';
import {useFonts} from "expo-font";
import { StatusBar } from 'expo-status-bar';
import {Button, Pressable, StyleSheet, Text, View} from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import {Foundation} from "@expo/vector-icons";

SplashScreen.preventAutoHideAsync();

export default function App() {

  const [text, setText] = useState('Hello World!');

  const [loaded, error] = useFonts({
    'Designer': require('./assets/fonts/Designer.otf'),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!error && !loaded) return null;

  const handleButtonPress = () => {
    setText('You pressed the button!');
  }

  const handleTextPress = () => {
    setText("That's FAST!");
  }

  return (
    <View style={styles.container}>
      <Pressable onPress={handleTextPress}>
        <Text style={styles.text}>FAST & FURIOUS!</Text>
      </Pressable>
      <View style={styles.view}>
        <Text style={{color: 'white', fontSize: 25}}>{text}</Text>
        <Foundation name="bitcoin" size={75} color="white" />
      </View>
      <Button title="Press ME!" onPress={handleButtonPress} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontFamily: 'Designer',
    color: 'red',
    fontSize: 50
  },
  view: {
    backgroundColor: '#00f',
    height: 200,
    width: 200,
    borderWidth: 5,
    borderColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  }
});