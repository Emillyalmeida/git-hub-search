import { Flex, Button, Input } from "@chakra-ui/react";

const Seach = () => {
  return (
    <Flex p="6">
      <Input
        variant="outline"
        placeholder="Digite um username"
        backgroundColor="var(--gray-ligth)"
        h="40px"
        _focus={{ borderColor: "var(--orange)" }}
      />
      <Button
        backgroundColor="var(--orange)"
        borderRadius="5px"
        fontWeight="bold"
        color="var(--color-text)"
        ml="4"
        _hover={{ backgroundColor: "var(--orange)", opacity: "0.75" }}
      >
        Buscar
      </Button>
    </Flex>
  );
};

export default Seach;
