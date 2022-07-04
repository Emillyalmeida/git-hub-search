import { Flex, Heading } from "@chakra-ui/react";
import { BsGithub } from "react-icons/bs";

const Header = () => {
  return (
    <Flex
      w="100%"
      color="var(--orange)"
      alignItems="center"
      justifyContent="center"
      p="8"
    >
      <BsGithub fontSize="3rem" />
      <Heading ml="1rem" fontSize={["3xl", "4xl"]}>
        GitHub Seach
      </Heading>
    </Flex>
  );
};

export default Header;
