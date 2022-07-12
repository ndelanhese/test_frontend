import { Stack, Text } from "@chakra-ui/react";

export function Footer(){
    return(
        <Stack as="footer" position="absolute">
            <Text as="p" fontWeight="400" fontSize="1rem" lineHeight="19px">e/code. 2022. Todos direitos reservados</Text>
        </Stack>
    )
}