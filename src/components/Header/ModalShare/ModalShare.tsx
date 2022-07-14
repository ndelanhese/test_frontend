import React from "react";
import {
  Button,
  Icon,
  Modal,
  ModalBody,
  Divider,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  Stack,
  Text,
  useDisclosure,
  useBreakpointValue,
 } from "@chakra-ui/react";

import { AiOutlineShareAlt } from "react-icons/ai";
import { useQuery } from 'react-query';
import { api } from '../../../services/api';
import Link from "next/link";


export function ModalShare() {
  const { data, isLoading } = useQuery("ModalShare", async () => {
    const response = await api.get("/profile");

    const data = await response.data;

    return data;
  });




  const isWideVersion = useBreakpointValue({
    base: true,
    lg: false,
  });

  function BackdropExample() {
    const OverlayOne = () => (
      <ModalOverlay
        bg="blackAlpha.300"
        backdropFilter="blur(10px) hue-rotate(90deg)"
      />
    );

    const { isOpen, onOpen, onClose } = useDisclosure();
    const [overlay, setOverlay] = React.useState(<OverlayOne />);

    function share() {
      if (navigator.share !== undefined) {
        navigator
          .share({
            title: "e-code",
            text: "e-code profile share",
            url: "https://test-frontend-vert.vercel.app/",
          })
          .then(() => console.log("Successful share"))
          .catch((error) => console.log("Error sharing", error));
      }
    }

    return (
      <>
        {!isWideVersion ? (
          <Button
            as="button"
            bg="transparent"
            border="1px solid white"
            borderRadius="5px"
            h="2.5rem"
            w="2.5rem"
            _hover={{
              background: "white",
              color: "black",
              transform: "scale(1.2, 1.2)",
              transition: "0.5s",
            }}
            style={{ transition: "0.5s" }}
            onClick={() => {
              setOverlay(<OverlayOne />);
              onOpen();
            }}
          >
            <Icon as={AiOutlineShareAlt} />
          </Button>
        ) : (
          <Button
            as="button"
            bg="transparent"
            h="1rem"
            w="1rem"
            onClick={share}
            style={{ textDecoration: "none" }}
          >
            <Icon
              as={AiOutlineShareAlt}
              h="1.125rem"
              w="1.125rem"
              mr="0.7rem"
              ml="0.8rem"
            />
            <Text style={{ textDecoration: "none" }}> Compartilhar</Text>
          </Button>
        )}

       
          { isLoading ? (
            <></>
          ) : (
             <Modal isCentered isOpen={isOpen} onClose={onClose}>
            {overlay}
            <ModalContent w="14.875rem" h="10.8125rem" border="2px solid black">
              <ModalBody>
                <Stack align="center">
                  <Link href={data.share_links.facebook}>
                  
                  <Button
                    onClick={onClose}
                    bg="transparente"
                    color="gray.900"
                    borderRadius="5px"
                  >
                    <Text fontSize="1rem" lineHeight="19px" fontWeight={400}>
                      Facebook
                    </Text>
                  </Button>
  
                  </Link>
  
                  <Divider w="14.6rem" border="1px solid" borderColor="black" />
  
                  <Link href={data.share_links.twitter}>
                  <Button
                    onClick={onClose}
                    bg="transparente"
                    color="gray.900"
                    borderRadius="5px"
                  >
                    <Text fontSize="1rem" lineHeight="19px" fontWeight={400}>
                      Twitter
                    </Text>
                  </Button>
                  </Link>
  
                  <Divider w="14.6rem" border="1px solid" borderColor="black" />
                  <Link href={data.share_links.whatsapp}>
                  <Button
                    onClick={onClose}
                    bg="transparente"
                    color="gray.900"
                    borderRadius="5px"
                  >
                    <Text fontSize="1rem" lineHeight="19px" fontWeight={400}>
                      WhatsApp
                    </Text>
                  </Button>
                  </Link>
                </Stack>
              </ModalBody>
              <ModalFooter></ModalFooter>
            </ModalContent> 
            </Modal>
          )}
       
      </>
    );
  }

  return <BackdropExample />;
}
