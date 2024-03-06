import React from 'react'
import * as S from './styles'
import Header from '../../Components/Header/index'
import Footer from '../../Components/Footer/index'

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
        <strong>Input Parameters: </strong>The function accepts a single int i
        argument, which represents the numeric value of a character.
      </S.P>
      <S.P>
        <strong>Verification Process: </strong>The function checks if i is
        within the range of 0 to 127. This range covers all standard ASCII
        characters, including control characters (0-31 and 127), printable
        characters (32-126), numbers, uppercase and lowercase letters, and
        punctuation marks.
      </S.P>
      <S.P>
        <strong>Return Value: </strong>The function returns 1 (true) if i is
        within the ASCII range, indicating that i is indeed an ASCII character.
        If i is not within this range, the function returns 0 (false).
      </S.P>
      <S.H3>Example of Use: </S.H3>
      <S.SectionInfo>
        <span>
          # <S.TextBlue>include </S.TextBlue>{' '}
          <S.TextGreen>{'"libft.h"'}</S.TextGreen>{' '}
        </span>
        <br />
        <span>
          <S.TextRed>int</S.TextRed> <S.TextRed2>ft_isascii </S.TextRed2>(
          <S.TextRed> int </S.TextRed>i )
        </span>
        <span>{'{'}</span>
        <S.SpanTab>
          <S.TextBlue>if</S.TextBlue>( i{' >'}= <S.TextGreen>0</S.TextGreen> &&
          i {' <'}= <S.TextGreen>127</S.TextGreen>)
        </S.SpanTab>
        <S.SpanTab2>
          <S.TextBlue>return</S.TextBlue> (<S.TextRed2>1</S.TextRed2>);
        </S.SpanTab2>
        <S.SpanTab>
          <S.TextBlue>return</S.TextBlue> (<S.TextRed2>0</S.TextRed2>);
        </S.SpanTab>
        <span>{'}'}</span>
      </S.SectionInfo>
      <S.P>
        This example demonstrates the use of ft_isascii to check if a character
        (or a number representing a character) is part of the ASCII table. The
        code checks a valid ASCII character {"( 'A' )"} and a value outside the
        ASCII range (128), producing outputs corresponding to the result of each
        check.
      </S.P>
      <S.H3>Conclusion</S.H3>
      <S.P>
        The <strong>ft_isascii</strong>  function is a useful tool for validating whether a
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
