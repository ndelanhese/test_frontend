import {
  Flex,
  Stack,
  Text,
  useBreakpointValue,
  Link as LinkChakra,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

export function Logo() {
  const isWideVersion = useBreakpointValue({
    base: true,
    lg: false,
  });

  if (!isWideVersion) {
    return (
      <Link href="/">
        <LinkChakra href="/" style={{ textDecoration: "none" }} as="a">
          <Flex
            color="white"
            ml={["0.4rem", "2.25rem"]}
            mb={["1rem", "2.2rem"]}
          >
            <Text as={"span"} h={["4", "6"]} fontSize={["1rem", "2.2rem"]}>
              e
              <Text as={"span"} color={"green.100"}>
                /
              </Text>
              code
            </Text>
          </Flex>
        </LinkChakra>
      </Link>
    );
  }

  return (
    <Link href="/">
      <LinkChakra href="/" style={{ textDecoration: "none" }} as="a">
        <Flex color="white">
          <Text as={"span"} fontSize="1.7rem">
            e
            <Text as={"span"} color={"green.100"}>
              /
            </Text>
            code
          </Text>
        </Flex>
      </LinkChakra>
    </Link>
  );
}
