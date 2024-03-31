import React from 'react'
import Header from '../../../Components/Header'
import Footer from '../../../Components/Footer'
import * as S from './styles'

const Ft_memcmp = () => {
  return (
    <S.ContainerMain>
      <Header />
      <S.H1>ft_memcmp</S.H1>
      <S.P>
        This function, ft_memcmp, is a custom implementation of the standard
        memcmp function from the C library, which compares the content of two
        memory blocks. {"Here's"} what it does, step by step:
      </S.P>
      <S.SectionInfo>
        <span>
          void{' '}
          <S.SpanTab>
            <S.Green>*</S.Green>
            <S.Lilas>ft_memcmp</S.Lilas>( <S.Red>const</S.Red> void{' '}
            <S.Green>*</S.Green>s1, <S.Red>const</S.Red> void{' '}
            <S.Green>*</S.Green>s2, size_t n )
          </S.SpanTab>
        </span>
        <span>{'{'}</span>
        <S.SpanTab>
          char <S.SpanTab />
          <S.Green>*</S.Green>str1;
        </S.SpanTab>
        <S.SpanTab>
          char <S.SpanTab />
          <S.Green>*</S.Green>str2;
        </S.SpanTab>
        <S.SpanTab>
          size_t <S.SpanTab /> i;
        </S.SpanTab>
        <br />
        <S.SpanTab>
          i <S.Green>=</S.Green> 0
        </S.SpanTab>
        <S.SpanTab>
          str1 <S.Green>=</S.Green> ( char <S.Green>*</S.Green>)s1;
        </S.SpanTab>
        <S.SpanTab>
          str2 <S.Green>=</S.Green> ( char <S.Green>*</S.Green>)s2;
        </S.SpanTab>
        <S.SpanTab>
          <S.Red>while</S.Red> ( i <S.Green>{'<'}</S.Green> n )
        </S.SpanTab>
        <S.SpanTab>{'{'}</S.SpanTab>
        <S.SpanTab2>
          <S.Red>if</S.Red> ( str[ i ] <S.Green>!=</S.Green> str[ i ] )
        </S.SpanTab2>
        <S.SpanTab2>
          <S.SpanTab />
          <S.Red>return</S.Red> ( ( unsigned char )str1[ i ]{' '}
          <S.Green>-</S.Green> ( unsigned char )str2[ i ] );
        </S.SpanTab2>
        <S.SpanTab2>
          i<S.Green>++</S.Green>;
        </S.SpanTab2>
        <S.SpanTab>{'}'}</S.SpanTab>
        <S.SpanTab>
          <S.Red>return </S.Red>( 0 );
        </S.SpanTab>
        <span>{'}'}</span>
      </S.SectionInfo>
      <br />
      <S.H3>Input Parameters:</S.H3>
      <S.P>
        <S.Gold>° </S.Gold>const void *s1: a pointer to the first memory block
        to be compared.
      </S.P>
      <S.P>
        <S.Gold>° </S.Gold>const void *s2: a pointer to the second memory block
        to be compared.
      </S.P>
      <S.P>
        <S.Gold>° </S.Gold>size_t n: the number of bytes to compare between the
        two memory blocks.
      </S.P>
      <S.H3>Type Conversion:</S.H3>
      <S.P>
        <S.Gold>° </S.Gold>The variables str1 and str2 are defined as character
        pointers (char *), and they are assigned the addresses of s1 and s2,
        respectively, after being cast to char * pointers. This is done because
        memory in C is treated as a sequence of bytes, and char is the data type
        that represents a byte in C.
      </S.P>
      <S.H3>Index Initialization:</S.H3>
      <S.P>
        <S.Gold>° </S.Gold>The variable i is initialized to 0. It will be used
        to iterate through the bytes of the memory blocks.
      </S.P>
      <S.H3>Byte-by-byte Comparison:</S.H3>
      <S.P>
        <S.Gold>° </S.Gold>The while loop continues as long as i is less than n,
        meaning it compares the memory blocks byte by byte until it reaches the
        number of bytes specified by n.
      </S.P>
      <S.P>
        <S.Gold>° </S.Gold>Inside the loop, str1[i] and str2[i] are compared. If
        the current bytes from the two memory blocks are different (str1[i] !=
        str2[i]), the function immediately returns the difference between these
        two bytes. The difference is calculated as (unsigned char)str1[i] -
        (unsigned char)str2[i], ensuring that the subtraction is done in terms
        of unsigned values, avoiding unexpected behavior with negative sign
        characters.
      </S.P>
      <S.H3>Comparison Result:</S.H3>
      <S.P>
        <S.Gold>° </S.Gold>If the function finishes the loop without finding any
        differences (i.e., all n bytes are equal), it returns 0, indicating that
        the two memory blocks are identical in the first n bytes.
      </S.P>
      <S.P>
        <S.Gold>° </S.Gold>If a difference is found, the function returns the
        difference between the first two differing bytes, which will be a
        positive value if the byte in str1 is greater than the byte in str2, or
        a negative value if the opposite is true.
      </S.P>
      <S.H3>Summary</S.H3>
      <S.P>
        <S.Gold>° </S.Gold>Therefore, ft_memcmp is a useful function for
        comparing memory blocks, whether to check the equality of strings, data
        structures, or any other type of data stored in memory, up to a certain
        number of bytes.
      </S.P>
      <Footer />
    </S.ContainerMain>
  )
}

export default Ft_memcmp
