import { Button, HStack, Icon, Link } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import {
  AiFillYoutube,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";
import { MdFacebook } from "react-icons/md";
import { api } from "../../services/api";

export function SocialNetworks() {
  const [profile, setProfile] = useState<any>({});

  useEffect(() => {
    api
      .get("/profile")
      .then((response) => {
        setProfile(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

     

  return (
    <HStack mt="1.5rem" gap="0.7rem">
      <Link as="a" href={"profile.social_media_links"} target="_blank">
        <Button
          h={10}
          w={7}
          bg="gray.900"
          color="white"
          _hover={{
            background: "white",
            color: "black",
            transform: "scale(1.2, 1.2)",
            transition: "0.5s",
            border: "1px solid",
          }}
        >
          <Icon as={MdFacebook} w={7} h={7}></Icon>
        </Button>
      </Link>
      <Link
        as="a"
        href={"profile.social_media_links"}
        target="_blank"
      >
        <Button
          h={10}
          w={7}
          bg="gray.900"
          color="white"
          _hover={{
            background: "white",
            color: "black",
            transform: "scale(1.2, 1.2)",
            transition: "0.5s",
            border: "1px solid",
          }}
        >
          <Icon as={AiOutlineInstagram} w={7} h={7}></Icon>
        </Button>
      </Link>
      <Link
        as="a"
        href={"profile.social_media_links"}
        target="_blank"
      >
        <Button
          h={10}
          w={7}
          bg="gray.900"
          color="white"
          _hover={{
            background: "white",
            color: "black",
            transform: "scale(1.2, 1.2)",
            transition: "0.5s",
            border: "1px solid",
          }}
        >
          <Icon as={AiOutlineTwitter} w={7} h={7}></Icon>
        </Button>
      </Link>
      <Link as="a" href={"profile.social_media_links"} target="_blank">
        <Button
          h={10}
          w={7}
          bg="gray.900"
          color="white"
          _hover={{
            background: "white",
            color: "black",
            transform: "scale(1.2, 1.2)",
            transition: "0.5s",
            border: "1px solid",
          }}
        >
          <Icon as={AiFillYoutube} w={7} h={7}></Icon>
        </Button>
      </Link>
    </HStack>
  );
}
