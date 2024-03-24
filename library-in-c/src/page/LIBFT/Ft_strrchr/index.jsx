import React from 'react'
import Footer from '../../../Components/Footer'
import * as S from './styles'
import Header from '../../../Components/Header'

const Ft_strrchr = () => {
  return (
    <S.ContainerMain>
      <Header />
      <S.H1>Ft_strrchr.c</S.H1>
      <S.P>
        The ft_strrchr function is a custom implementation that mimics the
        behavior of the strrchr function from the standard C library. Its
        purpose is to locate the last occurrence of a character c in the string
        s and return a pointer to this location in the string. If the character
        is not found, the function returns NULL. {"Let's"} delve into how the
        function operates in detail.
      </S.P>
      <S.SectionInfo>
        <span>char <S.SpanTab/><S.Green>*</S.Green> <S.Lilas>ft_strrchr</S.Lilas>( const char <S.Green>*</S.Green> s, int c )</span>
        <span>{'{'}</span>
        <S.SpanTab>unsigned int	<S.SpanTab />i;</S.SpanTab>
        <S.SpanTab>char	<S.SpanTab2 /><S.Green>*</S.Green>res;</S.SpanTab>
        <S.SpanTab>char	<S.SpanTab2 />cc;</S.SpanTab>
        <br />
        <S.SpanTab>cc <S.Green>=</S.Green> ( char ) c;</S.SpanTab>
        <S.SpanTab>res <S.Green>= </S.Green>NULL;</S.SpanTab>
        <S.SpanTab>i <S.Green>= </S.Green> 0;</S.SpanTab>
        <S.SpanTab><S.Red>while</S.Red> ( s[ i ] )</S.SpanTab>
        <S.SpanTab>{'{'}</S.SpanTab>
        <S.SpanTab2><S.Red>if</S.Red> ( s[i] <S.Green>== </S.Green>cc )</S.SpanTab2>
        <S.SpanTab><S.SpanTab2 /> res <S.Green>=</S.Green> ( char <S.Green>*</S.Green> ) <S.Green>&</S.Green>s[ i ]; </S.SpanTab>
        <S.SpanTab2>i<S.Green>++</S.Green>;</S.SpanTab2>
        <S.SpanTab>{'}'}</S.SpanTab>
        <S.SpanTab> <S.Red>if</S.Red> ( s[ i ] <S.Green>== </S.Green> cc )</S.SpanTab>
        <S.SpanTab2>res <S.Green>= </S.Green>(char <S.Green>*</S.Green>) <S.Green>&</S.Green>s[ i ]; </S.SpanTab2>
        <S.SpanTab><S.Red>return</S.Red> ( res );</S.SpanTab>
        <span>{'}'}</span>
      </S.SectionInfo>
      <br />
      <S.H3>Parameters</S.H3>
      <S.P>° <S.Gold>const char *s: </S.Gold>A constant pointer to char, representing the string where the search will be conducted.</S.P>
      <S.P>° <S.Gold>int c: </S.Gold> The character to be located within the string s. Although it is passed as an integer, c is treated as a character.</S.P>
      <S.H3>Detailed Process</S.H3>
      <S.P><S.Gold>Iteration through String s:</S.Gold> </S.P>
      <S.P><S.Green>*</S.Green> unsigned int i; is used to iterate through the string s.</S.P>
      <S.P><S.Green>*</S.Green> char *res; will store the result of the function, i.e., a pointer to the last occurrence of the character c in the string s. It is initially set to NULL to cover the case where the character is not found.</S.P>
      <S.P><S.Green>*</S.Green> char cc; stores the character c explicitly converted from int to char, ensuring that the comparison is correctly made between characters.</S.P>
      <S.P><S.Green>*</S.Green> The function uses a while loop to iterate through each character of the string s, starting from the beginning.</S.P>
      <S.P><S.Green>*</S.Green> During each iteration, the function checks if the current character s[i] equals the character cc (the char version of c).</S.P>
      <S.P><S.Green>*</S.Green> If a match is found (s[i] == cc), the pointer res is updated to point to the current location of s[i]. This continues until the entire string has been traversed, ensuring res points to the last occurrence of c in the string.</S.P>
      <S.P><S.Gold>Post-Iteration Check:</S.Gold> </S.P>
      <S.P><S.Green>* </S.Green> After the iteration, {"there's"} a final check for the case where the character equals the null character (\0), which is also considered part of the string. If the searched character c is equal to the null character, res is updated to point to the end of the string s.</S.P>
      <S.P><S.Gold>Return:</S.Gold></S.P>
      <S.P><S.Green>*</S.Green> The function returns res, which is a pointer to the last occurrence of the character c in the string s. If the character is not found, res will be NULL.</S.P>
      <S.H3>Final Considerations</S.H3>
      <S.P><S.Green>*</S.Green> This implementation is typical in custom libraries where {"there's"} a desire to recreate standard functionalities of the C language with additional control or specific logic.</S.P>
      <S.P><S.Green>*</S.Green> The ft_strrchr function is useful for finding the position of a character in a string, especially helpful in situations where you need to work with the part of the string after the last occurrence of a certain character.</S.P>
      <S.P><S.Green>*</S.Green> Treating c as int and then converting it to char allows the function to work with any possible value of char, including negative values if char is signed, maintaining compatibility with the standard signature of the strrchr function from the C library.</S.P>
      <Footer />
    </S.ContainerMain>
  )
}
export default Ft_strrchr
