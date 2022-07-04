import Container from "./components/container";
import Header from "./components/header";
import Seach from "./components/search";
import GlobalStyle from "./styles/global";

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Header />
        <Seach />
      </Container>
    </>
  );
}

export default App;
