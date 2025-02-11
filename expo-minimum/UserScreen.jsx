import {useContext} from "react";
import {Button, StyleSheet, Text, View} from "react-native";
import {SettingsContext} from "./SettingsProvider";

export const UserScreen = ({navigation}) => {

  const {theme, setTheme, username, setUsername} = useContext(SettingsContext);

  const handleButtonPress = () => {
    navigation.navigate('Home');
  };
  return (
    <View style={{...styles.container, backgroundColor: theme}}>
      <Text style={styles.text}>{`${username} Profile`}</Text>
      <Button onPress={handleButtonPress} title="Go Home" />
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5555a8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
    color: 'white',
  }
});