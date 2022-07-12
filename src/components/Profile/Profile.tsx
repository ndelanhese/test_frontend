import { Avatar, Flex, Stack, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import {
  format,
  formatDistanceToNow,
  formatDistanceToNowStrict,
} from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { SocialNetworks } from "../SocialNetworks/SocialNetworks";

export function Profile() {
  const { asPath } = useRouter();

  if (asPath === "/") {
    return (
      <Flex align="center">
        <Stack maxW="31rem" align="center">
          <Avatar
            boxSize="7.5rem"
            name="Nathan Delanhese"
            src="https://github.com/ndelanhese.png"
          ></Avatar>
          <Text align="center" fontSize="1.875rem" fontWeight="400">
            Nathan Delanhese
          </Text>
          <Text align="center" p={3} pb={6}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt
            ullamcorper facilisis leo, aenean.
          </Text>
          <SocialNetworks />
        </Stack>
      </Flex>
    );
  }

  const publishedAt = new Date("2002-06-19T00:00:00");

  const publishedDateFormated = format(publishedAt, "d 'de' LLLL',' Y", {
    locale: ptBR,
  });
  const publishedDateRelativeToNow = formatDistanceToNowStrict(publishedAt, {
    locale: ptBR,
  });

  return (
    <Flex align="center">
      <Stack maxW="31rem" align="center">
        <Avatar
          boxSize="7.5rem"
          name="Nathan Delanhese"
          src="https://github.com/ndelanhese.png"
        ></Avatar>
        <Text align="center" fontSize="1.875rem" fontWeight="400">
          Nathan Delanhese
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
  );
}
