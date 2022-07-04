import { Box, Heading, Text } from "@chakra-ui/react";
import { AiFillWarning } from "react-icons/ai";

const NotFound = () => {
  return (
    <Box
      backgroundColor="var(--gray-medium)"
      color="var(--orange)"
      p="8"
      w={["300px", "300px", "400px"]}
      mt="10"
      borderRadius="8px"
      alignItems="center"
      display="flex"
      flexDir="column"
    >
      <AiFillWarning fontSize="5rem" />
      <Heading mt="2" fontSize="2xl" textAlign="center">
        Usuario não encontrado
      </Heading>
      <Text mt="2">Tente novamente</Text>
    </Box>
  );
};

export default NotFound;
