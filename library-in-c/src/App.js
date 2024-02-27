import Header from "./Components/Header"
import GlobalStyle from "./globalStyles"
import SectionHome from "./Components/SectionHome/index"
import { Container } from "./Components/Container/styles"

function App() {
  return <>
  <GlobalStyle />
  <Header />
  <Container>
  <SectionHome />
  </Container>
  </>
}

export default App
