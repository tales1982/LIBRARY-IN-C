import React from 'react'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import * as S from './styles'

const Ft_isdigit = () => {
  return (
    <S.ContainerMain>
      <Header />
      <S.H1>ft_isdigit.c</S.H1>
      <S.P>
        This function aims to check if a character represented by an integer
        value (int) falls within the range corresponding to decimal digits (
        <S.TextGreen>{" '0' to '9' "}</S.TextGreen>). <br />
        The function has the following implementation:
      </S.P>
      <S.SectionInfo>
        <span>
          # <S.TextBlue>include </S.TextBlue>{' '}
          <S.TextGreen>{'"libft.h"'}</S.TextGreen>{' '}
        </span>
        <br />
        <span>
          <S.TextRed>int</S.TextRed> <S.TextRed2>ft_isdigit</S.TextRed2>(
          <S.TextRed> int </S.TextRed>i )
        </span>
        <span>{'{'}</span>
        <S.SpanTab>
          <S.TextBlue>while</S.TextBlue>( <S.TextGreen>{"'0'"}</S.TextGreen>
          {' <'}= i && {' <'}= <S.TextGreen>{" '9' "} </S.TextGreen>)
        </S.SpanTab>
        <S.SpanTab2>
          <S.TextBlue>return</S.TextBlue> (<S.TextRed2> 1 </S.TextRed2>);
        </S.SpanTab2>
        <S.SpanTab>
          <S.TextBlue>return</S.TextBlue> (<S.TextRed2> 0 </S.TextRed2>);
        </S.SpanTab>
        <span>{'}'}</span>
      </S.SectionInfo>
      <S.Ul>
        <S.H3>1° - Argument and Return:</S.H3>
        <S.Li>
          The function takes an argument i, which is an integer value.
        </S.Li>
        <S.Li>
          It returns an integer: 1 if the character represented by i is a digit,
          and 0 otherwise.
        </S.Li>
        <S.H3>2° - Contrul Structure (while):</S.H3>
        <S.Li>
          The function uses a while loop to check if the value of i is within
          the range of digits (<S.TextGreen>{" '0' to '9' "}</S.TextGreen>)
        </S.Li>
        <S.H3>3° - Condition in the Loop:</S.H3>
        <S.Li>
          The loop condition ( <S.TextGreen>{"'0'"}</S.TextGreen>
          {' <'}= i && {' <'}= <S.TextGreen>{" '9' "}</S.TextGreen>) checks if
          the value of i is within the range of characters corresponding to
          decimal digits.
        </S.Li>
        <S.H3>4° - Return (Break in the Loop):</S.H3>
        <S.Li>
          If the loop condition is true, the function immediately returns the
          value 1, indicating that the character is a digit.
        </S.Li>
        <S.H3>5° - Default Return:</S.H3>
        <S.Li>
          If the loop is not executed (i.e., if i is not within the range of
          digits), the function returns the value 0.
        </S.Li>
        <S.P>
          In summary, the isdigit function checks if the provided integer value
          represents a decimal digit. If yes, it <S.TextBlue>return</S.TextBlue>{' '}
          (<S.TextRed2>1</S.TextRed2>); if not, it{' '}
          <S.TextBlue>return</S.TextBlue> (<S.TextRed2>0</S.TextRed2>);
          <br />
          <br />
          This function is a simplified implementation of the isdigit function
          in the standard C library. Note that the standard implementation of
          this function typically takes an argument of type int and returns a
          non-zero value (true) if the character is a digit, and zero (false)
          otherwise.
        </S.P>
      </S.Ul>
      <Footer />
    </S.ContainerMain>
  )
}

export default Ft_isdigit
