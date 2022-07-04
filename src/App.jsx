import { Flex } from "@chakra-ui/react";
import { useEffect } from "react";

import Container from "./components/container";
import Header from "./components/header";
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
          <h2>Loading</h2>
        ) : (
          <Flex flexDir="column">
            <Perfil User={User} />
            <DivBtn />
            <Repos />
          </Flex>
        )}
      </Container>
    </>
  );
};

export default App;
