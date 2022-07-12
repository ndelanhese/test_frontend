import { Avatar, Flex, Stack, Text } from "@chakra-ui/react";

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
        <Text align="center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt
          ullamcorper facilisis leo, aenean.
        </Text>
      </Stack>
    </Flex>
  );
}
