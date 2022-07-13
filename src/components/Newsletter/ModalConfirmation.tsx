import React from "react";
import {
  Button,
  Flex,
  Icon,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { MdArrowForwardIos } from "react-icons/md";

export function ModalConfirmation() {
  function BackdropExample() {
    const OverlayOne = () => (
      <ModalOverlay
        bg="blackAlpha.300"
        backdropFilter="blur(10px) hue-rotate(90deg)"
      />
    );

    const { isOpen, onOpen, onClose } = useDisclosure();
    const [overlay, setOverlay] = React.useState(<OverlayOne />);

    return (
      <>
        <Button
          bg="gray.900"
          color="white"
          _hover={{
            background: "white",
            color: "black",
            border: "1px solid black",
            transform: "scale(1.2, 1.2)", transition: "0.5s"
        
          }}
          onClick={() => {
            setOverlay(<OverlayOne />);
            onOpen();
          }}
        >
          <Icon as={MdArrowForwardIos} />
        </Button>

        <Modal isCentered isOpen={isOpen} onClose={onClose}>
          {overlay}
          <ModalContent w={["20.375rem", "46.375rem"]}>
            <ModalBody>
              <Stack align="center" gap={7} mt={["36px", "51px"]}>
                <Text
                  fontSize="1.5rem"
                  lineHeight="28px"
                  fontWeight={400}
                  align="center"
                >
                  Inscrição Realizada com sucesso!
                </Text>

                <Button
                  onClick={onClose}
                  bg="gray.900"
                  color="white"
                  borderRadius="5px"
                  h={["3.1875rem"]}
                  w={["18.375rem", "9.8125rem"]}
                  _hover={{
                    background: "white",
                    color: "black",
                    border: "1px solid",
                  }}
                >
                  <Text fontSize="1.125rem" lineHeight="21px" fontWeight={400}>
                    Fechar
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
