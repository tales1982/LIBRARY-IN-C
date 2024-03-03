import GlobalStyle from './globalStyles';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './page/home';
import Tools from './page/Tools/index';
import Libft from './page/Libft';
import HeaderFile from './page/HeaderFiles';

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
  },
  {
    path: '/HeaderFiles',
    element: <HeaderFile />
  }
]);

function App() {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={rotas} />
    </>
  );
}

export default App;

