import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import { Logo } from "./Logo";

export function Header() {
  return (
   <Flex 
   as="header"
   w="100%"
   maxWidth={1480}
   h="20"
   mx="auto"
   mt="3"
   px={["4", "4","6"]}
   align="center"
   >
<Logo/>

   </Flex>
  );
}
