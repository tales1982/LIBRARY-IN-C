import React from 'react'
import Header from '../../../Components/Header'
import Footer from '../../../Components/Footer'
import * as S from './styles'

const Ft_strchr = () => {
  return (
    <S.ContainerMain>
      <Header />
      <S.H1>ft_strchr</S.H1>
      <S.P>
        This function, <S.Gold>ft_strchr</S.Gold>, is a custom implementation of
        the standard <S.Gold>strchr </S.Gold>function from the C library. It
        searches for the first occurrence of the character c in the provided
        string s. {"Here's"} what it does, step by step:
      </S.P>
      <S.SectionInfo>
        <span>
          <S.Red># include</S.Red> <S.Green>{'"libft.h"'}</S.Green>
        </span>
        <br />
        <span>
          int <S.Lilas>ft_strchr</S.Lilas>( <S.Red>const</S.Red> char{' '}
          <S.Green>*</S.Green>s int c )
        </span>
        <span>{'{'}</span>
          <S.SpanTab>unsigned int	<S.SpanTab>i</S.SpanTab>;</S.SpanTab>
          <S.SpanTab>char<S.SpanTab /><S.SpanTab2 /><S.SpanTab2>cc;</S.SpanTab2></S.SpanTab>
          <br />
          <S.SpanTab>cc <S.Green>=</S.Green> ( char ) c;</S.SpanTab>
          <S.SpanTab>i <S.Green>=</S.Green> 0;</S.SpanTab>
          <S.SpanTab><S.Red>while</S.Red>( s[ i ] )</S.SpanTab>
          <S.SpanTab>{'{'}</S.SpanTab>
          <S.SpanTab><S.SpanTab2 /> <S.Red>if</S.Red>( s[ i ] <S.Green>==</S.Green> cc )</S.SpanTab>
          <S.SpanTab2><S.SpanTab2 /><S.Red>return</S.Red>( ( char <S.Green> *</S.Green> ) <S.Green>&</S.Green>s[ i ] );</S.SpanTab2>
          <S.SpanTab><S.SpanTab2 />i<S.Green>++</S.Green>;</S.SpanTab>
          <S.SpanTab>{'}'}</S.SpanTab>
          <S.SpanTab><S.Red>if</S.Red> ( s[ i ] <S.Green>== cc</S.Green> )</S.SpanTab>
          <S.SpanTab><S.SpanTab2 /><S.Red>return</S.Red>( ( char <S.Green>*</S.Green> ) <S.Green>&</S.Green>s[ i ] );</S.SpanTab>
          <S.SpanTab><S.Red>return</S.Red>( <S.Green>NULL</S.Green> );</S.SpanTab>
        <span>{'}'}</span>
      </S.SectionInfo>
      <br />
      <br />
      <S.H3>Conversion and Initialization: </S.H3>
      <S.P>
        ° The function starts by converting the integer c to a character cc.
        This is necessary because, although the function accepts c as an int, in
        practice, {"we're"} searching for a character within a string. It also
        initializes an index i to 0, which will be used to traverse the string
        s.
      </S.P>
      <S.H3>Traversing the String:</S.H3>
      <S.P>
        ° Next, it enters a while loop that continues as long as the current
        character of the string <S.Gold>(indicated by s[i])</S.Gold> is not the
        null character <S.Gold>\0</S.Gold>
        that marks the end of a string in C. Within this loop, it checks if the
        current character <S.Gold>s[i]</S.Gold> is equal to the character cc
        {" we're"} searching for. If it is equal, the function returns a pointer
        to the first occurrence of this character in the string. This is done by
        return
        <S.Gold>((char *) &s[i])</S.Gold>;, which returns the address of the
        character within the string s.
      </S.P>
      <S.H3>Checking After the Loop:</S.H3>
      <S.P>
        ° After the loop, the function checks again if the character at the
        current index i (which now points to the null character{' '}
        <S.Gold>\0</S.Gold> at the end of the string) is equal to the character
        searched for. This is useful for cases where c is <S.Gold>\0</S.Gold>,
        as the function should be able to find the end of a string as a{' '}
        {'"valid occurrence."'}
        If the null character is equal to cc, the function returns the pointer
        to it. This allows <S.Gold>ft_strchr</S.Gold> to find the null character
        if {"that's"} the character being searched for, which is consistent with
        expected
        <S.Gold>strchr</S.Gold> behavior.
      </S.P>
      <S.H3>Final Return:</S.H3>
      <S.P>
        ° If the character is not found throughout the string, the function
        returns <S.Gold>NULL</S.Gold>, indicating that the character c is not
        present in the string s.
      </S.P>
      <S.H3>In summary</S.H3>
      <S.P>
        ° <S.Gold>ft_strchr </S.Gold>locates the first occurrence of a character
        c in a string s and returns a pointer to it. If the character is not
        found, it returns <S.Gold>NULL</S.Gold>. This behavior is essential for
        many string processing operations in C, where locating a specific
        character within a string is often required.
      </S.P>
      :
      <br />
      <Footer />
    </S.ContainerMain>
  )
}

export default Ft_strchr
