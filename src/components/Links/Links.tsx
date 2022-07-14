import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  HStack,
  Icon,
  Image,
  Stack,
  Spinner,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { FaDownload, FaPlay } from "react-icons/fa";
import { RiExternalLinkFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { api } from "../../services/api";
import Link from "next/link";
import { useQuery } from "react-query";

export function Links() {
  const { data, isLoading } = useQuery("content_blocks", async () => {
    const response = await api.get("/profile");

    const data = await response.data;

    return data;
  });

  const isWideVersion = useBreakpointValue({
    base: true,
    lg: false,
  });

  return (
    <>
      {isLoading ? (
        <Flex justify="center">
          <Spinner />
        </Flex>
      ) : isWideVersion ? (
        <Grid h="703.36px" templateColumns="repeat(8, 1fr)" gap={4} p={4}>
          {data.content_blocks.map((item) => {
            let icon;
            switch (item.type) {
              case "video":
                icon = (
                  <Link href={item.config.url} target="_blank">
                    <GridItem colSpan={8}>
                      <Box
                        as="button"
                        w="90vw"
                        h="245px"
                        color="white"
                        borderRadius="15px"
                        bgImg="https://images.unsplash.com/photo-1501386761578-eac5c94b800a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                        bgColor="rgba(0,0,0,0.7)"
                      >
                        <Icon as={FaPlay} w="1.75rem" h="1.75rem"></Icon>
                      </Box>
                    </GridItem>
                  </Link>
                );
                break;
              case "download":
                icon = (
                  <Link href={item.config.url}>
                    <GridItem colSpan={4}>
                      <Box
                        as="button"
                        w="43vw"
                        h="245px"
                        bg="gray.900"
                        color="white"
                        borderRadius="15px"
                      >
                        <Icon as={FaDownload} w="1.75rem" h="1.75rem"></Icon>
                        <Text as="p">Download</Text>
                      </Box>
                    </GridItem>
                  </Link>
                );
                break;
              case "external-link":
                icon = (
               <Link href={item.config.url}>
               <GridItem colSpan={4}>
                  <Box
                    as="button"
                    w="43vw"
                    h="245px"
                    bg="gray.900"
                    color="white"
                    borderRadius="15px"
                  >
                    <Icon
                      as={RiExternalLinkFill}
                      w="1.75rem"
                      h="1.75rem"
                    ></Icon>
                    <Text as="p">Link Externo</Text>
                  </Box>
                  </GridItem>
               </Link>
                );
                break;
              case "pix":
                icon = (
                  <Link href={item.config.qrcode_image_url}>
                  <GridItem colSpan={4}>
                  <Box
                    as="button"
                    w="43vw"
                    h="245px"
                    bg="gray.900"
                    color="white"
                    borderRadius="15px"
                  >
                    <Stack align="center" mb="2">
                      <Image
                        alt="pix image"
                        src="https://cdn.discordapp.com/attachments/480528577729658880/996482866785558659/pix.png"
                        boxSize="100px"
                        objectFit="cover"
                        w="1.75rem"
                        h="1.75rem"
                      />
                    </Stack>
                    <Text as="p">Pix</Text>
                  </Box>
                  </GridItem>
                  </Link>
                );
                break;
              case "email":
               icon = (
                <Link href={`malito:${item.config.email}`}>
                <GridItem colSpan={4}>
                  <Box
                  as="button"
                  w="43vw"
                  h="245px"
                  bg="gray.900"
                  color="white"
                  borderRadius="15px"
                >
                  <Icon as={MdEmail} w="1.75rem" h="1.75rem"></Icon>
                  <Text as="p">Email</Text>
                </Box>;
                </GridItem>
                </Link>
               );
                break;
              default:
                break;
            }

            return (
              
                <>
                {icon}
                </>
              
            );
          })}
        </Grid>
      ) : (
        <Stack direction={["column", "row"]} spacing="0.7rem" maxWidth="95%">
          {data.content_blocks.map((item) => {
            let content;
            switch (item.type) {
              case "video":
                content = (
                  <Link href={item.config.url} target="_blank">
                    <Box
                      as="button"
                      w="28.31rem"
                      h="15.31rem"
                      color="white"
                      borderRadius="15px"
                      bgImg="https://images.unsplash.com/photo-1501386761578-eac5c94b800a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                      _hover={{
                        transform: "scale(1.04, 1.08)",
                        transition: "0.5s",
                      }}
                      style={{ transition: "0.5s" }}
                    >
                      <Icon as={FaPlay} w="1.75rem" h="1.75rem"></Icon>
                    </Box>
                  </Link>
                );
                break;
              case "download":
                content = (
                  <Link href={item.config.url} target="_blank">
                    <Box
                      as="button"
                      w="11.5rem"
                      h="15.31rem"
                      bg="gray.900"
                      color="white"
                      borderRadius="10px"
                      _hover={{
                        transform: "scale(1.1, 1.1)",
                        transition: "0.5s",
                      }}
                      style={{ transition: "0.5s" }}
                    >
                      <Icon as={FaDownload} w="1.75rem" h="1.75rem"></Icon>
                      <Text as="p">{item.type_label}</Text>
                    </Box>
                  </Link>
                );
                break;
              case "external-link":
                content = (
                  <Link href={item.config.url} target="_blank">
                    <Box
                      as="button"
                      w="11.5rem"
                      h="15.31rem"
                      bg="gray.900"
                      color="white"
                      borderRadius="10px"
                      _hover={{
                        transform: "scale(1.1, 1.1)",
                        transition: "0.5s",
                      }}
                      style={{ transition: "0.5s" }}
                    >
                      <Icon
                        as={RiExternalLinkFill}
                        w="1.75rem"
                        h="1.75rem"
                      ></Icon>
                      <Text as="p">{item.type_label}</Text>
                    </Box>
                  </Link>
                );
                break;

              case "pix":
                content = (
                  <Link href={item.config.qrcode_image_url} target="_blank">
                    <Box
                      as="button"
                      w="11.5rem"
                      h="15.31rem"
                      bg="gray.900"
                      color="white"
                      borderRadius="10px"
                      _hover={{
                        transform: "scale(1.1, 1.1)",
                        transition: "0.5s",
                      }}
                      style={{ transition: "0.5s" }}
                    >
                      <Stack align="center" mb="2">
                        <Image
                          alt="pix image"
                          src="https://cdn.discordapp.com/attachments/480528577729658880/996823804439445514/Vector.svg"
                          boxSize="100px"
                          objectFit="cover"
                          w="1.75rem"
                          h="1.75rem"
                        />
                      </Stack>
                      <Text as="p">{item.type_label}</Text>
                    </Box>
                  </Link>
                );
                break;
              case "email":
                content = (
                  <Link href={`malito:${item.config.email}`} target="_blank">
                    <Box
                      as="button"
                      w="11.5rem"
                      h="15.31rem"
                      bg="gray.900"
                      color="white"
                      borderRadius="10px"
                      _hover={{
                        transform: "scale(1.1, 1.1)",
                        transition: "0.5s",
                      }}
                      style={{ transition: "0.5s" }}
                    >
                      <Icon as={MdEmail} w="1.75rem" h="1.75rem"></Icon>
                      <Text as="p">{item.type_label}</Text>
                    </Box>
                  </Link>
                );
                break;

              default:
                break;
            }
            return content;
          })}
        </Stack>
      )}
    </>
  );
}
