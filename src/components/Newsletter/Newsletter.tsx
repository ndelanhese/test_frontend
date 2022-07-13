import {
  Button,
  HStack,
  Icon,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import { MdArrowForwardIos } from "react-icons/md";
import { useModalDrawer } from "../../contexts/ModalDrawerConfirmation";

export function Newsletter() {
    const { onOpen } = useModalDrawer();
  

  return (
    <Stack as="form" w={["21rem","23.375rem"]} >
      <Text as="label" fontSize="0.875rem">
        Inscrevasse na nossa newsletter
      </Text>
      <HStack gap={["1","3"]}>
        <Input placeholder="Endereço de e-mail" />
        <Button bg="gray.900" color="white" onClick={onOpen}>
          <Icon as={MdArrowForwardIos} />
        </Button>
      </HStack>
    </Stack>
  );
}
