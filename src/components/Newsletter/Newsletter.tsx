import { Button, HStack, Icon, Input, Stack, Text } from "@chakra-ui/react";
import { MdArrowForwardIos } from "react-icons/md";

export function Newsletter(){
    return (
        <Stack as="form" w="23.375rem" >
        <Text as="label" fontSize="0.875rem">Inscrevasse na nossa newsletter</Text>
        <HStack gap="10px" >
        <Input placeholder="Endereço de e-mail" />
        <Button bg="gray.900" color="white"><Icon as={MdArrowForwardIos}/></Button>
        </HStack>
        </Stack>
        )
}