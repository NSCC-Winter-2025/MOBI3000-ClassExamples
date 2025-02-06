import {Foundation} from "@expo/vector-icons";
import {StatusBar} from "expo-status-bar";
import {useState} from "react";
import {Button, Pressable, StyleSheet, Text, View} from "react-native";

export const HomeScreen = ({navigation}) => {
  const [text, setText] = useState('Hello World!');

  const handleButtonPress = () => {
    navigation.navigate('User');
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
  )
};


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