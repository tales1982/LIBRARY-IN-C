import React from 'react'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import * as S from './styles'

const Ft_print_char_C = () => {
  return (
    <S.ContainerMain>
      <Header />
      <S.H1>Ft_print_char.c</S.H1>
      <S.P>
        This function, named print_char, aims to print a character to the
        standard output (usually the terminal) and return 1. It is defined in C
        and utilizes the write function, which is a system call for data
        writing. {"Let's"} detail each part of the function:
      </S.P>
      <S.SectionInfo>
        <span>
          <S.Red>#include</S.Red> <S.Green>{'"ft_printf.h"'}</S.Green>
        </span>
        <br />
        <span>
          int{' '}
          <S.Lilas>
            <S.SpanTab>print_char</S.SpanTab>
          </S.Lilas>
          ( char c )
        </span>
        <span>{'{'}</span>
        <S.SpanTab>
          <S.Lilas>write 1, &c, </S.Lilas>(<S.Red>sizeof</S.Red>(char)) ;
        </S.SpanTab>

        <span>
          <S.SpanTab />
          <S.Red>return</S.Red> ( 1 );
        </span>
        <span>{'}'}</span>
      </S.SectionInfo>
      <br />
      <S.H3>Definition of the print_char function:</S.H3>
      <S.P>
      <S.Gold><S.Gold>° </S.Gold> </S.Gold> Return type int: The function returns an integer. In
        this case, it always returns the value 1, which could indicate success
        in printing the character or the number of characters printed.
      </S.P>
      <S.P>
        <S.Gold>° </S.Gold> Function name print_char: The name suggests that its
        purpose is to print a character.
      </S.P>
      <S.P>
        <S.Gold>° </S.Gold> Parameter (char c): The function takes a single
        parameter, c, of type char. This is the character that will be printed
        to the standard output.
      </S.P>
      <S.H3>Call to write(1, &c, sizeof(char)):</S.H3>
      <S.P>
        <S.Gold>° </S.Gold> The first argument, 1, represents the file descriptor
        for the standard output. In POSIX systems (like Linux and macOS), file
        descriptor 1 is reserved for standard output.
      </S.P>
      <S.P>
        <S.Gold>° </S.Gold> The second argument, &c, is the address of the
        character to be printed. This is necessary because the write function
        requires a pointer to the data that will be written.
      </S.P>
      <S.P>
        <S.Gold>° </S.Gold> The third argument, sizeof(char), specifies the
        number of bytes to be written. Since a char has a size of 1 byte, this
        ensures that only the provided character will be printed.
      </S.P>
      <S.H3>Return value return (1);</S.H3>
      <S.P>
        <S.Gold>° </S.Gold> After printing the character, the function returns 1.
        This value can be used to indicate that a character was successfully
        printed or to count the number of characters printed in a function that
        prints multiple characters.
      </S.P>
      <S.H3>In summary: </S.H3>
      <S.P>
        <S.Gold>° </S.Gold> print_char is a simple utility function that prints a single character
        to the standard output and returns 1, likely used
        within a larger implementation of an output formatting function, as a
        substitute for printf.
      </S.P>
      <br />
      <Footer />
    </S.ContainerMain>
  )
}
export default Ft_print_char_C
