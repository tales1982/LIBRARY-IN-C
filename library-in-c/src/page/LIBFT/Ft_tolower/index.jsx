import React from 'react'
import Header from '../../../Components/Header'
import Footer from '../../../Components/Footer'
import * as S from './styles'

const Ft_tolower = () => {
  return (
    <S.ContainerMain>
      <Header />
      <S.H1>ft_tolower</S.H1>
      <S.P>
        The ft_tolower function in C is a custom implementation that mirrors the
        functionality of the standard tolower function found in the C library.
        Its purpose is to convert an uppercase alphabetic character to its
        lowercase counterpart. {"Let's"} break down how this function operates:
      </S.P>
      <S.SectionInfo>
        <span>
          <S.Red># include</S.Red> <S.Green>{'"libft.h"'}</S.Green>
        </span>
        <br />
        <span>
          int <S.Lilas>ft_tolower</S.Lilas>( int i )
        </span>
        <span>{'{'}</span>
        <S.SpanTab>
          {' '}
          <S.Red>if </S.Red> ( i <S.Green>{'>='}</S.Green> {"'A'"}
          <S.Green> &&</S.Green> i <S.Green>{'<='} </S.Green> {"'Z'"} )
        </S.SpanTab>
        <S.SpanTab>
          <S.Red>return</S.Red> ( i <S.Green>+</S.Green> 32 );
        </S.SpanTab>
        <S.SpanTab>
          <S.Red>return </S.Red>( i );
        </S.SpanTab>
        <span>{'}'}</span>
      </S.SectionInfo>
      <br />
      <br />
      <S.H3>Function Parameter</S.H3>
      <S.P>
        <S.Gold>° </S.Gold>The function accepts an integer i as its argument. In
        the context of C programming, characters are essentially treated as
        small integers, typically represented by the char type, which is usually
        1 byte in size. Therefore, this function can receive the ASCII code of a
        character as its input.{' '}
      </S.P>
      <S.P>
        <S.Gold>° </S.Gold>Condition Check: {" ( if (i >= 'A' && i <= 'Z' ))"}:
        This line checks whether the value of i falls within the range of
        uppercase alphabetic characters according to the ASCII table. In ASCII,{' '}
        {"'A'"} has a value of 65, and {"'Z'"} has a value of 90. If i
        represents a character within this range, the condition evaluates to
        true.
      </S.P>
      <S.P>
        <S.Gold>° </S.Gold>Conversion to Lowercase ( return ( i + 32 ) ; ): If the condition is true, indicating that i is an
        uppercase letter, the function executes return (i + 32);. The rationale
        behind adding 32 to the value of i is based on the difference between
        the ASCII values of uppercase and lowercase letters, which is 32. For
        instance, the ASCII value of {"'A'"} is 65, and the ASCII value of{' '}
        {"'a'"} is 97. Thus, adding 32 to an uppercase {"letter's "}ASCII code
        converts it to its lowercase equivalent.
      </S.P>
      <S.P>
        <S.Gold>° </S.Gold>Returning the Original Value ( return ( i ) ;) : If i does not represent an uppercase letter (
        meaning it does not fall within the range from {"'A' "}to {"'Z'"} ), the
        function simply returns the original value of i. This means that
        lowercase letters, digits, symbols, and any other characters not
        classified as uppercase letters are returned unchanged.
      </S.P>
      <S.P>
        <S.Gold>° </S.Gold>In essence: ft_tolower serves to convert an uppercase character
        to lowercase. If the input character is not an uppercase letter or is
        not an alphabetic character at all, it is returned without any
        modification
      </S.P>
      <br />
      <Footer />
    </S.ContainerMain>
  )
}

export default Ft_tolower
