import React from 'react'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import * as S from './styles'

const Ft_memcpy = () => {
  return (
    <S.ContainerMain>
      <Header />
      <S.H1>ft_memcpy</S.H1>
      <S.P>
        The <S.Gold>ft_memcpy</S.Gold> function is a customized implementation
        of the standard <S.Gold>C {"library's"}</S.Gold> memcpy function. Its
        purpose is to copy n bytes of memory from a source location{' '}
        <S.Gold>(src)</S.Gold> to a destination location <S.Gold>(dest)</S.Gold>
        . {"Let's "}see in detail what it does:
      </S.P>
      <S.SectionInfo>
        <span>
          <S.Red># include </S.Red> <S.Green>{'"libft.h"'}</S.Green>{' '}
        </span>
        <span>
          void
          <S.Green> *</S.Green>
          <S.Lilas>ft_memcpy</S.Lilas>( void <S.Green> *</S.Green>dest,{' '}
          <S.Red>const </S.Red> void <S.Green> *</S.Green>src, size_t n )
        </span>
        <span>{'{'}</span>
        <S.SpanTab>
          char
          <S.SpanTab>
            <S.Green> *</S.Green>d;
          </S.SpanTab>
        </S.SpanTab>
        <S.SpanTab>
          char
          <S.SpanTab>
            <S.Green> *</S.Green>s;
          </S.SpanTab>
        </S.SpanTab>
        <S.SpanTab>
          size_t
          <S.SpanTab>i;</S.SpanTab>
        </S.SpanTab>
        <br />
        <S.SpanTab>
          d <S.Green>= </S.Green>( char
          <S.Green> *</S.Green>)dest;
        </S.SpanTab>
        <S.SpanTab>
          s<S.Green> = </S.Green>( char
          <S.Green> *</S.Green>)src;
        </S.SpanTab>
        <S.SpanTab>i <S.Green> = </S.Green>0;</S.SpanTab>
        <S.SpanTab>
          <S.Red>while</S.Red> ( i <S.Green>{'< '}</S.Green>n )
        </S.SpanTab>
        <S.SpanTab>{'{'}</S.SpanTab>
        <S.SpanTab2>d[ i ] <S.Green> = </S.Green>s[ i ];</S.SpanTab2>
        <S.SpanTab2>
          i<S.Green>++</S.Green>;
        </S.SpanTab2>
        <S.SpanTab>{'}'}</S.SpanTab>
        <S.SpanTab>
          <S.Red>return</S.Red> ( dest );
        </S.SpanTab>
        {'}'}
      </S.SectionInfo>
      <br />
      <S.H3>Function Body:</S.H3>
      <S.P>
        ° <S.Gold>size_t </S.Gold>
        i; declares a variable i of type size_t, which will be used as a counter
        in the loop.
      </S.P>
      <S.P>
        ° <S.Gold>char *d </S.Gold>
        and <S.Gold>char *s;</S.Gold> declare pointers to characters,{' '}
        <S.Gold>d</S.Gold>
        (destination) and <S.Gold>s</S.Gold>(source), respectively. Although the
        original pointer types are <S.Gold>void *</S.Gold>, they are converted
        to <S.Gold>char * </S.Gold>
        to allow for pointer arithmetic and the manipulation of bytes
        individually.
      </S.P>
      <S.H3>The Loop while {'(i < n)'}:</S.H3>
      <S.P>
        ° Inside the loop, <S.Gold>d[ i ] = s[ i ];</S.Gold> copies the byte at
        the current position i from the source <S.Gold>(s) </S.Gold>to the
        destination <S.Gold>(d)</S.Gold>. This is done for each byte, from the
        start <S.Gold>(i=0) </S.Gold>until all the specified n bytes have been
        copied.
      </S.P>
      <S.P>
        ° <S.Gold>i++</S.Gold>; increments the counter i, moving to the next
        byte until the loop has processed all n bytes.
      </S.P>
      <S.H3>Function Return: return (dest);</S.H3>
      <S.P>
        After copying n bytes from <S.Gold>src </S.Gold>to dest, the function
        returns the pointer to the destination. This is useful for function call
        chains where the result of the copy can be immediately utilized.
      </S.P>
      <S.H3>Summary: ft_memcpy</S.H3>
      <S.P>
        effectively copies n bytes from the memory location pointed to by{' '}
        <S.Gold>src </S.Gold>to the location pointed to by <S.Gold>dest</S.Gold>
        , byte by byte, without checking for overlap between the source and
        destination memory regions. This is crucial for performance in
        situations where overlap is not a concern. The function then returns a
        pointer to the {"copy's "}destination.
      </S.P>
      <Footer />
    </S.ContainerMain>
  )
}

export default Ft_memcpy
