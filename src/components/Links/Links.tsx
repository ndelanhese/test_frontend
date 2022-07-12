import { Box, Button, Flex, Grid, HStack, SimpleGrid } from "@chakra-ui/react";

export function Links() {
  return (
    <Flex p={4}>
      <SimpleGrid columns={[1, 5]} gap={2} minChildWidth="320px">
        <Box>
          <Button w="28.31rem" h="15.31rem"></Button>
        </Box>

        <Box>
          <Button w="11.5rem" h="15.31rem"></Button>
        </Box>
        <Box>
          <Button w="11.5rem" h="15.31rem"></Button>
        </Box>
        <Box>
          <Button w="11.5rem" h="15.31rem"></Button>
        </Box>
        <Box>
          <Button w="11.5rem" h="15.31rem"></Button>
        </Box>
      </SimpleGrid>
    </Flex>
  );
}
