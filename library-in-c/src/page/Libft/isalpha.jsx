import React from 'react'
import * as S from './styles'
import Header from '../../Components/Header/index'
import Footer from '../../Components/Footer/index'

const Isalpha = () => {
  return (
    <>
      <S.DivFunction >
        <Header />
        <S.FunctionH1>ft_isalpha</S.FunctionH1>
        <S.ContainerLibftFunction>
          <S.P>
            The ft_isalpha function checks whether a given integer value i
            represents an alphabet letter ( either uppercase or lowercase ) in C.
            If the passed value is a letter, the function returns 1; otherwise,
            it returns 0. It can be used to determine whether a character is
            alphabetic in C programs.
          </S.P>
          <S.ContainerInfo>
            <span>
              # <S.TextBlue>include </S.TextBlue>{' '}
              <S.TextGreen>{'"libft.h"'}</S.TextGreen>{' '}
            </span>
            <br />
            <span>
              <S.TextRed>int</S.TextRed> <S.TextRed2>ft_isalpha</S.TextRed2>(
              <S.TextRed> int </S.TextRed>i)
            </span>
            <span>{'{'}</span>
            <S.SpanTab>
              <S.TextBlue>if</S.TextBlue> ((<S.TextGreen> {"'a'"}</S.TextGreen>{' '}
              {'<'}= i && i {'<'}= <S.TextGreen>{"'z'"}</S.TextGreen> ) || (
              <S.TextGreen> {"'A'"} </S.TextGreen>
              {'<'}= i && i {'<'}= <S.TextGreen>{"'Z'"}</S.TextGreen>))
            </S.SpanTab>
            <S.SpanTab2>
              <S.TextBlue>return</S.TextBlue> (<S.TextRed2>1</S.TextRed2>)
            </S.SpanTab2>
            <S.SpanTab>
              <S.TextBlue>return</S.TextBlue> (<S.TextRed2>0</S.TextRed2>)
            </S.SpanTab>
            <span>{'}'}</span>
          </S.ContainerInfo>
          <S.P>
            The logic of the function is quite simple. It uses a conditional
            expression (if) to check if the value of i is within the range
            corresponding to alphabet characters. If i is in the range of
            lowercase letters {"( 'a' to 'z' )"} or in the range of uppercase letters
            {"( 'A' to 'Z' )"}, the function returns 1, indicating that the character
            is an alphabet letter. Otherwise, it returns 0, indicating that the
            character is not an alphabet letter.
          </S.P>
        </S.ContainerLibftFunction>
        <Footer />
      </S.DivFunction >
    </>
  )
}

export default Isalpha
