import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import { theme } from "../styles/theme";
import { MenuDrawerProvider } from "../contexts/MenuDrawerContext";
import {QueryClient, QueryClientProvider} from 'react-query'

const queryClient = new QueryClient()


function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
    <ChakraProvider theme={theme}>
      <MenuDrawerProvider>
    
        <Component {...pageProps} />
       
      </MenuDrawerProvider>
    </ChakraProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
