import {createContext, useEffect, useState} from "react";
import {loadSettings} from "./Settings";

export const SettingsContext = createContext(null);

export const SettingsProvider = ({children}) => {

  const [theme, setTheme] = useState("black");
  const [username, setUsername] = useState("Default");

  useEffect(() => {
    loadSettings().then(settings => {
      setTheme(settings.theme);
      setUsername(settings.username);
    });
  }, []);

  return (
    <SettingsContext.Provider value={{theme, setTheme, username, setUsername}}>
      {children}
    </SettingsContext.Provider>
  )
}