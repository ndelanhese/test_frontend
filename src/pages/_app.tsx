import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import { theme } from "../styles/theme";
import { MenuDrawerProvider } from "../contexts/MenuDrawerContext";
function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <MenuDrawerProvider>
        <Component {...pageProps} />
      </MenuDrawerProvider>
    </ChakraProvider>
  );
}

export default MyApp;
