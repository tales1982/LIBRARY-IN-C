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
      <S.H3>Function Parameter <S.Gold>(int i)</S.Gold>:</S.H3>
      <S.P>
        °The function accepts an integer i as its argument. In the context of C
        programming, characters are essentially treated as small integers,
        typically represented by the char type, which is usually 1 byte in size.
        Therefore, this function can receive the ASCII code of a character as
        its input.{' '}
      </S.P>
      <S.H3>Condition Check:
        {' '}
        <S.Gold>{" ( if (i >= 'A' && i <= 'Z' ))"}</S.Gold>:
      </S.H3>
      <S.P>° This line checks whether the value of i falls within the range of uppercase alphabetic characters according to the ASCII table. In ASCII, <S.Gold>{"'A'"}</S.Gold> has a value of <S.Gold>65</S.Gold>, and <S.Gold>{"'Z'"}</S.Gold> has a value of <S.Gold>90</S.Gold>. If i represents a character within this range, the condition evaluates to true.</S.P>
      <S.H3>Conversion to Lowercase  <S.Gold>( return ( i + 32 ) ; )</S.Gold>:</S.H3>
      <S.P>° If the condition is true, indicating that i is an uppercase letter, the function executes  <S.Gold>return (i + 32)</S.Gold>;. The rationale behind adding  <S.Gold>32</S.Gold> to the value of i is based on the difference between the ASCII values of uppercase and lowercase letters, which is  <S.Gold>32</S.Gold>. For instance, the ASCII value of  <S.Gold>{"'A'"}</S.Gold> is  <S.Gold>65</S.Gold>, and the ASCII value of  <S.Gold>{"'a'"} </S.Gold>is <S.Gold>97</S.Gold>. Thus, adding <S.Gold>32</S.Gold> to an uppercase {"letter's "}ASCII code converts it to its lowercase equivalent.</S.P>
      <S.H3>Returning the Original Value <S.Gold>( return ( i ) ;) </S.Gold>:</S.H3>
      <S.P>° If <S.Gold>i </S.Gold>does not represent an uppercase letter ( meaning it does not fall within the range from <S.Gold>{"'A' "}</S.Gold>to <S.Gold>{"'Z'"}</S.Gold> ), the function simply returns the original value of i. This means that lowercase letters, digits, symbols, and any other characters not classified as uppercase letters are returned unchanged.</S.P>
      <S.H3>In essence</S.H3>
      <S.P>° <S.Gold>ft_tolower</S.Gold> serves to convert an uppercase character to lowercase. If the input character is not an uppercase letter or is not an alphabetic character at all, it is returned without any modification</S.P>
    <br />
      <Footer />
    </S.ContainerMain>
  )
}

export default Ft_tolower
