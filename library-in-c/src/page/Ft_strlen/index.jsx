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
        until it encounters the <S.Gold>null</S.Gold> termination character{' '}
        <S.Gold>{"('\\0')"}</S.Gold>, which indicates the end of the string in
        C. This function is not part of the standard C library but follows a
        common pattern seen in custom implementations or educational projects,
        such as those by the 42 school.
      </S.P>

      <S.H3>{"Here's"} an example of how the function could be used:</S.H3>
      <S.SectionInfo>
        <span>
           <S.Red># include </S.Red>{' '}
          <S.Green>{'"libft.h"'}</S.Green>{' '}
        </span>
        <br />
        <span>
           int <S.Lilas>ft_strlen</S.Lilas>(
           const char <S.Green>*</S.Green>str )
        </span>
        <span>{'{'}</span>
        <S.SpanTab>
           int   <S.SpanTab>i </S.SpanTab>;
        </S.SpanTab>
        <br />
        <S.SpanTab> i = 0 ;</S.SpanTab>
        <S.SpanTab>
          <S.Red>while </S.Red> ( str[ i ] )
        </S.SpanTab>
        <S.SpanTab>
          <S.SpanTab2>
            i <S.Green>++</S.Green> ;
          </S.SpanTab2>
        </S.SpanTab>

        <S.SpanTab>
          <S.Red>return</S.Red> (  i  );
        </S.SpanTab>
        <span>{'}'}</span>
      </S.SectionInfo>
      <br />
      <S.P>
        ° <strong> Initialization: </strong>The function begins by initializing
        a local variable <S.Gold>i </S.Gold>to <S.Gold>0</S.Gold>. This variable
        is used to count the characters in the string.
      </S.P>
      <S.P>
        ° <strong>Loop:</strong> Next, it enters a while loop that continues as
        long as <S.Gold>str[i]</S.Gold> is not zero. In other words, the loop
        iterates over each character in the string, one by one, until the{' '}
        <S.Gold>null </S.Gold>termination character is found.
      </S.P>
      <S.P>
        ° <strong>Increment: </strong>Inside the loop, i is incremented in each
        iteration. This effectively moves the index i along the string, counting
        each character.
      </S.P>
      <S.P>
        ° <strong>Return: </strong>When the loop finds the <S.Gold>null</S.Gold>{' '}
        termination character, it ends, and the function returns the current
        value of <S.Gold>i</S.Gold>, which represents the number of characters
        in the string (excluding the null termination character).
      </S.P>
      <S.P>
        <strong></strong>
      </S.P>
      <S.P>
        ° In this example, the strlen function calculates the length of the
        string <S.Gold>{'"Hello, World!"'}</S.Gold>, which is <S.Gold>13 </S.Gold>characters, and then the program
        prints this length.
      </S.P>
      <S.P>
        This implementation is quite straightforward and efficient for
        determining the length of strings in C, following one of the fundamental
        principles of programming in C, which is to work directly with pointers
        and character arrays for string manipulation.
      </S.P>
      <Footer />
    </S.ContainerMain>
  )
}

export default Ft_strlen
