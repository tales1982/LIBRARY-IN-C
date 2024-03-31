import GlobalStyle from './globalStyles'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Printf from './page/Printf'
import MakefilePrintf from './page/Function_Printf/makefile'
import HeaderPrntf from './page/Function_Printf/header'
import Printf_C from './page/Function_Printf/ft_print_c'
import Ft_pint_char_C from './page/Function_Printf/ft_print_char_c'
import Ft_print_hex from './page/Function_Printf/ft_print_hex'
import Ft_print_int from './page/Function_Printf/ft_print_int'
import Ft_print_point from './page/Function_Printf/ft_print_point'
import Ft_print_string from './page/Function_Printf/ft_string'
import Ft_print_unsigned from './page/Function_Printf/ft_print_unsigned'
import Home from './page/home'
import Tools from './page/Tools/index'
import Libft from './page/Libft'
import HeaderFile from './page/HeaderFiles'
import Struct from './page/Struct'
import Makefile from './page/Makefile'
import Ft_isalpha from './page/LIBFT/Ft_isalpha'
import Ft_isdigit from './page/LIBFT/Ft_isdigit'
import Ft_isalnum from './page/LIBFT/Ft_isalnum'
import Ft_isascii from './page/LIBFT/Ft_isascii'
import Ft_isprint from './page/LIBFT/Ft_isprint'
import Construcao from './page/Construcao'
import Ft_strlen from './page/LIBFT/Ft_strlen'
import Ft_memset from './page/LIBFT/Ft_memset'
import Ft_bzero from './page/LIBFT/Ft_bzero'
import Ft_memcpy from './page/LIBFT/Ft_memcpy'
import Ft_memmove from './page/LIBFT/Ft_memmove'
import Ft_strcpy from './page/LIBFT/Ft_strcpy'
import Ft_strlcat from './page/LIBFT/Ft_strlcat'
import Ft_toupper from './page/LIBFT/Ft_toupper'
import Ft_tolower from './page/LIBFT/Ft_tolower'
import Ft_strchr from './page/LIBFT/Ft_strchr'
import Ft_strrchr from './page/LIBFT/Ft_strrchr'
import Ft_strncmp from './page/LIBFT/Ft_strncmp'
import Ft_memchr from './page/LIBFT/Ft_memchr'
import Ft_memcmp from './page/LIBFT/Ft_memcmp'
import Ft_strnstr from './page/LIBFT/Ft_strnstr'
import Ft_atoi from './page/LIBFT/Ft_atoi'

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
    path: '/page/Function_printf/ft_print_c',
    element: <Printf_C />
  },
  {
    path: '/page/Function_printf/ft_print_char_c',
    element: <Ft_pint_char_C />
  },
  {
    path: '/page/Function_printf/ft_print_hex',
    element: <Ft_print_hex />
  },
  {
    path: '/page/Function_printf/ft_print_int',
    element: <Ft_print_int />
  },
  {
    path: '/page/Function_printf/ft_string',
    element: <Ft_print_string />
  },
  {
    path: '/page/Function_printf/ft_print_point',
    element: <Ft_print_point />
  },
  {
    path: '/page/Function_printf/ft_print_unsigned',
    element: <Ft_print_unsigned />
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
    path: '/LIBFT/Ft_isalpha',
    element: <Ft_isalpha />
  },
  {
    path: '/LIBFT/Ft_isdigit',
    element: <Ft_isdigit />
  },
  {
    path: '/LIBFT/Ft_isalnum',
    element: <Ft_isalnum />
  },
  {
    path: '/LIBFT/Ft_isascii',
    element: <Ft_isascii />
  },
  {
    path: '/LIBFT/Ft_isprint',
    element: <Ft_isprint />
  },
  {
    path: '/LIBFT/Ft_strlen',
    element: <Ft_strlen />
  },
  {
    path: '/LIBFT/Ft_memset',
    element: <Ft_memset />
  },
  {
    path: '/LIBFT/Ft_bzero',
    element: <Ft_bzero />
  },
  {
    path: '/LIBFT/Ft_memcpy',
    element: <Ft_memcpy />
  },
  {
    path: '/LIBFT/Ft_memmove',
    element: <Ft_memmove />
  },
  {
    path: '/LIBFT/Ft_strcpy',
    element: <Ft_strcpy />
  },
  {
    path: '/LIBFT/Ft_strlcat',
    element: <Ft_strlcat />
  },
  {
    path: '/LIBFT/Ft_toupper',
    element: <Ft_toupper />
  },
  {
    path: '/LIBFT/Ft_tolower',
    element: <Ft_tolower />
  },
  {
    path: '/LIBFT/Ft_strchr',
    element: <Ft_strchr />
  },
  {
    path: '/LIBFT/Ft_strrchr',
    element: <Ft_strrchr/>
  },
  {
    path: '/LIBFT/Ft_strncmp',
    element: <Ft_strncmp />
  },
  {
    path: '/LIBFT/Ft_memchr',
    element: <Ft_memchr />
  },
  {
    path: '/LIBFT/Ft_memcmp',
    element: <Ft_memcmp />
  },
  {
    path: '/LIBFT/Ft_strnstr',
    element: <Ft_strnstr />
  },
  {
    path: '/LIBFT/Ft_atoi',
    element: <Ft_atoi />
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
