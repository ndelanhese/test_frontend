import {
  Box,
  Divider,
  Flex,
  HStack,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";

export function MedicalInformations() {
  const isWideVersion = useBreakpointValue({
    base: true,
    lg: false,
  });

  if (!isWideVersion) {
    return (
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
            <Text fontSize="1.5rem"> O+</Text>
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
            mt="2rem"
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
    );
  }

  return (
    <Stack ml="1rem">
      <Divider w="95vw" mt="3rem" mb="1.5rem" />

      <Stack gap={5}>
        <Stack gap={1}>
          <Text>Peso</Text>
          <Text fontSize="1.5rem">68Kg</Text>
        </Stack>
        <Divider w="85vw" mt="3rem" mb="1.5rem" />
        <Stack gap={1}>
          <Text>Altura</Text>
          <Text fontSize="1.5rem">173cm</Text>
        </Stack>
        <Divider w="85vw" mt="3rem" mb="1.5rem" />
        <Stack gap={1}>
          <Text>Tipo de Sangue</Text>
          <Text fontSize="1.5rem"> O+</Text>
        </Stack>
        <Divider w="85vw" mt="3rem" mb="1.5rem" />
        <Stack gap={1}>
          <Text>Doenças</Text>
          <Text fontSize="1.5rem">Nenhuma</Text>
        </Stack>
        <Divider w="85vw" mt="3rem" mb="1.5rem" />
        <Stack gap={1}>
          <Text>Alergias</Text>
          <Text fontSize="1.5rem">Nenhuma</Text>
        </Stack>

        <Divider w="85vw" mt="3rem" mb="1.5rem" />

        <Stack gap={1}>
          <Text>Michael Caplan</Text>
          <Text fontSize="1.5rem"> +1 (650) 555-4703</Text>
        </Stack>
      </Stack>
    </Stack>
  );
}
