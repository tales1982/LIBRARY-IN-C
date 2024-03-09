import React from 'react'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import * as S from './styles'

const Ft_strcpy = () => {
  return (
    <S.ContainerMain>
      <Header />
      <S.H1>ft_strcpy</S.H1>
      <S.P>
        The <S.TextRed2>ft_strlcpy </S.TextRed2> function is a customized
        implementation of the {' "strlcpy" '} function, which is part of some C
        libraries, especially in BSD systems. {"It's"} designed to copy strings
        safely, preventing memory overlap and ensuring that the destination
        string <S.TextBlue>( dst )</S.TextBlue> is properly null-terminated{' '}
        <S.TextBlue>( \0 )</S.TextBlue>, even in cases of truncation. {"Let's"}{' '}
        explore each part of the function in detail:
      </S.P>

      <S.SectionInfo>
        <span>
          <S.TextBlue>size_t </S.TextBlue>
          <S.TextRed2>ft_strlcpy</S.TextRed2>(<S.TextRed>char </S.TextRed>{' '}
          <S.TextBlue>*</S.TextBlue>dst, <S.TextRed>const </S.TextRed>char{' '}
          <S.TextBlue>*</S.TextBlue>src, <S.TextRed>size_t </S.TextRed>dstsize)
        </span>
        <span>{'{'}</span>
        <S.SpanTab>
          <S.TextRed>size_t </S.TextRed>
          <S.SpanTab>src_len;</S.SpanTab>
        </S.SpanTab>
        <br />
        <S.SpanTab>
          src_len = <S.TextRed2>ft_strlen</S.TextRed2>( src );
        </S.SpanTab>
        <S.SpanTab>
          <S.TextRed>if</S.TextRed> (src_len + 1 {'<'} dstsize)
        </S.SpanTab>
        <S.SpanTab2>
          <S.SpanTab>
            <S.TextRed2>ft_memcpy</S.TextRed2>( dst, src, src_len + 1 );
          </S.SpanTab>
        </S.SpanTab2>
        <S.SpanTab>
          <S.TextRed>else if</S.TextRed> (dstsize != 0)
        </S.SpanTab>
        <S.SpanTab>{'{'}</S.SpanTab>
        <S.SpanTab2>
          <S.SpanTab>
            <S.TextRed2>ft_memcpy</S.TextRed2>( dst, src, dstsize - 1 );
          </S.SpanTab>
        </S.SpanTab2>
        <S.SpanTab2>
          <S.SpanTab>dst[ dstsize - 1 ] = 0;</S.SpanTab>
        </S.SpanTab2>

        <S.SpanTab>{'}'}</S.SpanTab>
        <S.SpanTab>
          <S.TextBlue>return</S.TextBlue> ( <S.TextRed>src_len</S.TextRed> );
        </S.SpanTab>
        <span>{'}'}</span>
      </S.SectionInfo>

      <br />
      <S.H3>Function Body:</S.H3>
      <S.P>
        ° <strong>Determining the Source Length:</strong>{' '}
        <S.TextBlue>size_t src_len = ft_strlen(src);</S.TextBlue> calculates the
        length of the source string <S.TextBlue>( src ) </S.TextBlue>using the{' '}
        <S.TextBlue>ft_strlen</S.TextBlue> function, which returns the number of
        characters in src before the null termination character.
      </S.P>
      <S.P>
        ° <strong>Conditional Copy with Null Termination:</strong> The function
        then checks <S.TextBlue>if src_len + 1 {'<'} dstsize</S.TextBlue> . This
        condition verifies whether there is sufficient space in the destination{' '}
        <S.TextBlue>( dst )</S.TextBlue> to copy the entire source string{' '}
        <S.TextBlue>( src )</S.TextBlue>, including the null termination
        character.{' '}
      </S.P>
      <S.P>
        ° If true, <S.TextBlue>ft_memcpy(dst, src, src_len + 1);</S.TextBlue>  is called to copy <S.TextBlue>src_len +
        1 bytes</S.TextBlue>  (the content of src plus the null character) to dst.{' '}
      </S.P>
      <S.H3>Handling Smaller Destination Buffer:</S.H3>
      <S.P>
        ° <S.TextBlue>If src_len + 1</S.TextBlue> is not less than dstsize (indicating that dst cannot safely accommodate the entire <S.TextBlue>src</S.TextBlue> ), the function checks if dstsize is not 0 to avoid accessing a zero-sized array, which would be undefined.
      </S.P>
      <S.P>
        °  If dstsize is not 0, <S.TextBlue>ft_memcpy(dst, src, dstsize - 1);</S.TextBlue> copies <S.TextBlue>dstsize - 1 </S.TextBlue>bytes from <S.TextBlue>src </S.TextBlue>to <S.TextBlue>dst</S.TextBlue>, the maximum possible leaving space for a null character. Then, <S.TextBlue>dst[ dstsize - 1 ] = 0;</S.TextBlue> explicitly adds a null character at the end of dst to ensure the resulting string is properly terminated.
      </S.P>
      <S.P>
        ° <strong>Return:</strong> The function returns src_len, the length of the source string. This is useful for checking if the string was truncated when copied to <S.TextBlue>dst</S.TextBlue>.
      </S.P>
      <S.H3>Summary</S.H3>
      <S.P>The <S.TextBlue>ft_strlcpy</S.TextBlue> function copies a string from src to dst safely, ensuring that dst is always null-terminated and that there is no overflow of the destination buffer (dst). It addresses cases where the destination buffer is smaller than the source string, performing the copy of as many characters as possible while still correctly terminating the destination string. The return of the function indicates the length of the source string, allowing the caller to know if the operation resulted in a truncated string.</S.P>
      <Footer />
    </S.ContainerMain>
  )
}

export default Ft_strcpy
