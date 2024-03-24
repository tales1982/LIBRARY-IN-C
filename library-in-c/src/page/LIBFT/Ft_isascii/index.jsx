import React from 'react'
import Header from '../../../Components/Header'
import Footer from '../../../Components/Footer'
import * as S from './styles'
const Ft_isascii = () => {
  return (
    <S.ContainerMain>
      <Header />
      <S.H1>ft_isascii</S.H1>
      <S.P>
        The ft_isascii function checks if a given integer i (which is expected
        to represent an ASCII character) is within the range of the standard
        ASCII table, which goes from 0 to 127 inclusive.
      </S.P>
      <S.H3>Functioning of ft_isascii</S.H3>
      <S.P>
      <S.Gold>°</S.Gold> Input Parameters: The function accepts a single int i argument, which
        represents the numeric value of a character.
      </S.P>
      <S.P>
      <S.Gold>°</S.Gold> Verification Process: The function checks if i is within the range of 0
        to 127. This range covers all standard ASCII characters, including
        control characters (0-31 and 127), printable characters (32-126),
        numbers, uppercase and lowercase letters, and punctuation marks.
      </S.P>
      <S.P>
      <S.Gold>°</S.Gold> Return Value: The function returns 1 (true) if i is within the ASCII
        range, indicating that i is indeed an ASCII character. If i is not
        within this range, the function returns 0 (false).
      </S.P>
      <S.H3>Example of Use: </S.H3>
      <S.SectionInfo>
        <span>
          <S.Red># include </S.Red> <S.Green>{'"libft.h"'}</S.Green>{' '}
        </span>
        <br />
        <span>
          int <S.Lilas>ft_isascii </S.Lilas>( int i )
        </span>
        <span>{'{'}</span>
        <S.SpanTab>
          <S.Red>if</S.Red>( i<S.Green>{' >'}= </S.Green>0{' '}
          <S.Green>&& </S.Green>i <S.Green>{' <'}= </S.Green> 127 )
        </S.SpanTab>
        <S.SpanTab2>
          <S.Red>return</S.Red> ( 1 );
        </S.SpanTab2>
        <S.SpanTab>
          <S.Red>return</S.Red> ( 0 );
        </S.SpanTab>
        <span>{'}'}</span>
      </S.SectionInfo>
      <S.P>
      <S.Gold>°</S.Gold> This example demonstrates the use of ft_isascii to check if a character
        (or a number representing a character) is part of the ASCII table. The
        code checks a valid ASCII character {"( 'A' )"} and a value outside the
        ASCII range (128), producing outputs corresponding to the result of each
        check.
      </S.P>
      <S.H3>Conclusion</S.H3>
      <S.P>
      <S.Gold>°</S.Gold> The ft_isascii function is a useful tool for validating whether a
        numeric value belongs to the set of ASCII characters. This can be
        particularly useful in contexts where text manipulation needs to be
        restricted to ASCII characters or when working with character encodings
        and there is a need to ensure compatibility or avoid misinterpretation
        errors of characters outside this set.
      </S.P>
      <br />
      <Footer />
    </S.ContainerMain>
  )
}

export default Ft_isascii
