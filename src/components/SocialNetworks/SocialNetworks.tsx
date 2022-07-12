import { Button, HStack, Icon } from "@chakra-ui/react";
import {
  AiFillYoutube,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";
import { MdFacebook } from "react-icons/md";

export function SocialNetworks() {
  return (
    <HStack mt="1.5rem" gap="0.7rem">
      <Button h={10} w={7} bg="gray.900" color="white">
        <Icon as={MdFacebook} w={7} h={7}></Icon>
      </Button>
      <Button h={10} w={7} bg="gray.900" color="white">
        <Icon as={AiOutlineInstagram} w={7} h={7}></Icon>
      </Button>
      <Button h={10} w={7} bg="gray.900" color="white">
        <Icon as={AiOutlineTwitter} w={7} h={7}></Icon>
      </Button>
      <Button h={10} w={7} bg="gray.900" color="white">
        <Icon as={AiFillYoutube} w={7} h={7}></Icon>
      </Button>
    </HStack>
  );
}
