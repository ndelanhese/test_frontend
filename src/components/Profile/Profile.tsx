import {
  Avatar,
  Button,
  Flex,
  Icon,
  Link as LinkChakra,
  Spinner,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { format, formatDistanceToNowStrict } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { SocialNetworks } from "../SocialNetworks/SocialNetworks";
import { MdArrowBackIos } from "react-icons/md";
import Link from "next/link";
import { api } from "../../services/api";
import { useQuery } from 'react-query';


export function Profile() {
  const { asPath } = useRouter();


  const { data, isLoading } = useQuery("Profile", async () => {
    const response = await api.get("/profile");

    const data = await response.data;

    return data;
  });

    const dataNascimento = useQuery("DataMedicalInformations", async () => {
      const response = await api.get("/medical-profile");
  
      const data = await response.data;
  
      return data;
    });



  
  if (asPath === "/") {
    return (
      <Flex align="center">
        { isLoading ? (
          <Flex justify="center">
            <Spinner/>
          </Flex>
        ) : (
          <Stack maxW="31rem" align="center">
          <Avatar
            boxSize="7.5rem"
            name= {data.name}
            src={data.avatar_url}
            _hover={{ transform: "scale(1.2, 1.2)", transition: "0.5s" }}
            style={{ transition: "0.5s" }}
          ></Avatar>
          <Text align="center" fontSize="1.875rem" fontWeight="400">
            {data.name}
          </Text>
          <Text align="center" p={3} pb={6}>
          {data.bio}
          </Text>
          <SocialNetworks />
        </Stack>
        )}
      </Flex>
    );
  }

  const publishedAt = new Date(Date.parse (dataNascimento.data.birthdate));

  const publishedDateFormated = format(publishedAt, "d 'de' LLLL',' Y", {
    locale: ptBR,
  });
  const publishedDateRelativeToNow = formatDistanceToNowStrict(publishedAt, {
    locale: ptBR,
  });

  return (
    <>
      {isLoading ? (
        <Flex>
          <Spinner/>
        </Flex>
      ) : (
        <>
        <Stack mr="auto" ml={["1rem", "5rem"]}>
        <Link href="/">
          <LinkChakra as="a" style={{ textDecoration: "none" }}>
            <Button
              bg="transparent"
              border="1px solid"
              w="2.5rem"
              h="2.5rem"
              _hover={{
                background: "black",
                color: "white",
                transform: "scale(1.2, 1.2)",
                transition: "0.5s",
              }}
            >
              <Icon as={MdArrowBackIos} w="1.3rem" h="1.3rem" ml="0.4rem" />
            </Button>
          </LinkChakra>
        </Link>
      </Stack>
      <Flex>
        <Stack maxW="31rem" align="center">
          <Avatar
            boxSize="7.5rem"
            name= {data.name}
            src={data.avatar_url}
            _hover={{ transform: "scale(1.2, 1.2)", transition: "0.5s" }}
            style={{ transition: "0.5s" }}
          ></Avatar>
          <Text align="center" fontSize="1.875rem" fontWeight="400">
            {data.name}
          </Text>
          <Text as="p">
            <Text as="span"> {publishedDateFormated} </Text>
            <Text
              as="time"
              title={publishedDateFormated}
              dateTime={publishedAt.toISOString()}
            >
              ({publishedDateRelativeToNow})
            </Text>
          </Text>
        </Stack>
      </Flex>
        </>
      )}
    </>
  );
}

