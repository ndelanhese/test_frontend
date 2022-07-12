import React from "react";
import {
  Box,
  Flex,
  Icon,
  IconButton,
  Link,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Logo } from "./Logo";
import { Menu } from "./Menu";
import { useMenuDrawer } from "../../contexts/MenuDrawerContext";
import { AiOutlineMenu } from "react-icons/ai";

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
      h="6.25rem"
      p={4}
      color="white"
      alignItems="center"
    >
      {!isWideVersion && (
        <IconButton
          aria-label="Open Navigation"
          icon={<Icon as={AiOutlineMenu} />}
          fontSize={24}
          variant="unstyled"
          ml="auto"
          onClick={onOpen}
          mr={2}
          mt={2}
        ></IconButton>
      )}

      {isWideVersion && (
        <>
          <Link href="/" style={{ textDecoration: 'none' }}>
          <Logo />
          </Link>
          <Flex ml="auto" alignItems="center">
            <Menu />
          </Flex>
        </>
      )}
    </Flex>
  );
}
