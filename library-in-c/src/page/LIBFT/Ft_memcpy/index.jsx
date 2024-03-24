import React from 'react'
import Header from '../../../Components/Header'
import Footer from '../../../Components/Footer'
import * as S from './styles'

const Ft_memcpy = () => {
  return (
    <S.ContainerMain>
      <Header />
      <S.H1>ft_memcpy</S.H1>
      <S.P>
        The ft_memcpy function is a customized implementation
        of the standard C {"library's"} memcpy function. Its
        purpose is to copy n bytes of memory from a source location{' '}
        (src) to a destination location (dest)
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
        <S.Gold>° </S.Gold> size_t
        i; declares a variable i of type size_t, which will be used as a counter
        in the loop.
      </S.P>
      <S.P>
        <S.Gold>° </S.Gold> char *d
        and char *s; declare pointers to characters,{' '}
        d
        (destination) and s(source), respectively. Although the
        original pointer types are void *, they are converted
        to char *
        to allow for pointer arithmetic and the manipulation of bytes
        individually.
      </S.P>
      <S.P>
        <S.Gold>° </S.Gold>The Loop while {'(i < n)'}: Inside the loop, d[ i ] = s[ i ]; copies the byte at
        the current position i from the source (s) to the
        destination (d). This is done for each byte, from the
        start (i=0) until all the specified n bytes have been
        copied.
      </S.P>
      <S.P>
        <S.Gold>° </S.Gold> i++; increments the counter i, moving to the next
        byte until the loop has processed all n bytes.
      </S.P>
      <S.P>
      <S.Gold>° </S.Gold>Function Return: return (dest); After copying n bytes from src to dest, the function
        returns the pointer to the destination. This is useful for function call
        chains where the result of the copy can be immediately utilized.
      </S.P>
      <S.P>
      <S.Gold>° </S.Gold>Summary: ft_memcpy: effectively copies n bytes from the memory location pointed to by{' '}
        src to the location pointed to by dest
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
