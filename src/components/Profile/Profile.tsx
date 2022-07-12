import { Avatar, Flex, Stack, Text } from "@chakra-ui/react";
import { SocialNetworks } from "../SocialNetworks/SocialNetworks";



export function Profile() {
  return (
    <Flex align="center">
      <Stack maxW="31rem" align="center">
        <Avatar
          boxSize="7.5rem"
          name="Nathan Delanhese"
          src="https://github.com/ndelanhese.png"
        ></Avatar>
        <Text align="center" fontSize="1.875rem" fontWeight="400">Nathan Delanhese</Text>
        <Text align="center" p={3} pb={6}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt
          ullamcorper facilisis leo, aenean.
        </Text>
        <SocialNetworks/>
      </Stack>
    </Flex>
  );
}
