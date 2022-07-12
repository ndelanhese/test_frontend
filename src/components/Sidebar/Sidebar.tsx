import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Icon,
  HStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import { AiOutlineClose } from "react-icons/ai";
import { useMenuDrawer } from "../../contexts/MenuDrawerContext";
import { Logo } from "../Header/Logo";
import { Menu } from "../Header/Menu";

export function Sidebar() {
  const { isOpen, onClose } = useMenuDrawer();

  const isDrawerSidebar = useBreakpointValue({
    base: true,
    lg: false,
  });

  //Essa sessão é referente a sidebar responsiva caso o tamanho da tela seja inferior a base

  if (isDrawerSidebar) {
    return (
      <Drawer isOpen={isOpen} placement="left" size="full" onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent bg="gray.900" color="white" p={4}>
            <Flex>
              <DrawerHeader>
                <Logo />
              </DrawerHeader>
              <Button
                ml="auto"
                bg="transparent"
                border="1px solid white"
                borderRadius="5px"
                w="1.25rem"
                h="2rem"
                mt="1.25rem"
                onClick={onClose}
              >
                <Icon as={AiOutlineClose} h="0.875rem" w="0.875rem" />
              </Button>
            </Flex>

            <DrawerBody>
              <Menu/>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    );
  }
}
