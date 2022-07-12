import { Flex, Stack, Text } from "@chakra-ui/react";
import React from "react";

export function Logo() {
  return (
    <Flex color="white" >
      <Stack spacing={3}>
      <Text as={"span"} fontSize="5x1">
        e
        <Text as={"span"} color={"green.100"}>
          /
        </Text>
        code
      </Text>
      </Stack>
    </Flex>
  );
}
