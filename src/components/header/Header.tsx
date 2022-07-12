import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { Logo } from "./Logo";

export function Header() {
  return (
  <Box bg='gray.900' w='100%' p={4} color='white'>

<Logo/>

</Box>
  );
}
