import {
  Box,
  Button,
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
          <Stack>
            <Text>Peso</Text>
            <Text fontSize="1.5rem">68Kg</Text>
          </Stack>
          <Stack>
            <Text>Altura</Text>
            <Text fontSize="1.5rem">173cm</Text>
          </Stack>
          <Stack>
            <Text>Tipo de Sangue</Text>
            <Text fontSize="1.5rem"> O+</Text>
          </Stack>
          <Stack>
            <Text>Doenças</Text>
            <Text fontSize="1.5rem">Nenhuma</Text>
          </Stack>
          <Stack>
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
          <Stack>
            <Text>Michael Caplan</Text>
            <Text fontSize="1.5rem"> +1 (650) 555-4703</Text>
          </Stack>
        </HStack>
      </Stack>
    );
  }

  return (
    <Stack ml="1rem" gap={5}>
      <Divider w="95vw" mt="3rem" mb="1.5rem" />

      <Stack gap={5}>
        <Stack>
          <Text>Peso</Text>
          <Text fontSize="1.5rem">68Kg</Text>
        </Stack>
        <Divider w="85vw" mt="3rem" mb="1.5rem" />
        <Stack>
          <Text>Altura</Text>
          <Text fontSize="1.5rem">173cm</Text>
        </Stack>
        <Divider w="85vw" mt="3rem" mb="1.5rem" />
        <Stack>
          <Text>Tipo de Sangue</Text>
          <Text fontSize="1.5rem"> O+</Text>
        </Stack>
        <Divider w="85vw" mt="3rem" mb="1.5rem" />
        <Stack>
          <Text>Doenças</Text>
          <Text fontSize="1.5rem">Nenhuma</Text>
        </Stack>
        <Divider w="85vw" mt="3rem" mb="1.5rem" />
        <Stack>
          <Text>Alergias</Text>
          <Text fontSize="1.5rem">Nenhuma</Text>
        </Stack>

        <Divider w="85vw" mt="3rem" mb="1.5rem" />

        <Stack>
          <Text>Michael Caplan</Text>
          <Text fontSize="1.5rem"> +1 (650) 555-4703</Text>
        </Stack>
      </Stack>
      <Stack pt="2rem">
        <Button bg="transparent" border="1px solid black" w="90vw">
          <Text fontSize="1rem" lineHeight="19px" fontWeight={400}>
            Liga agora
          </Text>
        </Button>
      </Stack>
    </Stack>
  );
}
