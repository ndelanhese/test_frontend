import {  HStack,Input, Stack, Text } from "@chakra-ui/react";
import {useState} from "react"
import { ModalConfirmation } from "./ModalConfirmation";

export function Newsletter() {

  const [input, setInput] = useState("")

  function handleOnChange(e){
    setInput(e.target.value)
  }


 
  
  return (
    <Stack as="form" w={["21rem", "23.375rem"]}>
      <Text as="label" fontSize="0.875rem">
        Inscrevasse na nossa newsletter
      </Text>
      <HStack gap={["1", "3"]}>
        <Input placeholder="Endereço de e-mail" type="email" value={input} onChange={handleOnChange}/>

        <ModalConfirmation text={input} />
      </HStack>
    </Stack>
  );
}
