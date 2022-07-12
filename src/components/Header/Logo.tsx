import { Flex, Stack, Text, useBreakpointValue } from "@chakra-ui/react";
import React from "react";

export function Logo() {
  const isWideVersion = useBreakpointValue({
    base: true,
    lg: false,
  });

  if (!isWideVersion) {
    return (
      <Flex color="white" ml={["0.4rem", "2.25rem"]} mb={["1rem", "2.2rem"]}>
        <Text as={"span"} h={["4", "6"]} fontSize={["1rem", "2.2rem"]}>
          e
          <Text as={"span"} color={"green.100"}>
            /
          </Text>
          code
        </Text>
      </Flex>
    );
  }

  return (
   <Flex color="white" >
     
      <Text as={"span"}  fontSize="1.7rem">
        e
        <Text as={"span"} color={"green.100"}>
          /
        </Text>
        code
      </Text>
    </Flex>
  );
}
