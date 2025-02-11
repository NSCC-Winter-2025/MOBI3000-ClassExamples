import AsyncStorage from "@react-native-async-storage/async-storage";

const defaultSettings = {
  theme: 'black',
  username: 'default',
};

export const loadSettings = async () => {
    const json = await AsyncStorage.getItem("settings");
    if (json !== null) {
      console.log(json);
      return JSON.parse(json);
    }
    return defaultSettings;
};

export const saveSettings = async (settings) => {
  await AsyncStorage.setItem("settings", JSON.stringify(settings));
}