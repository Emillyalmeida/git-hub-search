import { Grid } from "@chakra-ui/react";
import useUser from "../../providers/infoUser";
import RepoItem from "../reposItem";

const Repos = () => {
  const { choose, repos, starred } = useUser();
  return (
    <Grid
      w="100%"
      templateColumns="repeat(auto-fill, minmax(300px,1fr))"
      gap={10}
      p="4"
      mt="4"
    >
      {(choose === "repos" ? repos : starred).map((repo) => (
        <RepoItem key={repo.id} repo={repo} />
      ))}
    </Grid>
  );
};

export default Repos;
