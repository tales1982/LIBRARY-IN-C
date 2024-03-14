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
import Ft_memset from './page/Ft_memset';
import Ft_bzero from './page/Ft_bzero';
import Ft_memcpy from './page/Ft_memcpy';
import Ft_memmove from './page/Ft_memmove';
import Ft_strcpy from './page/Ft_strcpy';
import Ft_strlcat from './page/Ft_strlcat';
import Printf from './page/Printf';
import MakefilePrintf from './page/Function_Printf/makefile';
import HeaderPrntf from './page/Function_Printf/header';
import Printf_C from './page/Function_Printf/ft_printc';
import Ft_toupper from './page/Ft_toupper';

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
    path: '/Printf',
    element: <Printf />
  },
  {
    path: '/page/Function_printf/makefile',
    element: <MakefilePrintf />
  },
  {
    path: '/page/Function_printf/header',
    element: <HeaderPrntf />
  },
  {
    path: '/page/Function_printf/ft_printc',
    element: <Printf_C />
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
  },
  {
    path: '/Ft_memset',
    element: <Ft_memset />
  },
  {
    path: '/Ft_bzero',
    element: <Ft_bzero />
  },
  {
    path: '/Ft_memcpy',
    element: <Ft_memcpy />
  },
  {
    path: '/Ft_memmove',
    element: <Ft_memmove />
  },
  {
    path: '/Ft_strcpy',
    element: <Ft_strcpy />
  },
  {
    path: '/Ft_strlcat',
    element: <Ft_strlcat />
  },
  {
    path: '/Ft_toupper',
    element: <Ft_toupper />
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

