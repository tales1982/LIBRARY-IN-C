import React from 'react'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import * as S from './styles'

const Ft_print_string = () => {
  return (
    <S.ContainerMain>
      <Header />
      <S.H1>print_string</S.H1>
      <S.P>
        The print_string function, as the name suggests, is designed to print a
        string s and return the number of characters printed. The function
        follows this logic:
      </S.P>
      <S.SectionInfo>
        <span>
          <S.Red>#include</S.Red> <S.Green>{'"ft_printf.h"'}</S.Green>
        </span>
        <br />
        <span>
          int <S.SpanTab /> <S.Lilas>print_string</S.Lilas>( char{' '}
          <S.Green>*</S.Green>s )
        </span>
        <span>{'{'}</span>
        <S.SpanTab>
          {' '}
          unsigned int <S.SpanTab />
          i;
        </S.SpanTab>
        <S.SpanTab></S.SpanTab>
        <S.SpanTab>
          {' '}
          i <S.Green>=</S.Green> 0;
        </S.SpanTab>
        <S.SpanTab>
          {' '}
          if ( <S.Green>!</S.Green>s )
        </S.SpanTab>
        <S.SpanTab> {'{'}</S.SpanTab>
        <S.SpanTab>
          <S.SpanTab /> <S.Lilas>write</S.Lilas>(1,{' '}
          <S.Green>{'"(null)"'}</S.Green>, 6);
        </S.SpanTab>
        <S.SpanTab>
          <S.SpanTab /> <S.Red>return</S.Red> ( 6 ) ;
        </S.SpanTab>
        <S.SpanTab> {'}'}</S.SpanTab>
        <S.SpanTab>
          {' '}
          <S.Red>while</S.Red> ( s[ i ] <S.Green>!= </S.Green>
          {"'\\0'"} )
        </S.SpanTab>
        <S.SpanTab> {'{'}</S.SpanTab>
        <S.SpanTab>
          <S.SpanTab /> i<S.Green>++</S.Green>;
        </S.SpanTab>
        <S.SpanTab> {' }'}</S.SpanTab>
        <S.SpanTab>
          {' '}
          <S.Lilas>write</S.Lilas>( 1, s, i );
        </S.SpanTab>
        <S.SpanTab>
          {' '}
          <S.Red>return</S.Red> ( i ) ;
        </S.SpanTab>
        <span>{'}'}</span>
      </S.SectionInfo>
      <br />
      <br />
      <S.P>
        <S.Gold>
          <S.Gold>° </S.Gold>{' '}
        </S.Gold>
        Initialization: The function starts by initializing an unsigned int
        variable i to 0. This variable is used to count the number of characters
        in the string.
      </S.P>
      <S.P>
        <S.Gold>° </S.Gold> Null Check: The function checks if the string s is
        NULL. If it is, it prints the string {'"(null)"'} to file descriptor 1
        (usually, the terminal or stdout) and returns 6, which is the number of
        characters in {'"(null)"'}. This step ensures that the function
        gracefully handles null strings, avoiding undefined behavior.
      </S.P>
      <S.P>
        <S.Gold>° </S.Gold> Character Counting : If s is not NULL, the function
        enters a while loop that continues until the current character of the
        string ( indicated by s[ i ] ) is the null character \0, which marks the
        end of a string in C. In each iteration of the loop, i is incremented,
        effectively counting the number of characters in the string.
      </S.P>
      <S.P>
        <S.Gold>° </S.Gold> String Printing : After counting the number of
        characters, the function uses the write function to print the string s
        to file descriptor 1. It passes i as the number of bytes to write,
        ensuring that only the characters of the string (excluding the final
        null character) are printed.
      </S.P>
      <S.P>
        <S.Gold>° </S.Gold> Return: Finally :, the function returns i, the
        number of characters in the string (not including the final null
        character). This allows calls to the function to know how many
        characters were printed, which can be useful for character counting or
        for verifying the success of the printing.
      </S.P>

      <S.P>
        <S.Gold>° </S.Gold> In summary : print_string is a simple utility
        function that prints a string to stdout and returns the length of the
        printed string, properly handling null strings by printing {'"(null)"'}{' '}
        in those cases.
      </S.P>
      <br />
      <Footer />
    </S.ContainerMain>
  )
}
export default Ft_print_string
