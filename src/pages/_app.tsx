import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import { theme } from "../styles/theme";
import { MenuDrawerProvider } from "../contexts/MenuDrawerContext";
import { ModalProvider } from '../contexts/ModalDrawerConfirmation';
function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <MenuDrawerProvider>
        <ModalProvider>
        <Component {...pageProps} />
        </ModalProvider>
      </MenuDrawerProvider>
    </ChakraProvider>
  );
}

export default MyApp;
