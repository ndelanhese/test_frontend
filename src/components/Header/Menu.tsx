import { Button, HStack, IconButton, Stack, useBreakpointValue } from "@chakra-ui/react";
import React from "react";
import { AiFillMedicineBox, AiOutlineShareAlt } from "react-icons/ai";

export function Menu() {
  const isWideVersion = useBreakpointValue({
    base: true,
    lg: false,
  });

  if(!isWideVersion){
    return (
      <HStack p="0.875rem 2.75rem" gap="0.625rem">
        <Button
          bg="transparent"
          border="1px solid white"
          borderRadius="5px"
          h="2.5rem"
          w="2.5rem"
        >
          <IconButton
            aria-label="Icon one"
            as={AiFillMedicineBox}
            bg="transparent"
            h="1.25rem"
            w="1.125rem"
          />
        </Button>
        <Button
          bg="transparent"
          border="1px solid white"
          borderRadius="5px"
          h="2.5rem"
          w="2.5rem"
        >
          <IconButton
            aria-label="Icon two"
            as={AiOutlineShareAlt}
            bg="transparent"
            h="1.25rem"
            w="1.125rem"
          />
        </Button>
      </HStack>
    );
  }

  return (
    <Stack p="0.875rem 2.75rem" gap="1rem">
      <Button
        bg="transparent"
      
        h="1rem"
        w="1rem"
      >
        <IconButton
          aria-label="Icon one"
          as={AiFillMedicineBox}
          bg="transparent"
          h="1.125rem"
          w="1.125rem"
        />
        Perfil Médico
      </Button>
      <Button
        bg="transparent"
      
        h="1rem"
        w="1rem"
      >
        <IconButton
          aria-label="Icon two"
          as={AiOutlineShareAlt}
          bg="transparent"
          h="1.125rem"
          w="1.125rem"
        />
        Compartilhar
      </Button>
    </Stack>
  );


}
