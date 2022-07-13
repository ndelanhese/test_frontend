import React from "react";
import {
  Button,
  Flex,
  Icon,
  Modal,
  ModalBody,
  Divider,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  Stack,
  Text,
  useDisclosure,
  useBreakpointValue,
} from "@chakra-ui/react";

import { AiOutlineShareAlt } from "react-icons/ai";
import { useMenuDrawer } from "../../../contexts/MenuDrawerContext";

export function ModalShare() {
  const isWideVersion = useBreakpointValue({
    base: true,
    lg: false,
  });

  function BackdropExample() {
    const OverlayOne = () => (
      <ModalOverlay
        bg="blackAlpha.300"
        backdropFilter="blur(10px) hue-rotate(90deg)"
      />
    );

    const { isOpen, onOpen, onClose } = useDisclosure();
    const [overlay, setOverlay] = React.useState(<OverlayOne />);
    const menuDrawner = useMenuDrawer();

    return (
      <>
        {!isWideVersion ? (
          <Button
            as="button"
            bg="transparent"
            border="1px solid white"
            borderRadius="5px"
            h="2.5rem"
            w="2.5rem"
            onClick={() => {
              setOverlay(<OverlayOne />);
              onOpen();
            }}
          >
            <Icon as={AiOutlineShareAlt} />
          </Button>
        ) : (
          <Button
            as="button"
            bg="transparent"
            h="1rem"
            w="1rem"
            onClick={() => {
              setOverlay(<OverlayOne />);
              onOpen();
            }}
          >
            <Icon
              as={AiOutlineShareAlt}
              h="1.125rem"
              w="1.125rem"
              mr="0.7rem"
              ml="0.8rem"
            />
            <Text> Compartilhar</Text>
          </Button>
        )}

        <Modal isCentered isOpen={isOpen} onClose={onClose}>
          {overlay}
          <ModalContent w="14.875rem" h="10.8125rem" border="2px solid black">
            <ModalBody>
              <Stack align="center">
                <Button
                  onClick={onClose}
                  bg="transparente"
                  color="gray.900"
                  borderRadius="5px"
                >
                  <Text fontSize="1rem" lineHeight="19px" fontWeight={400}>
                    Facebook
                  </Text>
                </Button>

                <Divider w="14.6rem" border="1px solid" borderColor="black" />

                <Button
                  onClick={onClose}
                  bg="transparente"
                  color="gray.900"
                  borderRadius="5px"
                >
                  <Text fontSize="1rem" lineHeight="19px" fontWeight={400}>
                    Twitter
                  </Text>
                </Button>

                <Divider w="14.6rem" border="1px solid" borderColor="black" />
                <Button
                  onClick={onClose}
                  bg="transparente"
                  color="gray.900"
                  borderRadius="5px"
                >
                  <Text fontSize="1rem" lineHeight="19px" fontWeight={400}>
                    WhatsApp
                  </Text>
                </Button>
              </Stack>
            </ModalBody>
            <ModalFooter></ModalFooter>
          </ModalContent>
        </Modal>
      </>
    );
  }

  return <BackdropExample />;
}
