import React from 'react'
import Header from '../../../Components/Header'
import Footer from '../../../Components/Footer'
import * as S from './styles'

const Ft_memchr = () => {
  return (
    <S.ContainerMain>
      <Header />
      <S.H1>ft_memchr</S.H1>
      <S.P>
        The ft_memchr function is a custom implementation that resembles the
        memchr function from the standard C library. It is used to search for
        the first occurrence of a specified character (byte) in a string or
        memory block. {"Let's"} understand in detail what each part of this
        function does:
      </S.P>
      <S.SectionInfo>
        <span>
          void{' '}
          <S.SpanTab>
            <S.Green>*</S.Green>ft_memchr( <S.Red>const</S.Red> void{' '}
            <S.Green> *</S.Green>s, int c, size_t n )
          </S.SpanTab>
        </span>
        <span>{'{'}</span>
        <S.SpanTab>
          char <S.SpanTab />
          <S.Green>*</S.Green>str;
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
          str <S.Green>=</S.Green> ( char <S.Green>*</S.Green>)s;
        </S.SpanTab>
        <S.SpanTab>
          <S.Red>while</S.Red> ( i <S.Green>{'<'}</S.Green> n )
        </S.SpanTab>
        <S.SpanTab>{'{'}</S.SpanTab>
        <S.SpanTab2>
          <S.Red>if </S.Red>(( unsigned char )str[ i ] <S.Green>==</S.Green>(
          unsigned char )c )
        </S.SpanTab2>
        <S.SpanTab2>
          <S.SpanTab />
          <S.Red>return </S.Red>( ( char <S.Green>*</S.Green>)s + i);
        </S.SpanTab2>
        <S.SpanTab2>
          i<S.Green>++</S.Green>;
        </S.SpanTab2>
        <S.SpanTab>{'}'}</S.SpanTab>
        <S.SpanTab>
          {' '}
          <S.Red>return </S.Red>( <S.Green>NULL</S.Green> );
        </S.SpanTab>
        <span>{'}'}</span>
      </S.SectionInfo>
      <br />
      <S.H3>Parameters</S.H3>
      <S.P>
        <S.Gold>° </S.Gold>const void *s: This is the pointer to the memory
        block where the search will be conducted. The use of void * allows any
        type of data to be passed to the function, making it versatile.
      </S.P>
      <S.P>
        <S.Gold>° </S.Gold>int c: This is the character we are searching for.
        Although it is passed as an int, the function treats this value as an
        unsigned char to correctly perform byte comparison.
      </S.P>
      <S.P>
        <S.Gold>° </S.Gold>size_t n: This is the number of bytes to be analyzed
        in the memory block pointed to by s.
      </S.P>
      <S.H3>Function Body</S.H3>
      <S.P>
        <S.Gold>° </S.Gold>char *str; size_t i;: Declares a variable str of type
        pointer to char, which will be used to access the bytes of the memory
        block, and a variable i to serve as a counter in the loop.
      </S.P>
      <S.P>
        <S.Gold>° </S.Gold>i = 0; str = ( char * )s;: Initializes the counter i to
        0 and casts the void * pointer to char *, allowing the memory block to
        be accessed byte by byte. Loop while (i {'<'} n): This loop traverses
        the memory block byte by byte, starting from the beginning, until i
        equals n, that is, until all the specified bytes have been analyzed.
      </S.P>
      <S.P>
        <S.Gold>° </S.Gold>if ( ( unsigned char )str[ i ] == ( unsigned char
        )c): Inside the loop, each byte of the memory block is compared with the
        search character c. Here, both the memory byte and the character c are
        explicitly converted to unsigned char. This is done to ensure that the
        comparison is made correctly in terms of byte values, regardless of the
        character set or platform.
      </S.P>
      <S.P>
        <S.Gold>° </S.Gold>return ( ( char * )s + i);: If the character is found,
        the function returns a pointer to the first occurrence of that character
        in the memory block. Note that the returned pointer points to the
        location within the original memory block s.
      </S.P>
      <S.P>
        <S.Gold>° </S.Gold>return ( NULL );: If the character is not found after
        analyzing all n bytes, the function returns NULL, indicating that the
        specified character is not present in the analyzed memory block.
      </S.P>
      <S.H3>Summary</S.H3>
      <S.P>
        <S.Gold>° </S.Gold>Essentially, ft_memchr searches for a specific
        occurrence of a byte ( character ) in a memory block. If the character is
        found within the first n bytes, a pointer to its location in the memory
        block is returned. Otherwise, the function returns NULL, indicating that
        the character was not found.
      </S.P>
      <Footer />
    </S.ContainerMain>
  )
}

export default Ft_memchr
