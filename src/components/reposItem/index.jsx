import { Box, Flex, Heading, Link, Text, VStack } from "@chakra-ui/react";

const RepoItem = ({ repo }) => {
  const { name, html_url, language, full_name } = repo;
  return (
    <Box
      borderWidth="1px"
      borderColor="var(--gray-ligth)"
      borderRadius="7px"
      backgroundColor="var(--gray-medium)"
      boxShadow="base"
      padding="6"
      w={["90%", "auto"]}
    >
      <VStack spacing="3" color="var(--gray-ligth)">
        <Heading fontSize="xl" fontWeight="bold" color="var(--orange)">
          {name}
        </Heading>
        <Flex>
          <Text>Link: </Text>
          <Link ml="1" href={html_url} target="_blank" rel="noreferrer">
            {full_name}
          </Link>
        </Flex>
        <Flex>
          <Text>Linguagem: </Text>
          <Text ml="1" color="var(--orange)">
            {language}
          </Text>
        </Flex>
      </VStack>
    </Box>
  );
};

export default RepoItem;
