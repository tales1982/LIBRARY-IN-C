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
        The ft_memcmp function is a custom implementation of the memcmp function
        from the C standard library. It is used to compare the first n bytes of
        two memory areas pointed to by s1 and s2. {"Let's"} describe in detail
        what this function does, step by step:
      </S.P>
      <S.SectionInfo>
        <span>
          int{' '}
          <S.SpanTab>
            <S.Lilas>ft_memcmp</S.Lilas>( <S.Red>const</S.Red> void{' '}
            <S.Green> *</S.Green>s1, <S.Red>const</S.Red> void{' '}
            <S.Green> *</S.Green>s2, size_t n )
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
          size_t <S.SpanTab />
          i;
        </S.SpanTab>
        <br />
        <S.SpanTab>
          i <S.Green>=</S.Green> 0;
        </S.SpanTab>
        <S.SpanTab>
          str1 <S.Green>=</S.Green> ( char <S.Green>*</S.Green>)s1;
        </S.SpanTab>
        <S.SpanTab>
          str2 <S.Green>=</S.Green> ( char <S.Green>*</S.Green>)s2;
        </S.SpanTab>
        <S.SpanTab>
          <S.Red>while</S.Red>( i <S.Green>{'<'}</S.Green> n)
        </S.SpanTab>
        <S.SpanTab>{'{'}</S.SpanTab>
        <S.SpanTab2>
          <S.Red>if </S.Red>( str1[ i ] <S.Green>!=</S.Green> str2[ i ] )
        </S.SpanTab2>
        <S.SpanTab2>
          <S.SpanTab />
          <S.Red>return </S.Red>( ( unsigned char )str1[ i ]{' '}
          <S.Green>-</S.Green> ( unsigned char )str2[ i ] );
        </S.SpanTab2>
        <S.SpanTab2>
          i<S.Green>++</S.Green>;
        </S.SpanTab2>
        <S.SpanTab>{'}'}</S.SpanTab>
        <S.SpanTab>
          <S.Red>return</S.Red> ( 0 );
        </S.SpanTab>
        <span>{'}'}</span>
      </S.SectionInfo>
      <br />
      <S.H3>Function Parameters:</S.H3>
      <S.P>
        <S.Gold>° </S.Gold>const void *s1: a pointer to the first memory area to
        be compared. The use of void indicates that it can point to any type of
        data, but, for comparison purposes, it will be treated as a pointer to
        char.
      </S.P>
      <S.P>
        <S.Gold>° </S.Gold>const void *s2: a pointer to the second memory area
        to be compared, with the same characteristics as s1.
      </S.P>
      <S.P>
        <S.Gold>° </S.Gold>size_t n: the number of bytes to be compared between
        the two memory areas.
      </S.P>
      <S.H3>Local Variables:</S.H3>
      <S.P>
        <S.Gold>° </S.Gold>char *str1, char *str2: are pointers to char that
        will be used to access the bytes of s1 and s2 respectively. This allows
        byte-by-byte comparison.
      </S.P>
      <S.P>
        <S.Gold>° </S.Gold>size_t i: is a counter used to iterate over the bytes
        of the memory areas.
      </S.P>
      <S.H3>Type Conversion:</S.H3>
      <S.P>
        <S.Gold>° </S.Gold>The void pointers s1 and s2 are converted to char
        pointers and assigned to str1 and str2, respectively. This is necessary
        because pointer arithmetic on void * is not allowed in C, and we want to
        access and compare the bytes individually.
      </S.P>
      <S.H3>Comparison:</S.H3>
      <S.P>
        <S.Gold>° </S.Gold>The function starts a loop that continues while i{' '}
        {'<'} n. This means it will compare up to n bytes between s1 and s2.
      </S.P>
      <S.P>
        <S.Gold>° </S.Gold>Inside the loop, the function compares the current
        byte of s1 (str1[i]) with the current byte of s2 (str2[i]). If the bytes
        are different, the function immediately terminates, returning the
        difference between the two bytes. The difference is calculated as
        (unsigned char)str1[i] - (unsigned char)str2[i], ensuring that the
        subtraction is performed in an unsigned manner, avoiding incorrect
        results due to sign extension in negative numbers.
      </S.P>
      <S.P>
        <S.Gold>° </S.Gold>If all n bytes compared are equal, the loop ends
        naturally, and the function returns 0, indicating that the two memory
        areas are equal in the first n bytes.
      </S.P>
      <S.H3>Result:</S.H3>
      <S.P>
        <S.Gold>° </S.Gold>The result is an integer. If the first n bytes of the
        memory areas are equal, the function returns 0. If they are different,
        the function returns the difference between the first different bytes
        found, which will be a positive value if the byte in s1 is greater than
        the corresponding one in s2 and negative otherwise.
      </S.P>
      <S.P>
        <S.Gold>° </S.Gold>This function is frequently used in situations where
        it is necessary to compare memory blocks, such as strings, data
        structures, or binary data buffers, efficiently and without regard to
        the specific type of the data.
      </S.P>
      <Footer />
    </S.ContainerMain>
  )
}

export default Ft_memcmp
