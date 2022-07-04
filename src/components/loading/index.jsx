import {
  Flex,
  Grid,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
} from "@chakra-ui/react";

const Load = () => {
  return (
    <Flex flexDir="column">
      <Flex
        flexDir={["column", "column", "row"]}
        w="100%"
        padding="6"
        boxShadow="lg"
        gap="3"
        justifyContent="center"
        alignItems="center"
        backgroundColor="transparent"
      >
        <SkeletonCircle
          size="40"
          startColor="#fffcf2"
          endColor="#ccc5b9"
          m="0"
        />
        <SkeletonText
          m="0"
          w={["80%", "80%", "40%"]}
          mt="4"
          noOfLines={4}
          spacing="4"
          startColor="#fffcf2"
          endColor="#ccc5b9"
        />
      </Flex>
      <Grid
        w="100%"
        templateColumns="repeat(auto-fill, minmax(300px,1fr))"
        gap={10}
        p="4"
        mt="4"
      >
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
          <Skeleton
            key={num}
            startColor="#fffcf2"
            endColor="#ccc5b9"
            h="140px"
            borderRadius="7px"
          />
        ))}
      </Grid>
    </Flex>
  );
};

export default Load;
