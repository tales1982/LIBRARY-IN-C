import React from 'react'
import Header from '../../../Components/Header'
import Footer from '../../../Components/Footer'
import * as S from './styles'

const Ft_isprint = () => {
  return (
    <S.ContainerMain>
      <Header />
      <S.H1>ft_isprint</S.H1>
      <S.P>
        The ft_isprint function is a custom implementation of the isprint
        function found in the standard C library. Its purpose is to determine if
        a given character, represented by the integer value i, is a printable
        character. Printable characters are those visible (excluding control
        characters) and thus can be displayed on the screen or printed on paper.
        The function returns 1 (true) if the character is printable and 0
        (false) otherwise. {"Let's"} detail the operation and the logic behind
        this function:
      </S.P>
      <br />
      <S.H3>Here is an example of the ft_isprint function:</S.H3>
      <S.SectionInfo>
        <span>
          <S.Red># include </S.Red> <S.Green>{'"libft.h"'}</S.Green>{' '}
        </span>
        <br />
        <span>
          int <S.Lilas>ft_isprint</S.Lilas>( int i )
        </span>
        <span>{'{'}</span>
        <S.SpanTab>
          <S.Red>if </S.Red>( i <S.Green>{' >'}= </S.Green>32{' '}
          <S.Green>&&</S.Green> i <S.Green>{' <'}=</S.Green> 126 )
        </S.SpanTab>
        <S.SpanTab2>
          <S.Red>return</S.Red> ( 1 );
        </S.SpanTab2>
        <S.SpanTab>
          <S.Red>return</S.Red> ( 0 );
        </S.SpanTab>
        <span>{'}'}</span>
      </S.SectionInfo>
      <br />
      <br />
      <S.H3>Parameters</S.H3>
      <S.P>
        <S.Gold>° </S.Gold> int i: The integer value representing the ASCII
        character to be checked. In C, characters can be stored and manipulated
        as integers.
      </S.P>
      <S.H3>Verification Process</S.H3>
      <S.P>
        <S.Gold>° </S.Gold> The function checks if the value of i is within the
        range of ASCII values that correspond to printable characters.
        Specifically, the range is from 32 to 126, inclusive.
      </S.P>
      <S.P>
        <S.Gold>° </S.Gold> The value 32 represents the space character{' '}
        {"(' ')"}, which is the first printable character in the ASCII table.
      </S.P>
      <S.P>
        <S.Gold>° </S.Gold> The value 126 represents the tilde {"('~')"}{' '}
        character, which is the last printable character in the ASCII table
        before the control characters start.
      </S.P>
      <S.P>
        <S.Gold>° </S.Gold> If i is within this range, the function understands
        that the character is printable and returns 1.
      </S.P>
      <S.P>
        <S.Gold>° </S.Gold> Otherwise, if i is outside this range, the function
        concludes that the character is not printable and returns 0.
      </S.P>
      <S.H3>Return</S.H3>
      <S.P>
        <S.Gold>° </S.Gold> 1 (true): Indicates that the character is printable.
        This means the character can be visually represented, such as letters,
        numbers, punctuation marks, and white spaces.
      </S.P>
      <S.P>
        <S.Gold>° </S.Gold> 0 (false): Indicates that the character is not
        printable. These are generally control characters or other special
        characters that do not have an associated graphical representation.
      </S.P>
      <S.H3>Final Considerations</S.H3>
      <S.P>
        <S.Gold>° </S.Gold> The ft_isprint function is useful in situations
        where {"it's"} necessary to validate data input or filter characters to
        ensure that only readable text is processed or displayed.
      </S.P>
      <Footer />
    </S.ContainerMain>
  )
}

export default Ft_isprint
