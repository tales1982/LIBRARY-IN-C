import React from 'react'
import Footer from '../../../Components/Footer'
import * as S from './styles'
import Header from '../../../Components/Header'

const Ft_substr = () => {
  return (
    <S.ContainerMain>
      <Header />
      <S.H1>Ft_substr.c</S.H1>
      <S.P>
        This code snippet defines a custom function, ft_substr, designed to
        create a substring from a given string s. The substring starts at index
        start and has a maximum length of len. {"Let's"} break down the
        functionality of each part of this snippet:
      </S.P>
      <S.H3>The ft_min Function</S.H3>
      <S.P>
        <S.Gold>° </S.Gold>This helper function takes two size values, start and
        len, and returns the smaller of the two.{" It's"} used to determine the
        appropriate length of the substring to ensure it {"doesn't"} exceed the
        original {"string's"} length.
      </S.P>
      <S.SectionInfo>
        <span>
          <S.Red>static</S.Red> size_t <S.SpanTab />
          <S.Lilas>ft_min</S.Lilas>(size_t start, size_t len)
        </span>
        <span>{'{'}</span>
        <S.SpanTab>
          <S.Red>if</S.Red> ( start <S.Green>{'<'}</S.Green> len )
        </S.SpanTab>
        <S.SpanTab2>
          <S.Red>return</S.Red> ( start );
        </S.SpanTab2>
        <S.SpanTab>
          <S.Red>return</S.Red> ( len );
        </S.SpanTab>
        <span>{'}'}</span>
      </S.SectionInfo>
      <br />
      <S.H3>The empty_string Function</S.H3>
      <S.P>
        <S.Gold>° </S.Gold>This function allocates memory for a single
        character, initializes it to the null character {"('\0')"}, and returns
        a pointer to this {'"empty"'} string. {"It's"} used in cases where the
        resulting substring is expected to be empty, ensuring the function still
        returns a valid string that can be freed later.
      </S.P>
      <S.SectionInfo>
        <span>
          <S.Red>static</S.Red> <S.SpanTab /> char <S.Green>*</S.Green>
          <S.Lilas>empty_string</S.Lilas>( void )
        </span>
        <span>{'{'}</span>
        <S.SpanTab>
          char <S.SpanTab />
          <S.Green>*</S.Green>result;
        </S.SpanTab>
        <S.SpanTab>
          result <S.Green>=</S.Green> malloc( 1 );
        </S.SpanTab>
        <S.SpanTab>
          <S.Red>if </S.Red>( result )
        </S.SpanTab>
        <S.SpanTab2>
          result[ 0 ] <S.Green>=</S.Green> 0;
        </S.SpanTab2>
        <S.SpanTab>
          <S.Red>return </S.Red>( result );
        </S.SpanTab>
        <span>{'}'}</span>
      </S.SectionInfo>
      <br />
      <S.H3>The ft_substr Function</S.H3>
      <S.SectionInfo>
        <span>
          char
          <S.SpanTab /> <S.Green>*</S.Green>
          <S.Lilas>ft_substr</S.Lilas>( char <S.Red>const</S.Red>{' '}
          <S.Green>*</S.Green>s, unsigned int start, size_t len )
        </span>
        <span>{'{'}</span>
        <S.SpanTab>
          size_t
          <S.SpanTab /> s_len;
        </S.SpanTab>
        <S.SpanTab>
          char <S.SpanTab /> <S.Green>*</S.Green>str;
        </S.SpanTab>
        <br />
        <S.SpanTab>
          s_len <S.Green>=</S.Green> <S.Lilas>ft_strlen</S.Lilas>( s );
        </S.SpanTab>
        <S.SpanTab>
          <S.Red>if </S.Red> ( start <S.Green>{'>='}</S.Green> s_len )
        </S.SpanTab>
        <S.SpanTab>{'{'}</S.SpanTab>
        <S.SpanTab2>
          str <S.Green>=</S.Green> <S.Lilas>empty_string</S.Lilas>( );
        </S.SpanTab2>
        <S.SpanTab2>
          <S.Red>if </S.Red> ( <S.Green>!</S.Green>str )
        </S.SpanTab2>
        <S.SpanTab2>
          <S.SpanTab />
          <S.Red>return</S.Red> (NULL);
        </S.SpanTab2>
        <S.SpanTab2>
          <S.Red>return</S.Red> ( str );
        </S.SpanTab2>
        <S.SpanTab>{'}'}</S.SpanTab>
        <S.SpanTab>
          s_len <S.Green>-=</S.Green> ( size_t )start;
        </S.SpanTab>
        <S.SpanTab>
          <S.Red>if</S.Red> ( len <S.Green>{'>'}</S.Green> s_len )
        </S.SpanTab>
        <S.SpanTab2>
          len <S.Green>=</S.Green> s_len;
        </S.SpanTab2>
        <S.SpanTab>
          len <S.Green>=</S.Green> <S.Lilas>ft_min</S.Lilas>( s_len, len );
        </S.SpanTab>
        <S.SpanTab>
          str <S.Green>=</S.Green> ( char <S.Green>*</S.Green> )
          <S.Lilas>malloc</S.Lilas>( <S.Red>sizeof</S.Red> ( char ){' '}
          <S.Green>*</S.Green> ( len <S.Green>+</S.Green> 1 ) );
        </S.SpanTab>
        <S.SpanTab>
          {' '}
          <S.Red>if </S.Red>( <S.Green>!</S.Green>str )
        </S.SpanTab>
        <S.SpanTab2>
          <S.Red>return</S.Red> (NULL);
        </S.SpanTab2>
        <S.SpanTab>
          <S.Lilas>ft_strlcpy</S.Lilas>( str, s <S.Green>+</S.Green> start, len{' '}
          <S.Green>+</S.Green> 1 );
        </S.SpanTab>
        <S.SpanTab>
          <S.Red>return</S.Red> (str);
        </S.SpanTab>
        <span>{'}'}</span>
      </S.SectionInfo>
      <br />
      <S.H3>Determining the Length of s: </S.H3>
      <S.P>
        <S.Gold>° </S.Gold> It uses ft_strlen (not shown in the snippet, but
        assumed to be a function that returns the length of a string) to find
        the length of the input string s.
      </S.P>
      <S.H3>Handling Start Indexes Beyond the {"String's"} Length:</S.H3>
      <S.P>
        <S.Gold>° </S.Gold> If the start index is greater than or equal to the
        length of s, {"there's"} no substring to create (since starting point is
        beyond the end of the string). In this case, ft_substr calls
        empty_string() to return an empty string.
      </S.P>
      <S.H3>Adjusting Length Parameters:</S.H3>
      <S.P>
        <S.Gold>° </S.Gold> If the start index is within the string, the
        function calculates the effective length of the substring that can be
        created from start to the end of s. This is done by subtracting start
        from the length of s.
      </S.P>
      <S.P>
        <S.Gold>° </S.Gold> It then compares the requested len with the maximum
        possible substring length starting from start. The smaller of these two
        lengths is chosen as the final length for the substring. This ensures
        the substring does not extend beyond the end of s.
      </S.P>
      <S.H3>Allocating Memory for the Substring:</S.H3>
      <S.P>
        <S.Gold>° </S.Gold> Memory is allocated for the substring, accounting
        for the null terminator by adding 1 to the final length. If the
        allocation fails, NULL is returned.
      </S.P>
      <S.H3>Copying the Substring:</S.H3>
      <S.P>
        <S.Gold>° </S.Gold> The function uses ft_strlcpy (not shown in the
        snippet, but assumed to copy a string up to a specified length safely)
        to copy the substring starting from s + start into the newly allocated
        str, using the determined length len + 1 to include the null terminator.
      </S.P>
      <S.H3>Returning the Substring:</S.H3>
      <S.P>
        <S.Gold>° </S.Gold> Finally, ft_substr returns the pointer to the newly
        created substring.
      </S.P>
      <S.H3>In summary:</S.H3>
      <S.P>
        <S.Gold>° </S.Gold> ft_substr carefully calculates the length and
        starting point of the desired substring to ensure it fits within the
        bounds of the original string s, allocates memory for this substring,
        initializes it with the appropriate section of s, and returns the
        result, handling edge cases like starting beyond the end of s or memory
        allocation failures.
      </S.P>
      <Footer />
    </S.ContainerMain>
  )
}
export default Ft_substr
