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
      bg={["white","gray.900"]}
      w="100%"
      h="5rem"
      p={4}
      color={["gray.900","white"]}
      alignItems="center"
    >
      {!isWideVersion && (
        <IconButton
          border="1px solid black"
          aria-label="Open Navigation"
          
          icon={<Icon as={AiOutlineMenu} w="1.8rem" mt="0.5rem" />}
          fontSize={32}
          h="3rem"
          w="3rem"
          variant="unstyled"
          ml="auto"
          onClick={onOpen}
          mr={2}
          mt={1}
        ></IconButton>
      )}

      {isWideVersion && (
        <>
          <Logo />

          <Flex ml="auto" alignItems="center">
            <Menu />
          </Flex>
        </>
      )}
    </Flex>
  );
}
