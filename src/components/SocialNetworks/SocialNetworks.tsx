import { Button, Flex, HStack, Icon, Link, Spinner } from "@chakra-ui/react";
import {
  AiFillYoutube,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";
import { MdFacebook } from "react-icons/md";
import { api } from "../../services/api";
import { useQuery } from 'react-query';

export function SocialNetworks() {
 
  const { data, isLoading } = useQuery("SocialNetworks", async () => {
    const response = await api.get("/profile");

    const data = await response.data;

    return data;
  });
  
  

  return (
    <HStack mt="1.5rem" gap="0.7rem">
      {isLoading ? ( <Flex justify="center">
        <Spinner/>
      </Flex> ) : (
        data.social_media_links.map((item) => {
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
        })
      )}
    </HStack>
  );
}
