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
        The ft_memcpy function is a customized implementation of the standard C{' '}
        {"library's"} memcpy function. Its purpose is to copy n bytes of memory
        from a source location (src) to a destination location (dest).{' '}
        {"Let's "}see in detail what it does:
      </S.P>
      <S.SectionInfo>
        <span>
          # <S.TextBlue>include </S.TextBlue>{' '}
          <S.TextGreen>{'"libft.h"'}</S.TextGreen>{' '}
        </span>
        <span>
          <S.TextRed>void </S.TextRed>{' '}
          <S.TextRed2>
            {' '}
            <S.TextBlue> *</S.TextBlue>ft_memcpy
          </S.TextRed2>
          (<S.TextRed> void </S.TextRed> <S.TextBlue> *</S.TextBlue>dest,{' '}
          <S.TextRed>const </S.TextRed> void <S.TextBlue> *</S.TextBlue>src,{' '}
          <S.TextRed>size_t </S.TextRed> n )
        </span>
        <span>{'{'}</span>
        <S.SpanTab>
          <S.TextRed>
            <S.TextRed>char </S.TextRed>
          </S.TextRed>
          <S.SpanTab>
            <S.TextBlue> *</S.TextBlue>d;
          </S.SpanTab>
        </S.SpanTab>
        <S.SpanTab>
          <S.TextRed>
            <S.TextRed>char </S.TextRed>
          </S.TextRed>
          <S.SpanTab>
            <S.TextBlue> *</S.TextBlue>s;
          </S.SpanTab>
        </S.SpanTab>
        <S.SpanTab>
          <S.TextRed>
            <S.TextRed>size_t </S.TextRed>
          </S.TextRed>
          <S.SpanTab>i;</S.SpanTab>
        </S.SpanTab>
        <br />
        <S.SpanTab>
          d = (<S.TextRed>char</S.TextRed>
          <S.TextBlue> *</S.TextBlue>)dest;
        </S.SpanTab>
        <S.SpanTab>
          s = (<S.TextRed>char</S.TextRed>
          <S.TextBlue> *</S.TextBlue>)src;
        </S.SpanTab>
        <S.SpanTab>i = 0;</S.SpanTab>
        <S.SpanTab>
          <S.TextRed>while</S.TextRed> ( i {'< '}n )
        </S.SpanTab>
        <S.SpanTab>{'{'}</S.SpanTab>
        <S.SpanTab2>d[ i ] = s[ i ];</S.SpanTab2>
        <S.SpanTab2>
          i<S.TextBlue>++</S.TextBlue>;
        </S.SpanTab2>
        <S.SpanTab>{'}'}</S.SpanTab>
        <S.SpanTab>
          <S.TextBlue>return</S.TextBlue> (<S.TextRed2> dest </S.TextRed2>);
        </S.SpanTab>
        {'}'}
      </S.SectionInfo>
      <br />
      <S.H3>Function Body:</S.H3>
      <S.P>
        ° <S.TextRed>size_t </S.TextRed>
        i; declares a variable i of type size_t, which will be used as a counter
        in the loop.
      </S.P>
      <S.P>
        ° <S.TextRed>char </S.TextRed>
        <S.TextBlue> *</S.TextBlue>d and <S.TextRed>char </S.TextRed>{' '}
        <S.TextBlue> *</S.TextBlue>s; declare pointers to characters, {"'d'"}
        (destination) and {"'s'"} (source), respectively. Although the original
        pointer types are void <S.TextBlue> *</S.TextBlue>, they are converted
        to <S.TextRed>char</S.TextRed>
        <S.TextBlue> *</S.TextBlue> to allow for pointer arithmetic and the
        manipulation of bytes individually.
      </S.P>
      <S.H3>The Loop while {'(i < n)'}:</S.H3>
      <S.P>
        ° Inside the loop, d[ i ] = s[ i ]; copies the byte at the current
        position i from the source (s) to the destination (d). This is done for
        each byte, from the start (i=0) until all the specified n bytes have
        been copied.
      </S.P>
      <S.P>
        ° i<S.TextBlue>++</S.TextBlue>; increments the counter i, moving to the
        next byte until the loop has processed all n bytes.
      </S.P>
      <S.H3>Function Return: return (dest);</S.H3>
      <S.P>
      After copying n bytes from src to dest, the function returns the pointer to the destination. This is useful for function call chains where the result of the copy can be immediately utilized.
      </S.P>
      <S.H3>Summary: ft_memcpy</S.H3>
      <S.P>effectively copies n bytes from the memory location pointed to by src to the location pointed to by dest, byte by byte, without checking for overlap between the source and destination memory regions. This is crucial for performance in situations where overlap is not a concern. The function then returns a pointer to the {"copy's "}destination.</S.P>
      <Footer />
    </S.ContainerMain>
  )
}

export default Ft_memcpy
