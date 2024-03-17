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
        a digit <S.Gold>( 0-9 ) </S.Gold>or a letter (uppercase or lowercase of
        the alphabet, <S.Gold>A-Z</S.Gold>, and <S.Gold>a-z</S.Gold>).
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
        C: This is the character to be checked, represented by an int. Although{' '}
        {"it's"} declared as int, the value actually passed to the function
        should be an ASCII character or <S.Gold>EOF</S.Gold> (End Of File). The
        function expects a value that can be represented as an unsigned char or
        that is equal to <S.Gold>EOF</S.Gold>. This allows the function to
        correctly process any possible character value, including non-ASCII
        characters in certain implementations.
      </S.P>
      <S.H3>Return Value</S.H3>
      <S.P>
        The function returns a nonzero value <S.Gold>(true)</S.Gold> if the
        character is alphanumeric. This includes any digit from{' '}
        <S.Gold>0 </S.Gold>to <S.Gold>9</S.Gold>, or any letter of the alphabet
        (uppercase and lowercase), from A to <S.Gold>Z </S.Gold>and from a to{' '}
        <S.Gold>z</S.Gold>.
      </S.P>
      <S.P>
        If the character provided is not alphanumeric, the function returns{' '}
        <S.Gold>0 (false)</S.Gold>.
      </S.P>
      <S.H3>Common Applications</S.H3>
      <S.P>
        The ft_isalnum function is useful in many programming contexts,
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
