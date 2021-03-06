import {
  Button,
  HStack,
  IconButton,
  Link as LinkChakra,
  Stack,
  useBreakpointValue,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { AiFillMedicineBox, AiOutlineShareAlt } from "react-icons/ai";
import { ModalShare } from "./ModalShare/ModalShare";

export function Menu() {
  const isWideVersion = useBreakpointValue({
    base: true,
    lg: false,
  });

  if (!isWideVersion) {
    return (
      <HStack p="0.875rem 2.75rem" gap="0.625rem">
        <Link href="/medicalProfile">
          <LinkChakra as="a">
            <Button
              as="button"
              bg="transparent"
              border="1px solid white"
              borderRadius="5px"
              h="2.5rem"
              w="2.5rem"
              _hover={{
                background: "white",
                color: "black",
                transform: "scale(1.2, 1.2)",
                transition: "0.5s",
              }}
              style={{ transition: "0.5s" }}
            >
              <IconButton
                aria-label="Icon one"
                as={AiFillMedicineBox}
                bg="transparent"
                h="1.25rem"
                w="1.125rem"
                _hover={{background: "transparent"}}
              />
            </Button>
          </LinkChakra>
        </Link>
        <ModalShare />
      </HStack>
    );
  }

 

  return (
    <Stack p="0.875rem 2.75rem" gap="1rem">
      <Link href="/medicalProfile">
        <LinkChakra as="a" >
          <Button as="button" bg="transparent" h="1rem" w="1rem" style={{ textDecoration: "none" }}>
            <IconButton
              aria-label="Icon one"
              as={AiFillMedicineBox}
              bg="transparent"
              h="1.125rem"
              w="1.125rem"
              style={{ textDecoration: "none" }}
            />
            Perfil Médico
          </Button>
        </LinkChakra>
      </Link>
      <ModalShare />
    </Stack>
  );
}
