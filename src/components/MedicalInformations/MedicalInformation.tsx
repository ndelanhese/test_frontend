import { Box, Divider, Flex, HStack, Stack, Text } from "@chakra-ui/react";

export function MedicalInformations() {
  return (
    <>
      <Stack ml="5rem">
        <Divider w="85vw" mt="3rem" mb="1.5rem" />

        <Flex>
          <Text
            fontWeight={400}
            fontSize="1.875rem"
            mb="1.5rem"
            lineHeight="35px"
          >
            Informações
          </Text>
        </Flex>
        <HStack gap={14}>
          <Stack gap={1}>
            <Text>Peso</Text>
            <Text fontSize="1.5rem">68Kg</Text>
          </Stack>
          <Stack gap={1}>
            <Text>Altura</Text>
            <Text fontSize="1.5rem">173cm</Text>
          </Stack>
          <Stack gap={1}>
            <Text>Tipo de Sangue</Text>
            <Text fontSize="1.5rem"> B+</Text>
          </Stack>
          <Stack gap={1}>
            <Text>Doenças</Text>
            <Text fontSize="1.5rem">Nenhuma</Text>
          </Stack>
          <Stack gap={1}>
            <Text>Alergias</Text>
            <Text fontSize="1.5rem">Nenhuma</Text>
          </Stack>
        </HStack>
        <Divider w="85vw" mt="3rem" mb="1.5rem" />

        <Flex>
          <Text
            fontWeight={400}
            fontSize="1.875rem"
            mb="1.5rem"
            lineHeight="35px"
          >
            Contato de emergência
          </Text>
        </Flex>
        <HStack gap={14}>
          <Stack gap={1}>
            <Text>Michael Caplan</Text>
            <Text fontSize="1.5rem"> +1 (650) 555-4703</Text>
          </Stack>
        </HStack>
      </Stack>
    </>
  );
}
