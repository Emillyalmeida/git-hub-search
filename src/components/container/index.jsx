import { ChakraProvider, Flex } from "@chakra-ui/react";

const Container = ({ children }) => {
  return (
    <ChakraProvider>
      <Flex flexDir="column" h="100vh" w="100%">
        {children}
      </Flex>
    </ChakraProvider>
  );
};

export default Container;
