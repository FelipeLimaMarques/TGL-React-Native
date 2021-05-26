import { DefaultTheme, configureFonts } from "react-native-paper";
import { CANE, LIGHT_GRAY } from "./colors";

const fontsConfig = {
  web: {
    regular: {
      fontFamily: "sans-serif",
      fontStyle: "italic",
    },
    medium: {
      fontFamily: "sans-serif-medium",
      fontStyle: "italic",
    },
    light: {
      fontFamily: "sans-serif-light",
      fontStyle: "italic",
    },
    thin: {
      fontFamily: "sans-serif-thin",
      fontStyle: "italic",
    },
  },
  ios: {
    regular: {
      fontFamily: "sans-serif",
      fontStyle: "italic",
    },
    medium: {
      fontFamily: "sans-serif-medium",
      fontStyle: "italic",
    },
    light: {
      fontFamily: "sans-serif-light",
      fontStyle: "italic",
    },
    thin: {
      fontFamily: "sans-serif-thin",
      fontStyle: "italic",
    },
  },
  android: {
    regular: {
      fontFamily: "sans-serif",
      fontStyle: "italic",
    },
    medium: {
      fontFamily: "sans-serif-medium",
      fontStyle: "italic",
    },
    light: {
      fontFamily: "sans-serif-light",
      fontStyle: "italic",
    },
    thin: {
      fontFamily: "sans-serif-thin",
      fontStyle: "italic",
    },
  },
};

const theme = {
  ...DefaultTheme,
  fonts: configureFonts(fontsConfig),
  colors: {
    ...DefaultTheme.colors,
    primary: CANE,
    text: LIGHT_GRAY,
    placeholder: LIGHT_GRAY,
  },
};

export default theme;