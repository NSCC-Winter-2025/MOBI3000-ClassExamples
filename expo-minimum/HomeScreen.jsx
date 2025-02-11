import {Foundation} from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {StatusBar} from "expo-status-bar";
import {useContext, useState} from "react";
import {Button, Pressable, StyleSheet, Text, View} from "react-native";
import {saveSettings} from "./Settings";
import {SettingsContext} from "./SettingsProvider";

export const HomeScreen = ({navigation, onPressMeClick}) => {

  const {theme, setTheme, username, setUsername} = useContext(SettingsContext);

  const handleButtonPress = () => {
    // navigation.navigate('User');
    const newUsername = 'Brian';
    setUsername(newUsername);

    const newTheme = theme === "black" ? "white" : "black";
    setTheme(newTheme);

    const settings = {
      theme: newTheme,
      username: newUsername,
    };
    console.log(settings);
    saveSettings(settings);
  }

  const handleTextPress = () => {
    // setText("That's FAST!");
  }
  return (
    <View style={{...styles.container, backgroundColor: theme}}>
      <Pressable onPress={handleTextPress}>
        <Text style={styles.text}>FAST & FURIOUS!</Text>
      </Pressable>
      <View style={styles.view}>
        <Text style={{color: 'white', fontSize: 25}}>{`Hello, ${username}`}</Text>
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