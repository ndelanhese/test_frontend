import {  HStack,Input, Stack, Text } from "@chakra-ui/react";

import { ModalConfirmation } from "./ModalConfirmation";

export function Newsletter() {
  
  return (
    <Stack as="form" w={["21rem", "23.375rem"]}>
      <Text as="label" fontSize="0.875rem">
        Inscrevasse na nossa newsletter
      </Text>
      <HStack gap={["1", "3"]}>
        <Input placeholder="Endereço de e-mail" />
        <ModalConfirmation />
      </HStack>
    </Stack>
  );
}
