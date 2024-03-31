import React from 'react'
import Footer from '../../../Components/Footer'
import * as S from './styles'
import Header from '../../../Components/Header'

const Ft_strnstr = () => {
  return (
    <S.ContainerMain>
      <Header />
      <S.H1>Ft_strnstr.c</S.H1>
      <S.P>
        The ft_strnstr function is a custom implementation of the strnstr
        function, found in some standard C libraries. Its purpose is to locate
        the first occurrence of the substring needle within the string haystack,
        but examining no more than n characters of the haystack string. If
        needle is found, the function returns a pointer to the beginning of the
        first occurrence in haystack. Otherwise, it returns NULL. {"Here's"} a
        detailed breakdown of how the function works:
      </S.P>
      <S.SectionInfo>
        <span>
          int <S.SpanTab />
          <S.Green>*</S.Green>
          <S.Lilas>ft_strnstr</S.Lilas>( <S.Red>const</S.Red> char{' '}
          <S.Green>*</S.Green>haystack, <S.Red>const</S.Red> char{' '}
          <S.Green>*</S.Green>needle, size_t n)
        </span>
        <span>{'{'}</span>
        <S.SpanTab>
          size_t <S.SpanTab />
          i;
        </S.SpanTab>
        <S.SpanTab>
          size_t <S.SpanTab />
          j;
        </S.SpanTab>
        <br />
        <S.SpanTab>
          i <S.Green>=</S.Green> 0;
        </S.SpanTab>
        <S.SpanTab>
          j <S.Green>=</S.Green> 0;
        </S.SpanTab>
        <S.SpanTab>
          <S.Red>if </S.Red>( needle <S.Green>==</S.Green> NULL{' '}
          <S.Green>||</S.Green> needle[0] <S.Green>==</S.Green> {"'\\0'"} )
        </S.SpanTab>
        <S.SpanTab2>
          {' '}
          <S.SpanTab />
          <S.Red>return</S.Red> ( ( char <S.Green>*</S.Green>)haystack );
        </S.SpanTab2>
        <S.SpanTab>
          <S.Red>while</S.Red> (haystack[i] <S.Green>!=</S.Green> {"'\\0'"}{' '}
          <S.Green>&& </S.Green>i <S.Green>{'<'}</S.Green> n)
        </S.SpanTab>
        <S.SpanTab>{'{'}</S.SpanTab>
        <S.SpanTab2>
          <S.Red>if</S.Red> ( haystack[ i ] <S.Green>==</S.Green> needle[ j ] )
        </S.SpanTab2>
        <S.SpanTab2>{'{'}</S.SpanTab2>
        <S.SpanTab2>
          <S.SpanTab />
          <S.Red>while</S.Red> (haystack[ i <S.Green>+ </S.Green>j ]{' '}
          <S.Green>==</S.Green> needle[ j ] <S.Green>&&</S.Green> i{' '}
          <S.Green>+</S.Green> j <S.Green>{'<'}</S.Green> n)
        </S.SpanTab2>
        <S.SpanTab2>
          <S.SpanTab />
          {'{'}
        </S.SpanTab2>
        <S.SpanTab2>
          <S.SpanTab2 />
          <S.Red>if </S.Red>(needle[ j <S.Green>+ </S.Green> 1 ]{' '}
          <S.Green>==</S.Green> {"'\\0'"})
        </S.SpanTab2>
        <S.SpanTab2>
          <S.SpanTab2 />
          <S.SpanTab />
          <S.Red>return</S.Red> ( ( char <S.Green>*</S.Green> )haystack{' '}
          <S.Green>+</S.Green> i );
        </S.SpanTab2>
        <S.SpanTab2>
          <S.SpanTab2 />j<S.Green>++</S.Green>;
        </S.SpanTab2>
        <S.SpanTab2>
          <S.SpanTab />
          {'}'}
        </S.SpanTab2>
        <S.SpanTab2>
          <S.SpanTab />j <S.Green>=</S.Green> 0;
        </S.SpanTab2>
        <S.SpanTab2>{'}'}</S.SpanTab2>
        <S.SpanTab2>
          i<S.Green>++</S.Green>;
        </S.SpanTab2>
        <S.SpanTab>{'}'}</S.SpanTab>
        <S.SpanTab>
          <S.Red>return</S.Red> ( NULL );
        </S.SpanTab>
        <span>{'}'}</span>
      </S.SectionInfo>
      <br />
      <S.H3>Initialization of Variables i and j:</S.H3>
      <S.P>
        <S.Gold>°</S.Gold> i is used to track the current position in haystack
        during the search.
      </S.P>
      <S.P>
        <S.Gold>°</S.Gold> j is used to compare the current position in needle
        with the corresponding position in haystack.
      </S.P>
      <S.H3>Checking the needle String:</S.H3>
      <S.P>
        <S.Gold>°</S.Gold> If needle is NULL or an empty string (needle[ 0 ] =={' '}
        {"'\\0'"}), the function immediately returns the haystack pointer. This
        is because an empty string is considered to be present at any point in
        another string.
      </S.P>
      <S.H3>Main Search:</S.H3>
      <S.P>
        <S.Gold>°</S.Gold> The search continues while we have not reached the
        end of haystack (haystack[i] != {"'\\0'"}) and iis less thann`, the
        limit of characters to be examined.
      </S.P>
      <S.P>
        <S.Gold>° </S.Gold> Within the main loop, a sub-loop checks if the
        current character of haystack (haystack[ i ]) matches the current
        character of needle (needle[ j ]):
      </S.P>
      <S.P>
        <S.Gold>° </S.Gold> If they match, the sub-loop continues to check the
        next characters of haystack and needle (haystack[ i + j ] == needle[j])
        while i + j is less than n.
      </S.P>
      <S.P>
        <S.Gold>°</S.Gold> If they match, the sub-loop continues to check the
        next characters of haystack and needle (haystack[i + j] == needle[j])
        while i + j is less than n.
      </S.P>
      <S.H3>Resetting j and Incrementing i:</S.H3>
      <S.P>
        <S.Gold>°</S.Gold> If, at any point, the sequence of characters from
        needle stops matching with haystack, the j counter is reset to 0. This
        allows the search to start over from the next position in haystack.
      </S.P>
      <S.P>
        <S.Gold>°</S.Gold> i is incremented to continue the search at the next
        position in haystack.
      </S.P>
      <S.H3>Returning NULL:</S.H3>
      <S.P>
        <S.Gold>° </S.Gold> If the function finishes examining haystack without
        finding needle, it returns NULL, indicating that needle was not found
        within the first n characters of haystack.
      </S.P>
      <S.H3>In summary</S.H3>
      <S.P>
        <S.Gold>°</S.Gold> This function is useful for searching for substrings
        within limited portions of strings, which can be particularly valuable
        for text analysis that needs to be restricted to specific segments or to
        avoid analyzing very large strings in their entirety.
      </S.P>
      <Footer />
    </S.ContainerMain>
  )
}
export default Ft_strnstr
