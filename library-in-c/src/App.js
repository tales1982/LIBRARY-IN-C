import GlobalStyle from './globalStyles'
//import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './page/home'
import Tools from './page/Tools/index'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: 'Tools',
    element: <Tools />
  }
])

function App() {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={rotas} />
    </>
  )
}
export default App
