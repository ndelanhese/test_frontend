import {
  Flex,
  Text,
  useBreakpointValue,
  Link as LinkChakra,
} from "@chakra-ui/react";
import Image from "next/image";
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
            mt="2rem"
          >
            <Image
              src="/assets/logo.svg"
              alt="logo ecode"
              width={100}
              height={100}
            />
          </Flex>
        </LinkChakra>
      </Link>
    );
  }

  return (
    <Link href="/">
      <LinkChakra href="/" style={{ textDecoration: "none" }} as="a">
        <Flex color="white" fontWeight={700}>
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
