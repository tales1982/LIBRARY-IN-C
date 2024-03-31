import React from 'react'
import Header from '../../../Components/Header'
import Footer from '../../../Components/Footer'
import * as S from './styles'

const Ft_strdup = () => {
  return (
    <S.ContainerMain>
      <Header />
      <S.H1>ft_strdup</S.H1>
      <S.P>
        The ft_strdup function is a custom implementation of the standard strdup
        function from the C library. Its purpose is to duplicate a string, that
        is, to create a new string in memory that is an exact copy of a provided
        string (src). The new string is dynamically allocated, meaning it will
        remain in memory until explicitly freed by the programmer using free.
        {"Let's"} detail the operation of the function step by step:
      </S.P>

      <S.SectionInfo>
        <span>
          char <S.SpanTab />
          <S.Green>*</S.Green>
          <S.Lilas>ft_strdup</S.Lilas>( char <S.Green>*</S.Green>src )
        </span>
        <span>{'{'}</span>
        <S.SpanTab>
          char <S.SpanTab />
          <S.Green>*</S.Green>new;
        </S.SpanTab>
        <S.SpanTab>
          int <S.SpanTab />
          i;
        </S.SpanTab>
        <S.SpanTab>
          int <S.SpanTab />
          size;
        </S.SpanTab>
        <br />
        <S.SpanTab>
          size <S.Green>=</S.Green> 0;
        </S.SpanTab>
        <S.SpanTab>
          <S.Red>while</S.Red> ( src[size] )
        </S.SpanTab>
        <S.SpanTab2>
          <S.Green>++</S.Green>size;
        </S.SpanTab2>
        <S.SpanTab>
          <S.Red>if</S.Red> ( <S.Green>!</S.Green> ( new <S.Green>=</S.Green>{' '}
          malloc ( sizeof ( char ) <S.Green>*</S.Green>( size{' '}
          <S.Green>+</S.Green> 1 ) ) ) )
        </S.SpanTab>
        <S.SpanTab2>
          <S.Red>return</S.Red>( NULL );
        </S.SpanTab2>
        <S.SpanTab>
          i <S.Green>=</S.Green> 0;
        </S.SpanTab>
        <S.SpanTab>
          <S.Red>while</S.Red>( src[ i ] )
        </S.SpanTab>
        <S.SpanTab>{'{'}</S.SpanTab>
        <S.SpanTab2>
          new[ i ] <S.Green>=</S.Green> src[ i ];
        </S.SpanTab2>
        <S.SpanTab2>
          i<S.Green>++</S.Green>;
        </S.SpanTab2>
        <S.SpanTab>{'}'}</S.SpanTab>
        <S.SpanTab>
          new[ i ] <S.Green>=</S.Green> {"'\\0'"};
        </S.SpanTab>
        <S.SpanTab>
          <S.Red>return</S.Red>( new );
        </S.SpanTab>
      </S.SectionInfo>
      <br />
      <S.H3>Determining the Size of the Original String:</S.H3>
      <S.P>
        <S.Gold>° </S.Gold>The function begins with the size variable being
        initialized to 0. A while loop iterates over the string src,
        incrementing size until it finds the null character {"'\\0'"}, which
        marks the end of a string in C. This determines the length of the
        original string.
      </S.P>
      <S.H3>Memory Allocation for the New String:</S.H3>
      <S.P>
        <S.Gold>° </S.Gold>After determining the size of the original string,
        the function attempts to allocate enough memory to contain a copy of
        this string. This is done through the call malloc(sizeof(char) * (size +
        1)), where sizeof(char) is the size of a character in bytes (typically 1
        byte) and size + 1 is the length of the original string plus space for
        the final null character. If the allocation fails (for example, due to a
        lack of memory), malloc will return NULL, and the ft_strdup function
        will also return NULL to indicate failure.
      </S.P>
      <S.H3>Copying the String:</S.H3>
      <S.P>
        <S.Gold>° </S.Gold>If the memory allocation is successful, the function
        enters another while loop, where the i variable is used to iterate over
        each character of the original string src. Each character is copied to
        the corresponding position in the new string new until the final null
        character {"'\\0'"} of the original string is reached.
      </S.P>
      <S.H3>Finalizing the New String:</S.H3>
      <S.P>
        <S.Gold>° </S.Gold>After copying all the characters, the function
        manually adds a null character {"'\\0'"} at the end of the new string to
        ensure it is a valid C string. This is necessary because strings in C
        must always end with a null character to indicate where the string ends.
      </S.P>
      <S.H3>Returning the New String:</S.H3>
      <S.P>
        <S.Gold>° </S.Gold>Finally, the function returns the pointer new, which
        points to the newly duplicated string in memory. The caller of the
        function is responsible for freeing this allocated memory when it is no
        longer needed, by calling the free function with the new pointer as an
        argument.
      </S.P>
      <S.H3>In summary:</S.H3>
      <S.P>
        <S.Gold>° </S.Gold>ft_strdup allocates memory for a new string, copies
        each character from the original string into this new memory area
        (including the final null character), and returns a pointer to the new
        duplicated string. It is a useful function for creating copies of
        strings when manipulating the original string is not desired or when it
        is necessary to ensure the string has its own independent memory space.
      </S.P>
      <Footer />
    </S.ContainerMain>
  )
}

export default Ft_strdup
