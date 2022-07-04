import { Flex } from "@chakra-ui/react";
import { useEffect } from "react";

import Container from "./components/container";
import Header from "./components/header";
import Load from "./components/loading";
import NotFound from "./components/notFound";
import Perfil from "./components/perfil";
import Repos from "./components/repositories";
import Seach from "./components/search";
import DivBtn from "./components/sectionBtn";

import useUser from "./providers/infoUser";

import GlobalStyle from "./styles/global";

const App = () => {
  const { loading, User, LoadingUser } = useUser();

  useEffect(() => {
    LoadingUser();
  }, [LoadingUser]);
  return (
    <>
      <GlobalStyle />
      <Container>
        <Header />
        <Seach />
        {loading ? (
          <Load />
        ) : (
          <Flex flexDir="column" alignItems="center">
            {User.name ? (
              <>
                <Perfil User={User} />
                <DivBtn />
                <Repos />
              </>
            ) : (
              <NotFound />
            )}
          </Flex>
        )}
      </Container>
    </>
  );
};

export default App;
