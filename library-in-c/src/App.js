import GlobalStyle from './globalStyles'
//import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './page/home'
import Tools from './page/Tools/index'
import Libft from './page/Libft'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/Tools',
    element: <Tools />
  },
  {
    path: '/Libft',
    element: <Libft />
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
