import { useQuery } from "react-query";
import { api } from "../../services/api";
import {
  Box,
  Button,
  Divider,
  Flex,
  HStack,
  Link as LinkChakra,
  Spinner,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";

export function MedicalInformations() {
  const { data, isLoading } = useQuery("MedicalInformations", async () => {
    const response = await api.get("/medical-profile");

    const data = await response.data;

    return data;
  });

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
          {isLoading ? (
            <Flex>
              <Spinner />
            </Flex>
          ) : (
            <>
              <Stack>
                <Text>Peso</Text>
                <Text fontSize="1.5rem">{data.weight}</Text>
              </Stack>
              <Stack>
                <Text>Altura</Text>
                <Text fontSize="1.5rem">{data.height}</Text>
              </Stack>
              <Stack>
                <Text>Tipo de Sangue</Text>
                <Text fontSize="1.5rem"> {data.blood_type}</Text>
              </Stack>
              <Stack>
                <Text>Doenças</Text>
                <Text fontSize="1.5rem">
                  {data.diseases.map((doenca, indice) => {
                    if (indice === data.diseases.length - 1) {
                      return doenca;
                    } else {
                      return doenca + ", ";
                    }
                  })}
                </Text>
              </Stack>
              <Stack>
                <Text>Alergias</Text>
                <Text fontSize="1.5rem">
                  {data.allergies.map((alergia, indice) => {
                    if (indice === data.allergies.length - 1) {
                      return alergia;
                    } else {
                      return alergia + ", ";
                    }
                  })}
                </Text>
              </Stack>
            </>
          )}
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
            {isLoading ? (
              <Flex>
                <Spinner />
              </Flex>
            ) : (
              <>
                <Text>{data.emergency_contact.name}</Text>
                <Text fontSize="1.5rem"> {data.emergency_contact.phone}</Text>
              </>
            )}
          </Stack>
        </HStack>
      </Stack>
    );
  }

  return (
    <Stack ml="1rem" gap={5}>
      <Divider w="95vw" mt="3rem" mb="1.5rem" />

      <Stack gap={5}>
        {isLoading ? (
          <Flex>
            <Spinner />
          </Flex>
        ) : (
          <>
            <Stack>
              <Text>Peso</Text>
              <Text fontSize="1.5rem">{data.weight}</Text>
            </Stack>
            <Divider w="85vw" mt="3rem" mb="1.5rem" />
            <Stack>
              <Text>Altura</Text>
              <Text fontSize="1.5rem">{data.height}</Text>
            </Stack>
            <Divider w="85vw" mt="3rem" mb="1.5rem" />
            <Stack>
              <Text>Tipo de Sangue</Text>
              <Text fontSize="1.5rem"> {data.blood_type}</Text>
            </Stack>
            <Divider w="85vw" mt="3rem" mb="1.5rem" />
            <Stack>
              <Text>Doenças</Text>
              <Text fontSize="1.5rem">
                {data.diseases.map((doenca, indice) => {
                  if (indice === data.diseases.length - 1) {
                    return doenca;
                  } else {
                    return doenca + ", ";
                  }
                })}
              </Text>
            </Stack>
            <Divider w="85vw" mt="3rem" mb="1.5rem" />
            <Stack>
              <Text>Alergias</Text>
              <Text fontSize="1.5rem">
                {data.allergies.map((alergia, indice) => {
                  if (indice === data.allergies.length - 1) {
                    return alergia;
                  } else {
                    return alergia + ", ";
                  }
                })}
              </Text>
            </Stack>

            <Divider w="85vw" mt="3rem" mb="1.5rem" />

            {isLoading ? (
              <Flex>
                <Spinner />
              </Flex>
            ) : (
              <>
                <Stack>
                  <Text>{data.emergency_contact.name}</Text>
                  <Text fontSize="1.5rem"> {data.emergency_contact.phone}</Text>
                </Stack>
              </>
            )}
          </>
        )}
      </Stack>
      <Stack pt="2rem">
        <Button
          bg="transparent"
          border="1px solid black"
          w="90vw"
          style={{ textDecoration: "none" }}
        >
          {isLoading ? (
            <Flex>
              <Spinner />
            </Flex>
          ) : (
            <>
              <LinkChakra as="a" href={`tel:${data.emergency_contact.phone}`}>
                <Text as="a" fontSize="1rem" lineHeight="19px" fontWeight={400}>
                  Liga agora
                </Text>
              </LinkChakra>
            </>
          )}
        </Button>
      </Stack>
    </Stack>
  );
}
