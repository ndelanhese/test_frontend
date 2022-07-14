import React, { useState } from "react";
import {
  Button,
  Icon,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { MdArrowForwardIos } from "react-icons/md";
import { api } from "../../services/api";

interface TextProps {
  text: string;
}

export function ModalConfirmation({ text }: TextProps) {
  function BackdropExample() {
    const OverlayOne = () => (
      <ModalOverlay
        bg="blackAlpha.300"
        backdropFilter="blur(10px) hue-rotate(90deg)"
      />
    );

    const { isOpen, onOpen, onClose } = useDisclosure();
    const [overlay, setOverlay] = React.useState(<OverlayOne />);

    let [resultado, setResultado] = useState("");

    function responseOk() {
      setResultado("Inscrição realizada com sucesso!");
      setOverlay(<OverlayOne />);
      onOpen();
    }

    async function handleNewsletterSubmit() {
      try {
        const response = await api.post("/newsletter", {
          email: text,
        });
        if (response.status == 204) {
          responseOk();
        }
      } catch (err) {
        setResultado("Não foi possível realizar a inscrição!");
        setOverlay(<OverlayOne />);
        onOpen();
      }
    }

    return (
      <>
        <Button
          bg="gray.900"
          color="white"
          _hover={{
            background: "white",
            color: "black",
            border: "1px solid black",
            transform: "scale(1.2, 1.2)",
            transition: "0.5s",
          }}
          onClick={() => {
            handleNewsletterSubmit();
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
                  {resultado}
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
