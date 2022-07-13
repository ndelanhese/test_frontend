import React from "react";
import {
  Flex,
  Icon,
  IconButton,
  Link as LinkChakra,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Logo } from "./Logo";
import { Menu } from "./Menu";
import { useMenuDrawer } from "../../contexts/MenuDrawerContext";
import { AiOutlineMenu } from "react-icons/ai";
import Link from "next/link";

export function Header() {
  const { onOpen } = useMenuDrawer();
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Flex
      bg="gray.900"
      w="100%"
      h="5rem"
      p={4}
      color="white"
      alignItems="center"
    >
      {!isWideVersion && (
        <IconButton
          aria-label="Open Navigation"
          icon={<Icon as={AiOutlineMenu} />}
          fontSize={32}
       
          variant="unstyled"
          ml="auto"
          onClick={onOpen}
          mr={2}
          mt={1}
        ></IconButton>
      )}

      {isWideVersion && (
        <>
          <Link href="/">
            <LinkChakra href="/" style={{ textDecoration: "none" }} as="a">
              <Logo />
            </LinkChakra>
          </Link>
          <Flex ml="auto" alignItems="center">
            <Menu />
          </Flex>
        </>
      )}
    </Flex>
  );
}
