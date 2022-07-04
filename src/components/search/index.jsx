import { Flex, Button, Input } from "@chakra-ui/react";
import { useState } from "react";
import useUser from "../../providers/infoUser";

const Seach = () => {
  const { setName } = useUser();
  const [username, setUsername] = useState("");

  return (
    <Flex p="6" justifyContent="center">
      <Input
        maxW="600px"
        variant="outline"
        placeholder="Digite um username"
        backgroundColor="var(--gray-ligth)"
        h="40px"
        _focusVisible={{ borderColor: "var(--orange)" }}
        onChange={(e) => setUsername(e.target.value)}
      />
      <Button
        backgroundColor="var(--orange)"
        borderRadius="5px"
        fontWeight="bold"
        color="var(--color-text)"
        ml="4"
        _hover={{ backgroundColor: "var(--orange)", opacity: "0.75" }}
        onClick={() => setName(username)}
      >
        Buscar
      </Button>
    </Flex>
  );
};

export default Seach;
