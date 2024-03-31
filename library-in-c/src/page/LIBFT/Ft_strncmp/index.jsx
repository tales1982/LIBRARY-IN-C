import React from 'react'
import Footer from '../../../Components/Footer'
import * as S from './styles'
import Header from '../../../Components/Header'

const Ft_strncmp = () => {
  return (
    <S.ContainerMain>
      <Header />
      <S.H1>Ft_strncmp.c</S.H1>
      <S.P>
        This ft_strncmp function is a custom implementation of the standard C
        library function strncmp, which compares up to n characters of two
        strings s1 and s2. The function aims to determine the lexicographical
        order of the strings or to check if they are equal, based on a limited
        character comparison. {"Let's"} detail its operation step by step:
      </S.P>
      <S.SectionInfo>
        <span>
          int <S.SpanTab />
          <S.Green>* </S.Green> <S.Lilas>ft_strncmp</S.Lilas>( <S.Red>const</S.Red> char{' '}
          <S.Green>* </S.Green> s1, <S.Red>const</S.Red> char{' '}
          <S.Green>* </S.Green> s2, size_t n )
        </span>
        <span>{'{'}</span>
        <S.SpanTab>size_t <S.SpanTab />i;</S.SpanTab>
        <br />
        <S.SpanTab> i <S.Green>=</S.Green> 0;</S.SpanTab>
        <S.SpanTab><S.Red>while</S.Red>(( s1[ i ] <S.Green>||</S.Green> s2[ i ] ) <S.Green>&&</S.Green> i <S.Green>{'<'}</S.Green> n)</S.SpanTab>
        <S.SpanTab>{'{'}</S.SpanTab>
        <S.SpanTab2><S.Red>if</S.Red>( ( unsigned char ) s1[ i ] <S.Green>!=</S.Green> ( unsigned char ) s2[ i ] )</S.SpanTab2>
        <S.SpanTab2><S.SpanTab /><S.Red>return</S.Red>( ( unsigned char ) s1[ i ] <S.Green>-</S.Green> ( unsigned char ) s2[ i ] );</S.SpanTab2>
        <S.SpanTab2>i<S.Green>++</S.Green>;</S.SpanTab2>
        <S.SpanTab>{'}'}</S.SpanTab>
        <S.SpanTab><S.Red>return</S.Red>( 0 );</S.SpanTab>
        <span>{'}'}</span>
      </S.SectionInfo>
      <br />
      <S.H3>Declaration and Initialization:</S.H3>
      <S.P><S.Gold>°</S.Gold> The function declares a variable of type size_t named i, which is used as an index to iterate over the characters of the strings s1 and s2. It is initialized with 0.</S.P>
      <S.H3>Comparison Loop:</S.H3>
      <S.P><S.Gold>°</S.Gold> The while loop continues as long as two conditions are true: (( s1[i] || s2[i]) and i {'<'} n )</S.P>
      <S.P><S.Gold>°</S.Gold> ( s1[i] || s2[i] ) checks if at least one of the characters at the current positions of s1 and s2 is not the null character (\0), meaning the function continues the comparison until both characters are the end of the string or until the n limit is reached.</S.P>
      <S.P><S.Gold>° </S.Gold> i {'<'} n ensures that the comparison does not proceed beyond the specified limit n.</S.P>
      <S.P><S.Gold>° </S.Gold> Inside the loop, if the characters at the current positions of s1 and s2 are different (comparing their ASCII values as unsigned char to ensure the correct comparison of non-ASCII characters), the function terminates and returns the difference between the ASCII values of these characters ((unsigned char) s1[i] - (unsigned char) s2[i]).</S.P>
      <S.P><S.Gold>°</S.Gold> If the character in s1[i] has a higher ASCII value than the character in s2[i], the result will be positive.</S.P>
      <S.P><S.Gold>°</S.Gold> If the character in s1[i] has a lower ASCII value than the character in s2[i], the result will be negative.</S.P>
      <S.P><S.Gold>°</S.Gold> If the compared characters are equal, the index i is incremented, and the function proceeds to compare the next set of characters.</S.P>
      <S.H3>Return:</S.H3>
      <S.P><S.Gold>° </S.Gold> If the loop ends because both characters are null or the n limit was reached without finding different characters, the function returns 0, indicating that the strings are equal up to the compared point.</S.P>
      <S.P><S.Gold>°</S.Gold> This function is useful in contexts where it is necessary to compare string prefixes or to perform comparisons with specific limits to avoid exceeding the memory boundaries assigned to the strings.</S.P>
      <Footer />
    </S.ContainerMain>
  )
}
export default Ft_strncmp
