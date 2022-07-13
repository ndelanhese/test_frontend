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
        bg="gray.900" color="white"
          onClick={() => {
            setOverlay(<OverlayOne />);
            onOpen();
          }}
        >
           <Icon as={MdArrowForwardIos} />
        </Button>

        <Modal isCentered isOpen={isOpen} onClose={onClose}>
          {overlay}
          <ModalContent>
            
            <ModalCloseButton />
            <ModalBody > 
              <Text>Inscrição Realizada com sucesso!</Text>
              <Stack align="center">
            <Button onClick={onClose} bg="gray.900" color="white" borderRadius="5px" h="3.1875rem" w="9.8125rem"> Fechar</Button>
            </Stack>
            </ModalBody>
            <ModalFooter>
              
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    );
  }

  return <BackdropExample />;
}
