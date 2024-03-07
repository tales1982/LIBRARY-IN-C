import React from 'react'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import * as S from './styles'

const Ft_isprint = () => {
  return (
    <S.ContainerMain>
      <Header />
      <S.H1>ft_isprint.c</S.H1>
      <S.P>
        The ft_isprint function is a custom implementation of the isprint
        function. The isprint function in C is part of the standard C library,
        specifically the {'<ctype.h>'} library, and is used to check whether a
        character is printable or not. A printable character is any character
        that occupies a visible position in the display space of a display
        device, such as a computer screen or paper, when printed. This includes
        letters (uppercase and lowercase), digits, punctuation, and other
        special characters, as well as the white space (but does not include
        control characters). The function signature is as follows:
      </S.P>
      <S.H3>The function signature is as follows:</S.H3>

      <S.SectionInfo>
        <span>
          <S.TextRed>int</S.TextRed> <S.TextRed2>ft_isprint</S.TextRed2>(
          <S.TextRed> int </S.TextRed>i );
        </span>
      </S.SectionInfo>
      <br />
      <S.P>
        The c parameter is an integer representing a character (normally an
        unsigned char converted to int or EOF) that will be checked by the
        function. If the character is a printable character, including white
        space, the function returns a nonzero value (true). If the character is
        not printable, the function returns zero (false).
      </S.P>
      <S.H3>Here is an example of the ft_isprint function:</S.H3>
      <S.SectionInfo>
        <span>
          # <S.TextBlue>include </S.TextBlue>{' '}
          <S.TextGreen>{'"libft.h"'}</S.TextGreen>{' '}
        </span>
        <br />
        <span>
          <S.TextRed>int</S.TextRed> <S.TextRed2>ft_isprint</S.TextRed2>(
          <S.TextRed> int </S.TextRed>i )
        </span>
        <span>{'{'}</span>
        <S.SpanTab>
          <S.TextBlue>if </S.TextBlue>( i{' >'}= <S.TextGreen>32 </S.TextGreen>{' '}
          && i {' <'}= <S.TextGreen>126 </S.TextGreen>)
        </S.SpanTab>
        <S.SpanTab2>
          <S.TextBlue>return</S.TextBlue> (<S.TextRed2> 1 </S.TextRed2>);
        </S.SpanTab2>
        <S.SpanTab>
          <S.TextBlue>return</S.TextBlue> (<S.TextRed2> 0 </S.TextRed2>);
        </S.SpanTab>
        <span>{'}'}</span>
      </S.SectionInfo>
      <br />
            <S.P>In summary, the isprint function is a crucial component of the standard C library, whose utility goes beyond merely checking for printable characters, contributing to the creation of more intuitive user interfaces, safer text processing, and more adaptable software. Whether used in its standard form or through custom implementations, it exemplifies the elegance and efficiency that are characteristic of programming in C.</S.P>
      <Footer />
    </S.ContainerMain>
  )
}

export default Ft_isprint
