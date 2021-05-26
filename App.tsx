import { StatusBar } from "expo-status-bar";
import React from "react";
import { Provider as StoreProvider } from "react-redux";
import { Provider as PaperProvider } from "react-native-paper";
import theme from "./src/utils/theme";
import { store } from "./src/store/store";
import NavContainer from './src/navigation/Navigator'
import SplashScreen from './src/components/UI/SplashScreen'

export default function App() {
  return (
    <StoreProvider store={store}>
      <PaperProvider theme={theme}>
        <StatusBar style="auto" />
        <SplashScreen />
        <NavContainer />
      </PaperProvider>
    </StoreProvider>
  );
}
