import React from 'react'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import * as S from './styles'

const Ft_isprint = () => {
  return (
    <S.ContainerMain>
      <Header />
      <S.H1>ft_isprint</S.H1>
      <S.P>

        The ft_isprint function is a custom implementation of the isprint
        function. The isprint function in C is part of the standard C library,
        specifically the <S.Gold>{'<ctype.h>'}</S.Gold> library, and is used to check whether a
        character is printable or not. A printable character is any character
        that occupies a visible position in the display space of a display
        device, such as a computer screen or paper, when printed. This includes
        letters (uppercase and lowercase), digits, punctuation, and other
        special characters, as well as the white space (but does not include
        control characters).
      </S.P>
      <br />
      <S.H3>Here is an example of the ft_isprint function:</S.H3>
      <S.SectionInfo>
        <span>
           <S.Red># include </S.Red>{' '}
          <S.Green>{'"libft.h"'}</S.Green>{' '}
        </span>
        <br />
        <span>
           int  <S.Lilas>ft_isprint</S.Lilas>(
           int  i )
        </span>
        <span>{'{'}</span>
        <S.SpanTab>
          <S.Red>if </S.Red>( i <S.Green>{' >'}= </S.Green>32{' '}
          <S.Green>&&</S.Green> i <S.Green>{' <'}=</S.Green>  126  )
        </S.SpanTab>
        <S.SpanTab2>
          <S.Red>return</S.Red> ( 1 );
        </S.SpanTab2>
        <S.SpanTab>
          <S.Red>return</S.Red> (  0  );
        </S.SpanTab>
        <span>{'}'}</span>
      </S.SectionInfo>
      <br />
      <br />
      <S.H3>In summary</S.H3>
            <S.P>The isprint function is a crucial component of the standard C library, whose utility goes beyond merely checking for printable characters, contributing to the creation of more intuitive user interfaces, safer text processing, and more adaptable software. Whether used in its standard form or through custom implementations, it exemplifies the elegance and efficiency that are characteristic of programming in C.</S.P>
      <Footer />
    </S.ContainerMain>
  )
}

export default Ft_isprint
