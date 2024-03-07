import React from 'react'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import * as S from './styles'

const Ft_strlen = () => {
  return (
    <S.ContainerMain>
      <Header />
      <S.H1>ft_strlen.c</S.H1>
      <S.P>
        The ft_strlen function is a custom implementation of the standard strlen
        function from the C library. {"It's"} designed to calculate the length
        of a string, meaning it counts the number of characters in the string
        until it encounters the null termination character {"('\\0')"}, which
        indicates the end of the string in C. This function is not part of the
        standard C library but follows a common pattern seen in custom
        implementations or educational projects, such as those by the 42 school.
      </S.P>
      <S.P>{"Let's "}break down how it works, step by step:</S.P>
      <S.P>
        1°<strong> Initialization: </strong>The function begins by initializing
        a local variable i to 0. This variable is used to count the characters
        in the string.
      </S.P>
      <S.P>
        2° <strong>Loop:</strong> Next, it enters a while loop that continues as
        long as str[i] is not zero. In other words, the loop iterates over each
        character in the string, one by one, until the null termination
        character is found.
      </S.P>
      <S.P>
        3° <strong>Increment: </strong>Inside the loop, i is incremented in each
        iteration. This effectively moves the index i along the string, counting
        each character.
      </S.P>
      <S.P>
        4° <strong>Return: </strong>When the loop finds the null termination
        character, it ends, and the function returns the current value of i,
        which represents the number of characters in the string (excluding the
        null termination character).
      </S.P>
      <S.P>
        <strong></strong>
      </S.P>
      <S.H3>{"Here's "}The signature of the strlen function is:</S.H3>
      <S.SectionInfo>
        <span>
          <S.TextRed>int</S.TextRed> <S.TextRed2>ft_strlen</S.TextRed2>(
          <S.TextRed> const char </S.TextRed> *str );
        </span>
      </S.SectionInfo>
      <br />
      <S.H3>{"Here's"} an example of how the function could be used:</S.H3>
      <S.SectionInfo>
        <span>
          # <S.TextBlue>include </S.TextBlue>{' '}
          <S.TextGreen>{'"libft.h"'}</S.TextGreen>{' '}
        </span>
        <br />
        <span>
          <S.TextRed>int</S.TextRed> <S.TextRed2>ft_strlen</S.TextRed2>(
          <S.TextRed> const char </S.TextRed> *str )
        </span>
        <span>{'{'}</span>
        <S.SpanTab>
          <S.TextRed>int </S.TextRed> <S.SpanTab>i </S.SpanTab>;
        </S.SpanTab>
        <br />
        <S.SpanTab> i = 0 ;</S.SpanTab>
        <S.SpanTab>
          <S.TextBlue>while </S.TextBlue> ( str[ i ] )
        </S.SpanTab>
        <S.SpanTab>
          <S.SpanTab2>
            i <S.TextBlue>++</S.TextBlue> ;
          </S.SpanTab2>
        </S.SpanTab>

        <S.SpanTab>
          <S.TextBlue>return</S.TextBlue> (<S.TextRed2> i </S.TextRed2>);
        </S.SpanTab>
        <span>{'}'}</span>

      </S.SectionInfo>
      <br />
      <S.P>
          In this example, the strlen function calculates the length of the
          string {'"Hello, World!"'}, which is 13 characters, and then the
          program prints this length.
        </S.P>
        <S.P>This implementation is quite straightforward and efficient for determining the length of strings in C, following one of the fundamental principles of programming in C, which is to work directly with pointers and character arrays for string manipulation.</S.P>
      <Footer />
    </S.ContainerMain>
  )
}

export default Ft_strlen
