import { Button, Flex } from "@chakra-ui/react";
import useUser from "../../providers/infoUser";

const DivBtn = () => {
  const { setChoose } = useUser();

  return (
    <Flex justifyContent="center" p="2" gap="4">
      <Button
        backgroundColor="var(--gray-medium)"
        borderRadius="5px"
        fontWeight="bold"
        color="var(--color-text)"
        ml="4"
        _hover={{ backgroundColor: "var(--gray-medium)", opacity: "0.5" }}
        onClick={() => setChoose("repos")}
      >
        Repositorios
      </Button>
      <Button
        backgroundColor="var(--gray-medium)"
        borderRadius="5px"
        fontWeight="bold"
        color="var(--color-text)"
        ml="4"
        _hover={{ backgroundColor: "var(--gray-medium)", opacity: "0.5" }}
        onClick={() => setChoose("starred")}
      >
        Favoritos
      </Button>
    </Flex>
  );
};

export default DivBtn;
