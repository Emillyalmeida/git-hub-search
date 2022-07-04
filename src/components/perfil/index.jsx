import { Center, Flex, Heading, HStack, Image, Text } from "@chakra-ui/react";

const Perfil = ({ User }) => {
  const {
    avatar_url,
    login,
    location,
    name,
    public_repos,
    followers,
    following,
    public_gists,
    html_url,
  } = User;
  return (
    <Flex
      p="4"
      gap="2rem"
      color="var(--color-text)"
      justifyContent="center"
      alignItems="center"
      flexDir={["column", "column", "row"]}
    >
      <Image
        w="200px"
        h="200px"
        borderRadius="50%"
        src={avatar_url}
        alt={name}
      />
      <Flex
        flexDir="column"
        alignItems={["center", "center", "stretch"]}
        gap="3"
      >
        <Heading color="var(--orange)" fontSize="2xl">
          {name}
        </Heading>
        <Text fontSize="lg" _hover={{ textDecoration: "underline" }}>
          <a href={html_url} target="_blank" rel="noreferrer">
            Username: {login}
          </a>
        </Text>
        <Text fontSize="lg">Localização: {location}</Text>
        <HStack spacing="3">
          <Center flexDir="column" fontWeight="bold">
            <Text color="var(--orange)">Seguidores</Text>
            <Text>{followers}</Text>
          </Center>
          <Center flexDir="column" fontWeight="bold">
            <Text color="var(--orange)">Seguindo</Text>
            <Text>{following}</Text>
          </Center>
          <Center flexDir="column" fontWeight="bold">
            <Text color="var(--orange)">Gists</Text>
            <Text>{public_gists}</Text>
          </Center>
          <Center flexDir="column" fontWeight="bold">
            <Text color="var(--orange)">Repos</Text>
            <Text>{public_repos}</Text>
          </Center>
        </HStack>
      </Flex>
    </Flex>
  );
};

export default Perfil;
