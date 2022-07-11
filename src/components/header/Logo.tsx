import { Flex, Text } from "@chakra-ui/react";
import React from "react";

export function Logo() {
  return (
    <Flex bg="gray.900" color="white" w={8} h={31}>
      <Text as={"span"}>
        e
        <Text as={"span"} color={"green.100"}>
          /
        </Text>
        code
      </Text>
    </Flex>
  );
}
