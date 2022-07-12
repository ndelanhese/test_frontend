import {
  Button,
  HStack,
  Icon,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  useDisclosure,
  ModalFooter,
} from "@chakra-ui/react";
import { MdArrowForwardIos } from "react-icons/md";

export function Newsletter() {

   const { isOpen, onOpen, onClose } = useDisclosure();


  function VerticallyCenter() {
    

    return (
      <>
        <Button onClick={onOpen}>Trigger modal</Button>

        <Modal onClose={onClose} isOpen={isOpen} isCentered>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Text>Inscrição Realizada com sucesso!</Text>
            </ModalBody>
            <ModalFooter>
              <Button onClick={onClose}>Fechar</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    );
  }

  return (
    <Stack as="form" w="23.375rem" >
      <Text as="label" fontSize="0.875rem">
        Inscrevasse na nossa newsletter
      </Text>
      <HStack gap="10px">
        <Input placeholder="Endereço de e-mail" />
        <Button bg="gray.900" color="white" onClick={onOpen}>
          <Icon as={MdArrowForwardIos} />
        </Button>
      </HStack>
    </Stack>
  );
}
