import GlobalStyle from './globalStyles';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './page/home';
import Tools from './page/Tools/index';
import Libft from './page/Libft';
import HeaderFile from './page/HeaderFiles';
import Struct from './page/Struct';
import Makefile from './page/Makefile';
import Ft_isalpha from './page/Ft_isalpha';
import Ft_isdigit from './page/Ft_isdigit';
import Ft_isalnum from './page/Ft_isalnum';
import Ft_isascii from './page/Ft_isascii';
import Ft_isprint from './page/Ft_isprint';
import Construcao from './page/Construcao';
import Ft_strlen from './page/Ft_strlen';

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/Construcao',
    element: <Construcao />
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
  },
  {
    path: '/Struct',
    element: <Struct />
  },
  {
    path: '/Makefile',
    element: <Makefile />
  },
  {
    path: '/Ft_isalpha',
    element: <Ft_isalpha />
  },
  {
    path: '/Ft_isdigit',
    element: <Ft_isdigit />
  },
  {
    path: '/Ft_isalnum',
    element: <Ft_isalnum />
  },
  {
    path: '/Ft_isascii',
    element: <Ft_isascii />
  },
  {
    path: '/Ft_isprint',
    element: <Ft_isprint />
  },
  {
    path: '/Ft_strlen',
    element: <Ft_strlen />
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

