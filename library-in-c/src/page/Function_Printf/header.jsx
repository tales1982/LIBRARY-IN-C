import React from 'react'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import * as S from './styles'

const HeaderPrntf = () => {
  return (
    <S.ContainerMain>
      <Header />
      <S.H1>ft_printf.h</S.H1>
      <S.P>
        This code is a snippet from a header file, typically named ft_printf.h,
        that is part of the implementation of a custom version of the printf
        function commonly found in the C standard library. This header file is
        used to declare the functions that will be implemented in other source
        files (likely including an ft_printf.c and associated files for each
        type of formatted output) and to ensure that these functions can be
        correctly included and used in other parts of the program or in other
        programs.
      </S.P>
      <S.H3>{"Let's"} examine the main components of this header file:</S.H3>
      <S.SectionInfo>
        <span>
          {' '}
          <S.Red>#ifndef </S.Red> <S.Green>FT_PRINTF_H</S.Green>
        </span>
        <span>
          {' '}
          <S.Red># define </S.Red>
          <S.Green>FT_PRINTF_H</S.Green>
        </span>
        <br />
        <span>
          {' '}
          <S.Red># include</S.Red>
          <S.Green>{' <stdarg.h>'}</S.Green>
        </span>
        <span>
          {' '}
          <S.Red># include </S.Red>
          <S.Green>{'"./libft/libft.h"'}</S.Green>
        </span>
        <br />
        <span>
          int{' '}
          <S.Margin>
            {' '}
            <S.Lilas>ft_printf</S.Lilas>( <S.Red>const</S.Red> char{' '}
            <S.Green>*</S.Green>input, ... );
          </S.Margin>
        </span>
        <span>
          int{' '}
          <S.Margin>
            <S.Lilas>print_pointer</S.Lilas>( unsigned long value, int asc );
          </S.Margin>
        </span>
        <span>
          int{' '}
          <S.Margin>
            <S.Lilas>print_unsigned</S.Lilas>( unsigned int nb );
          </S.Margin>
        </span>
        <span>
          int{' '}
          <S.Margin>
            <S.Lilas>print_string</S.Lilas>( char <S.Green>*</S.Green>s );
          </S.Margin>
        </span>
        <span>
          int{' '}
          <S.Margin>
            <S.Lilas>print_int</S.Lilas>( int n );
          </S.Margin>
        </span>
        <span>
          int{' '}
          <S.Margin>
            <S.Lilas>print_char</S.Lilas>( char c );
          </S.Margin>
        </span>
        <span>
          int{' '}
          <S.Margin>
            <S.Lilas>print_hex</S.Lilas>( unsigned int value, int asc );
          </S.Margin>
        </span>
        <S.Red>#endif</S.Red>
      </S.SectionInfo>
      <br />
      <br />
      <S.P>
        <S.Green>
          {'#ifndef FT_PRINTF_H, #define FT_PRINTF_H, and #endif:'}
        </S.Green>
        These lines are preprocessor directives that ensure the content of this
        file is included only once during compilation, avoiding issues with
        duplicate definitions. This pattern is known as an {'"include guard"'}.
      </S.P>
      <S.P>
        <S.Green>{"#include <stdarg.h>: "}</S.Green>Includes the standard library header stdarg.h, which provides functionalities for accessing a variable number of arguments passed to functions. This is essential for the implementation of functions like ft_printf that accept an indefinite number of arguments.
      </S.P>
      <S.P>
        <S.Green>{'#include "./libft/libft.h": '}</S.Green> Includes the header of the libft library, a library of helper functions that often accompanies C projects to extend the standard library with additional functions for string manipulation, memory, lists, etc. This path suggests that libft is located in a subdirectory called libft in the current directory.
      </S.P>{' '}
      <S.P>
      This header file plays a crucial role in the project, providing the interface through which other parts of the program can use the functionality of ft_printf and its related functions.
      </S.P>{' '}
          <br />
      <Footer />
    </S.ContainerMain>
  )
}
export default HeaderPrntf
