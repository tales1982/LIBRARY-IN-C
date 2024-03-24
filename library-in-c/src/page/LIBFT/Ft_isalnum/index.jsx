import React from 'react'
import Header from '../../../Components/Header'
import Footer from '../../../Components/Footer'
import * as S from './styles'

const Ft_isalnum = () => {
  return (
    <S.ContainerMain>
      <Header />
      <S.H1>ft_isalnum</S.H1>

      <S.P>
        This function is used to check whether a character passed as an argument
        is alphanumeric or not. An alphanumeric character is one that is either
        a digit ( 0-9 ) or a letter (uppercase or lowercase of
        the alphabet, A-Z, and a-z).
      </S.P>
      <S.H3>Function Prototype</S.H3>
      <S.P>
        Here is a simple example of the implementation of the ft_isalnum
        function.:
      </S.P>
      <S.SectionInfo>
        <span>
          <S.Red># include</S.Red>
          <S.Green>{' "libft.h"'}</S.Green>
        </span>
        <br />
        <span>
          int
          <S.Lilas> ft_isalnum</S.Lilas>( int c )
        </span>
        <span>{'{'}</span>
        <S.SpanTab>
          <S.Red>if </S.Red>
          ((i <S.Green>{' >= '} </S.Green>
          {"'a'"} <S.Green>&& </S.Green>i <S.Green>{' <= '}</S.Green> {"'z'"}){' '}
          <S.Green>| |</S.Green> ( i <S.Green>{' >= '}</S.Green> {"'A'"}{' '}
          <S.Green>&& </S.Green>i <S.Green>{' <= '}</S.Green> {"'Z'"}) <S.Green>| |</S.Green> ( i{' '}
          <S.Green>{' >= '}</S.Green> {"'0'"} <S.Green>&&</S.Green> i <S.Green>{' <= '}</S.Green>{' '}
          {"'9'"}))
        </S.SpanTab>
        <S.SpanTab2>
          <S.Red>return </S.Red>( 1 );
        </S.SpanTab2>
        <S.SpanTab>
          <S.Red>return </S.Red>( 0 );
        </S.SpanTab>
        <span>{'}'}</span>
      </S.SectionInfo>
      <br />
      <S.H3>Parameters</S.H3>
      <S.P>
      <S.Gold>°</S.Gold> C: This is the character to be checked, represented by an int. Although{' '}
        {"it's"} declared as int, the value actually passed to the function
        should be an ASCII character or EOF (End Of File). The
        function expects a value that can be represented as an unsigned char or
        that is equal to EOF. This allows the function to
        correctly process any possible character value, including non-ASCII
        characters in certain implementations.
      </S.P>
      <S.H3>Return Value</S.H3>
      <S.P>
      <S.Gold>°</S.Gold> The function returns a nonzero value (true) if the
        character is alphanumeric. This includes any digit from{' '}
        0 to 9, or any letter of the alphabet
        (uppercase and lowercase), from A to Z and from a to{' '}
        z.
      </S.P>
      <S.P>
      <S.Gold>°</S.Gold> If the character provided is not alphanumeric, the function returns{' '}
        0 (false).
      </S.P>
      <S.H3>Common Applications</S.H3>
      <S.P>
      <S.Gold>°</S.Gold> The ft_isalnum function is useful in many programming contexts,
        especially when it is necessary to validate user inputs or process and
        analyze text. For example, it can be used to ensure that a string
        contains only alphanumeric characters before proceeding with operations
        such as data insertion into a database, lexical analysis in compilers,
        or simply filtering entries for certain applications.
      </S.P>
      <Footer />
    </S.ContainerMain>
  )
}

export default Ft_isalnum
