import React from 'react'
import Header from '../../../Components/Header'
import Footer from '../../../Components/Footer'
import * as S from './styles'
const Ft_isdigit = () => {
  return (
    <S.ContainerMain>
      <Header />
      <S.H1>ft_isdigit</S.H1>
      <S.P>
        This function aims to check if a character represented by an integer
        value ( int ) falls within the range corresponding to decimal digits (
        {" '0' to '9' "}). <br />
        The function has the following implementation:
      </S.P>
      <S.SectionInfo>
        <span>
          <S.Red># include </S.Red> <S.Green>{'"libft.h"'}</S.Green>{' '}
        </span>
        <br />
        <span>
          int <S.Lilas>ft_isdigit</S.Lilas>( int i )
        </span>
        <span>{'{'}</span>
        <S.SpanTab>
          <S.Red>while</S.Red>( {"'0'"}
          <S.Green>{' <'}= </S.Green>i <S.Green>&&</S.Green>{' '}
          <S.Green>{' <'}= </S.Green>
          {" '9' "} )
        </S.SpanTab>
        <S.SpanTab2>
          <S.Red>return</S.Red> ( 1 );
        </S.SpanTab2>
        <S.SpanTab>
          <S.Red>return</S.Red> ( 0 );
        </S.SpanTab>
        <span>{'}'}</span>
      </S.SectionInfo>
      <S.Ul>
        <S.Li>
          <S.Gold>° </S.Gold>Argument and Return: The function takes an argument
          i, which is an integer value.
        </S.Li>
        <S.Li>
          <S.Gold>° </S.Gold> It returns an integer: 1 if the character
          represented by i is a digit, and 0 otherwise.
        </S.Li>
        <S.Li>
          <S.Gold>° </S.Gold>Contrul Structure (while): The function uses a
          while loop to check if the value of i is within the range of digits (
          {" '0' to '9' "})
        </S.Li>
        <S.Li>
          <S.Gold>° </S.Gold>Condition in the Loop: The loop condition ( {"'0'"}
          {' <'}= i && {' <'}= {" '9' "}) checks if the value of i is within the
          range of characters corresponding to decimal digits.
        </S.Li>
        <S.Li>
          <S.Gold>° </S.Gold>Return (Break in the Loop): If the loop condition
          is true, the function immediately returns the value 1, indicating that
          the character is a digit.
        </S.Li>
        <S.Li>
          <S.Gold>° </S.Gold>Default Return: If the loop is not executed (i.e.,
          if i is not within the range of digits), the function returns the
          value 0.
        </S.Li>
        <S.Li>
          <S.Gold>° </S.Gold>In summary, the isdigit function checks if the
          provided integer value represents a decimal digit. If yes, it return (
          1 ) ; if not, it return ( 0 ) ;
        </S.Li>
        <S.Li>
          <S.Gold>° </S.Gold>
          This function is a simplified implementation of the isdigit function
          in the standard C library. Note that the standard implementation of
          this function typically takes an argument of type int and returns a
          non-zero value (true) if the character is a digit, and zero (false)
          otherwise.
        </S.Li>
      </S.Ul>

      <Footer />
    </S.ContainerMain>
  )
}

export default Ft_isdigit
