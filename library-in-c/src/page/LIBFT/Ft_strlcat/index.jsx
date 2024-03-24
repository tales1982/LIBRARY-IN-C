import React from 'react'
import Header from '../../../Components/Header'
import Footer from '../../../Components/Footer'
import * as S from './styles'

const Ft_strlcat = () => {
  return (
    <S.ContainerMain>
      <Header />
      <S.H1>ft_strlcat</S.H1>
      <S.P>
        The ft_strlcat function is a custom implementation of
        the strlcat function found in some C libraries. It is
        designed to concatenate strings safely, ensuring that the destination
        buffer is not overwritten and that it always ends with a null character{' '}
        \0, even when the size of the destination buffer is not
        sufficient to contain the complete concatenation. detail the function:
      </S.P>

      <S.SectionInfo>
        <span>
          size_t
          <S.Lilas> ft_strlcat</S.Lilas>( char <S.Green>*</S.Green>dst,{' '}
          <S.TextRed>const </S.TextRed>char <S.Green>*</S.Green>src, size_t
          dstsize )
        </span>
        <span>{'{'}</span>
        <S.SpanTab>
          size_t
          <S.SpanTab>src_len;</S.SpanTab>
        </S.SpanTab>
        <S.SpanTab>
          size_t
          <S.SpanTab>dst_len;</S.SpanTab>
        </S.SpanTab>
        <S.SpanTab>
          char
          <S.SpanTab>
            <S.Green>*</S.Green>s;
          </S.SpanTab>
        </S.SpanTab>
        <br />
        <S.SpanTab>
          s <S.Green> = </S.Green> ( char <S.Green>*</S.Green>) src ;
        </S.SpanTab>
        <S.SpanTab></S.SpanTab>
        <S.SpanTab>
          src_len <S.Green> = </S.Green> <S.Lilas>ft_strlen</S.Lilas>( s );
        </S.SpanTab>
        <S.SpanTab>
          dst_len <S.Green> = </S.Green> <S.Lilas>ft_strlen</S.Lilas>( dst );
        </S.SpanTab>
        <S.SpanTab>
          <S.Red>if</S.Red> ( dst_len <S.Green>{' >'}= </S.Green> dstsize )
        </S.SpanTab>
        <S.SpanTab2>
          dst_len <S.Green>= </S.Green>dstsize;
        </S.SpanTab2>
        <S.SpanTab>
          <S.Red>if</S.Red> ( dst_len <S.Green>== </S.Green> dstsize )
        </S.SpanTab>
        <S.SpanTab2>
          <S.Red>return</S.Red> ( dstsize <S.Green>+ </S.Green> src_len);
        </S.SpanTab2>
        <S.SpanTab>
          <S.Red>if</S.Red> ( src_len <S.Green>{'<'} </S.Green> dstsize{' '}
          <S.Green>- </S.Green>dst_len )
        </S.SpanTab>
        <S.SpanTab2>
          <S.Lilas>ft_memcpy</S.Lilas> (dst <S.Green>+ </S.Green>dst_len, src,
          src_len <S.Green>+ </S.Green>1);
        </S.SpanTab2>
        <S.SpanTab>
          <S.Red>else</S.Red>
          <br />
          <span>{'{'}</span>
          <br />
          <S.SpanTab2>
            <S.Lilas>ft_memcpy</S.Lilas> ( dst <S.Green> {'+'}</S.Green>{' '}
            dst_len, src, dstsize
            <S.Green> - </S.Green> dst_len <S.Green> - </S.Green>1 )
          </S.SpanTab2>
        </S.SpanTab>
        <S.SpanTab2>
          <S.SpanTab>
            dst[ dstsize <S.Green> - </S.Green> 1] <S.Green> = </S.Green>{' '}
            {"'\\0'"};
          </S.SpanTab>
        </S.SpanTab2>
        <S.SpanTab>
          <span>{'}'}</span>
        </S.SpanTab>
        <S.SpanTab>
          <S.Red>return</S.Red> ( dst_len <S.Green> + </S.Green> src_len );
        </S.SpanTab>
        <span>{'}'}</span>
      </S.SectionInfo>
      <br />
      <S.H3>Function Body</S.H3>
      <S.P>
        <S.Gold>° </S.Gold>Determining the Source Length:{' '}
        size_t src_len = ft_strlen(src); calculates the length
        of the source string (src) using the{' '}
        ft_strlen function, which returns the number of
        characters in src before the null termination character.
      </S.P>
      <S.P>
        <S.Gold>° </S.Gold>Conditional Copy with Null Termination:The function
        then checks if src_len + 1 {'< '}dstsize. This
        condition verifies whether there is sufficient space in the destination{' '}
        (dst) to copy the entire source string{' '}
        (src), including the null termination character.
      </S.P>
      <S.P>
        <S.Gold>° </S.Gold>If true, ft_memcpy(dst, src, src_len + 1); is called
        to copy src_len + 1 bytes (the content of src plus the
        null character) to dst.
      </S.P>
      <S.P>
        <S.Gold>° </S.Gold>Handling Smaller Destination Buffer:If{' '}
        src_len + 1 is not less than dstsize (indicating that
        dst cannot safely accommodate the entire src), the
        function checks if dstsize is not 0
        to avoid accessing a zero-sized array, which would be undefined.
      </S.P>
      <S.P>
        <S.Gold>° </S.Gold>If dstsize is not 0,{' '}
        ft_memcpy(dst, src, dstsize - 1); copies{' '}
        dstsize - 1 bytes from src to{' '}
        dst, the maximum possible leaving space for a null
        character. Then, dst[dstsize - 1] = 0; explicitly adds
        a null character at the end of dst to ensure the resulting string is
        properly terminated.
      </S.P>
      <S.P>
        <S.Gold>° </S.Gold>Return: The function returns src_len
        , the length of the source string. This is useful for checking if the
        string was truncated when copied to dst.
      </S.P>
      <S.H3>Summary</S.H3>
      <S.P>
      <S.Gold>° </S.Gold>The ft_strlcpy function copies a string from
        src to dst safely, ensuring that dst is always
        null-terminated and that there is no overflow of the destination buffer{' '}
        (dst). It addresses cases where the destination buffer
        is smaller than the source string, performing the copy of as many
        characters as possible while still correctly terminating the destination
        string. The return of the function indicates the length of the source
        string, allowing the caller to know if the operation resulted in a
        truncated string.
      </S.P>
      <Footer />
    </S.ContainerMain>
  )
}
export default Ft_strlcat
