import React from 'react'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import * as S from './styles'

const Ft_strlcat = () => {
  return (
    <S.ContainerMain>
      <Header />
      <S.H1>ft_strlcat</S.H1>
      <S.P>The ft_strlcat function is a custom implementation of the strlcat function found in some C libraries. It is designed to concatenate strings safely, ensuring that the destination buffer is not overwritten and that it always ends with a null character \0, even when the size of the destination buffer is not sufficient to contain the complete concatenation. {"d"} detail the function:</S.P>

      <S.SectionInfo>
        <span>
          <S.TextBlue>size_t </S.TextBlue>
          <S.TextRed2>ft_strlcat</S.TextRed2>( <S.TextRed>char </S.TextRed>{' '}
          <S.TextBlue>*</S.TextBlue>dst, <S.TextRed>const </S.TextRed>char{' '}
          <S.TextBlue>*</S.TextBlue>src, <S.TextRed>size_t </S.TextRed>dstsize )
        </span>
        <span>{'{'}</span>
        <S.SpanTab>
          <S.TextRed>size_t </S.TextRed>
          <S.SpanTab>src_len;</S.SpanTab>
        </S.SpanTab>
        <S.SpanTab>
          <S.TextRed>size_t </S.TextRed>
          <S.SpanTab>dst_len;</S.SpanTab>
        </S.SpanTab>

        <S.SpanTab>
          <S.TextRed>char </S.TextRed>
          <S.SpanTab>
            <S.TextBlue>*</S.TextBlue>s;
          </S.SpanTab>
        </S.SpanTab>
        <br />
        <S.SpanTab>
          s = ({' '}
          <S.TextRed>
            char <S.TextBlue>*</S.TextBlue>{' '}
          </S.TextRed>{' '}
          ) src ;
        </S.SpanTab>
        <S.SpanTab></S.SpanTab>
        <S.SpanTab>
          src_len = <S.TextRed2>ft_strlen</S.TextRed2>( s );
        </S.SpanTab>
        <S.SpanTab>
          dst_len = <S.TextRed2>ft_strlen</S.TextRed2>( dst );
        </S.SpanTab>
        <S.SpanTab>
          <S.TextRed>if</S.TextRed> ( dst_len{' >'}= dstsize )
        </S.SpanTab>
        <S.SpanTab2>dst_len = dstsize;</S.SpanTab2>
        <S.SpanTab>
          <S.TextRed>if</S.TextRed> ( dst_len == dstsize )
        </S.SpanTab>
        <S.SpanTab2>
          <S.TextBlue>return</S.TextBlue> ( <S.TextRed>dstsize</S.TextRed> +{' '}
          <S.TextRed>src_len</S.TextRed> );
        </S.SpanTab2>
        <S.SpanTab>
          <S.TextRed>if</S.TextRed> ( src_len {'<'} dstsize - dst_len )
        </S.SpanTab>
        <S.SpanTab2>
          <S.TextRed2>ft_memcpy</S.TextRed2> (dst + dst_len, src, src_len + 1);
        </S.SpanTab2>
        <S.SpanTab>
          <S.TextRed>else</S.TextRed>
          <br />
          <span>{'{'}</span>
          <br />
          <S.SpanTab2>
            <S.TextRed2>ft_memcpy</S.TextRed2> ( dst {'+'} dst_len, src, dstsize
            - dst_len - 1 )
          </S.SpanTab2>
        </S.SpanTab>
        <S.SpanTab2>
          <S.SpanTab>dst[ dstsize - 1] = {"'\\0'"};</S.SpanTab>
        </S.SpanTab2>
        <S.SpanTab>
          <span>{'}'}</span>
        </S.SpanTab>
        <S.SpanTab>
          <S.TextBlue>return</S.TextBlue> ( <S.TextRed>dst_len</S.TextRed> +{' '}
          <S.TextRed>src_len</S.TextRed>);
        </S.SpanTab>
        <span>{'}'}</span>
      </S.SectionInfo>
      <br />
      <S.H3>Function Body</S.H3>
      <S.P>
        ° <strong>Determining the Source Length:</strong>{' '}
        <S.TextBlue>size_t src_len = ft_strlen(src);</S.TextBlue> calculates the
        length of the source string <S.TextBlue>(src)</S.TextBlue> using the{' '}
        <S.TextBlue>ft_strlen</S.TextBlue> function, which returns the number of
        characters in src before the null termination character.
      </S.P>
      <S.P>
        °{' '}
        <strong>
          Conditional Copy with Null Termination:The function then checks if{' '}
          <S.TextBlue>src_len + 1 {'< '}dstsize</S.TextBlue>. This condition
          verifies whether there is sufficient space in the destination{' '}
          <S.TextBlue>(dst)</S.TextBlue> to copy the entire source string{' '}
          <S.TextBlue>(src)</S.TextBlue>, including the null termination
          character.
        </strong>
      </S.P>
      <S.P>
        ° If true, <S.TextBlue>ft_memcpy(dst, src, src_len + 1);</S.TextBlue> is
        called to copy <S.TextBlue>src_len + 1</S.TextBlue> bytes (the content
        of src plus the null character) to <S.TextBlue>dst</S.TextBlue>.
      </S.P>
      <S.P>
        ° <strong>Handling Smaller Destination Buffer:</strong>If{' '}
        <S.TextBlue>src_len + 1</S.TextBlue> is not less than dstsize
        (indicating that dst cannot safely accommodate the entire{' '}
        <S.TextBlue>src</S.TextBlue>), the function checks if dstsize is not 0
        to avoid accessing a zero-sized array, which would be undefined.
      </S.P>
      <S.P>
        ° If dstsize is not 0,{' '}
        <S.TextBlue>ft_memcpy(dst, src, dstsize - 1);</S.TextBlue> copies{' '}
        <S.TextBlue>dstsize - 1</S.TextBlue> bytes from{' '}
        <S.TextBlue>src</S.TextBlue> to <S.TextBlue>dst</S.TextBlue>, the
        maximum possible leaving space for a null character. Then,{' '}
        <S.TextBlue>dst[dstsize - 1] = 0;</S.TextBlue> explicitly adds a null
        character at the end of dst to ensure the resulting string is properly
        terminated.
      </S.P>
      <S.P>
        ° <strong>Return:</strong> The function returns{' '}
        <S.TextBlue>src_len</S.TextBlue>, the length of the source string. This
        is useful for checking if the string was truncated when copied to{' '}
        <S.TextBlue>dst</S.TextBlue>.
      </S.P>
      <S.H3>Summary</S.H3>
      <S.P>
        The <S.TextRed2>ft_strlcpy</S.TextRed2> function copies a string from
        src to dst safely, ensuring that dst is always null-terminated and that
        there is no overflow of the destination buffer (dst). It addresses cases
        where the destination buffer is smaller than the source string,
        performing the copy of as many characters as possible while still
        correctly terminating the destination string. The return of the function
        indicates the length of the source string, allowing the caller to know
        if the operation resulted in a truncated string.
      </S.P>

      <Footer />
    </S.ContainerMain>
  )
}
export default Ft_strlcat
