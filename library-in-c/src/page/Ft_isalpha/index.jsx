import React from 'react'
import * as S from './styles'
import Header from '../../Components/Header/index'
import Footer from '../../Components/Footer/index'

const Ft_isalpha = () => {
  return (
    <S.ContainerMain>
      <Header />

      <S.H1>ft_isalpha</S.H1>
      <S.P>
        The <S.Gold>ft_isalpha</S.Gold> function checks whether a given integer
        value i represents an alphabet letter ( either uppercase or lowercase )
        in C. If the passed value is a letter, the function{' '}
        <S.Gold>returns 1</S.Gold> ; otherwise, it <S.Gold>returns 0</S.Gold>.
        It can be used to determine whether a character is alphabetic in C
        programs.
      </S.P>
      <S.SectionInfo>
        <span>
        <S.Red># include</S.Red>

        <S.Green>{' "libft.h"'}</S.Green>
        </span>
        <br />
        <span>int <S.Lilas>ft_isalpha</S.Lilas> ( int i )</span>
        <span>{'{'}</span>
        <S.SpanTab>
        <S.Red>if</S.Red> (({" 'a' "} <S.Green>{'<'}=</S.Green> i <S.Green>&&</S.Green> i {'<'}= {" 'z' "} ) <S.Green>| | </S.Green>({" 'A' "}
        <S.Green>{'<'}=</S.Green> i <S.Green>&& </S.Green>i <S.Green>{'<'}= </S.Green>{" 'Z' "} ))
        </S.SpanTab>
        <S.SpanTab2><S.Red>return </S.Red>( 1 );</S.SpanTab2>
        <S.SpanTab><S.Red>return </S.Red>( 0 );</S.SpanTab>
        <span>{'}'}</span>
      </S.SectionInfo>
      <br />
      <br />
      <S.P>
        The logic of the function is quite simple. It uses a conditional
        expression <S.Gold>( if )</S.Gold> to check if the value of i is within
        the range corresponding to alphabet characters. If i is in the range of
        lowercase letters <S.Gold>{"( 'a' to 'z' )"}</S.Gold> or in the range of
        uppercase letters
        <S.Gold>{"( 'A' to 'Z' )"}</S.Gold>, the function returns 1, indicating
        that the character is an alphabet letter. Otherwise, it returns 0,
        indicating that the character is not an alphabet letter.
      </S.P>
      <Footer />
    </S.ContainerMain>
  )
}

export default Ft_isalpha
