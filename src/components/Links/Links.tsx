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
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import { FaDownload, FaPlay } from "react-icons/fa";
import { RiExternalLinkFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";

export function Links() {
  const isWideVersion = useBreakpointValue({
    base: true,
    lg: false,
  });

  if (isWideVersion) {
    return (
      <Grid
        h="703.36px"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(4, 1fr)"
        gap={4}
      >
        
        <GridItem colSpan={4}>
          <Box
            as="button"
            w="390px"
            h="245px"
            color="white"
            borderRadius="15px"
            bgImg="https://images.unsplash.com/photo-1501386761578-eac5c94b800a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            bgColor="rgba(0,0,0,0.7)"
          >
            <Icon as={FaPlay} w="1.75rem" h="1.75rem"></Icon>
          </Box>
        </GridItem>
        

        
        <GridItem colSpan={2}>
          <Box
            as="button"
            w="184px"
            h="245px"
            bg="gray.900"
            color="white"
            borderRadius="15px"
          >
            <Icon as={FaDownload} w="1.75rem" h="1.75rem"></Icon>
            <Text as="p">Download</Text>
          </Box>
        </GridItem>
        <GridItem colSpan={2}>
          <Box
            as="button"
            w="184px"
            h="245px"
            bg="gray.900"
            color="white"
            borderRadius="15px"
          >
            <Icon as={RiExternalLinkFill} w="1.75rem" h="1.75rem"></Icon>
            <Text as="p">Link Externo</Text>
          </Box>
        </GridItem>

        <GridItem colSpan={2}>
          <Box
            as="button"
            w="184px"
            h="245px"
            bg="gray.900"
            color="white"
            borderRadius="15px"
          >
            <Image
              alt="pix image"
              src="https://cdn.discordapp.com/attachments/480528577729658880/996482866785558659/pix.png"
              boxSize="100px"
              objectFit="cover"
              w="1.75rem"
              h="1.75rem"
            />
            <Text as="p">Pix</Text>
          </Box>
        </GridItem>
        <GridItem colSpan={2}>
          <Box
            as="button"
            w="184px"
            h="245px"
            bg="gray.900"
            color="white"
            borderRadius="15px"
          >
            <Icon as={MdEmail} w="1.75rem" h="1.75rem"></Icon>
            <Text as="p">Email</Text>
          </Box>
        </GridItem>
      </Grid>
    );
  }

  return (
    <Stack direction={["column", "row"]} spacing="0.7rem" p={3}>
      <Box
        as="button"
        w="453px"
        h="245px"
        color="white"
        borderRadius="15px"
        bgImg="https://images.unsplash.com/photo-1501386761578-eac5c94b800a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        bgColor="rgba(0,0,0,0.7)"
      >
        <Icon as={FaPlay} w="1.75rem" h="1.75rem"></Icon>
      </Box>
      <Box
        as="button"
        w="184px"
        h="245px"
        bg="gray.900"
        color="white"
        borderRadius="15px"
      >
        <Icon as={FaDownload} w="1.75rem" h="1.75rem"></Icon>
        <Text as="p">Download</Text>
      </Box>
      <Box
        as="button"
        w="184px"
        h="245px"
        bg="gray.900"
        color="white"
        borderRadius="15px"
      >
        <Icon as={RiExternalLinkFill} w="1.75rem" h="1.75rem"></Icon>
        <Text as="p">Link Externo</Text>
      </Box>
      <Box
        as="button"
        w="184px"
        h="245px"
        bg="gray.900"
        color="white"
        borderRadius="15px"
      >
        <Image
          alt="pix image"
          src="https://cdn.discordapp.com/attachments/480528577729658880/996482866785558659/pix.png"
          boxSize="100px"
          objectFit="cover"
          w="1.75rem"
          h="1.75rem"
        />
        <Text as="p">Pix</Text>
      </Box>
      <Box
        as="button"
        w="184px"
        h="245px"
        bg="gray.900"
        color="white"
        borderRadius="15px"
      >
        <Icon as={MdEmail} w="1.75rem" h="1.75rem"></Icon>
        <Text as="p">Email</Text>
      </Box>
    </Stack>
  );
}
