import Header from "./Components/Header"
import GlobalStyle from "./globalStyles"
import { Container } from "./Components/Container/styles"

function App() {
  return <>
  <GlobalStyle />
  <Header />
  <Container>
    <aside>
      ola
    </aside>
    <section>
      texte
    </section>
  </Container>
  </>
}

export default App
