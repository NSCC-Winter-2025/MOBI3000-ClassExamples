import {Button, StyleSheet, Text, View} from "react-native";


export const UserScreen = ({navigation}) => {
  const handleButtonPress = () => {
    navigation.navigate('Home');
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>The User Screen</Text>
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