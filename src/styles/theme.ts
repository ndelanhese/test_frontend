import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  style: {
    global: {
      body: {
        bg: "gray.50",
        color: "black",
      },
    },
  },
  fonts: {
    heading: 'Raleway',
    body: 'Raleway'
  },
  colors: {
    transparent: "transparent",
    black: "#000",
    white: "#fff",
    gray: {
      50: "#E5E5E5",
      900: "#101010",
    },
    green: {
        100: '#33CC00',
    },
  },
});
