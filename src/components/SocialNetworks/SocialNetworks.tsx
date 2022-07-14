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
  const [profile, setProfile] = useState([]);

  useEffect(() => {
    api
      .get("/profile")
      .then((response) => {
        setProfile(response.data.social_media_links);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <HStack mt="1.5rem" gap="0.7rem">
      {profile.map((item) => {
        let icon;
        switch (item.slug) {
          case "facebook":
            icon = <Icon as={MdFacebook} w={7} h={7}></Icon>;
            break;
            case "instagram":
            icon = <Icon as={AiOutlineInstagram} w={7} h={7}></Icon>;
            break;
            case "twitter":
            icon =  <Icon as={AiOutlineTwitter} w={7} h={7}></Icon>
            break;
            case "youtube":
            icon = <Icon as={AiFillYoutube} w={7} h={7}></Icon>
            break;
          default:
            break;
        }

        return (
          <Link key={item.slug} as="a" href={item.url} target="_blank">
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
              {icon}
            </Button>
          </Link>
        );
      })}
    </HStack>
  );
}
