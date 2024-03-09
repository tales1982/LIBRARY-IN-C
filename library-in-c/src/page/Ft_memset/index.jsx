import React from 'react'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import * as S from './styles'

const Ft_memset = () => {
  return (
    <S.ContainerMain>
      <Header />
      <S.H1>ft_memset</S.H1>
      <S.P>
        The <strong>ft_memset</strong> function is a custom implementation of
        the memset function from the standard C library, which is used to fill a
        block of memory with a specified value. Here is what each part of it
        does, in detail:
      </S.P>
      <S.H3>Function Prototype: </S.H3>
      <S.SectionInfo>
        <span>
          # <S.TextBlue>include </S.TextBlue>{' '}
          <S.TextGreen>{'"libft.h"'}</S.TextGreen>{' '}
        </span>
        <br />
        <span>
          <S.TextRed>int </S.TextRed> <S.TextRed2> *ft_memset</S.TextRed2>(
          <S.TextRed> void </S.TextRed> <S.TextBlue> *</S.TextBlue>b,{' '}
          <S.TextRed>int </S.TextRed> c, <S.TextRed>size_t </S.TextRed> len )
        </span>
        <span>{'{'}</span>
        <S.SpanTab>
          <S.TextRed>char </S.TextRed>{' '}
          <S.SpanTab>
            <S.TextBlue> * </S.TextBlue>
          </S.SpanTab>
          p ;
        </S.SpanTab>
        <br />
        <S.SpanTab>
          p = ( <S.TextRed>char </S.TextRed> <S.TextBlue> * </S.TextBlue> )b ;
        </S.SpanTab>
        <S.SpanTab>
          <S.TextBlue>while </S.TextBlue>( len
          <S.TextBlue> {'>'} </S.TextBlue>0 )
        </S.SpanTab>
        <S.SpanTab>
          <span>{'{'}</span>
          <br />
          <S.SpanTab2>
            p[ len <S.TextBlue> - </S.TextBlue> 1] = c ;
          </S.SpanTab2>
          <br />
          <S.SpanTab2>
            len <S.TextBlue>--</S.TextBlue>;
          </S.SpanTab2>
          <br />
          <span>{'}'}</span>
          <br />
          <S.TextBlue>return</S.TextBlue> (<S.TextRed2> b </S.TextRed2>);
        </S.SpanTab>
        <span>{'}'}</span>
      </S.SectionInfo>
      <br />
      <br />
      <S.H3>Function Body:</S.H3>
      <S.P>
        ° <S.TextRed> char </S.TextRed> <S.TextBlue> * </S.TextBlue> ; declares
        a pointer to char called {'`p`'}. This is necessary because pointer
        arithmetic in C with <S.TextRed> void </S.TextRed>{' '}
        <S.TextBlue> * </S.TextBlue>is not allowed. By converting b to{' '}
        <S.TextRed> void </S.TextRed> <S.TextBlue> * </S.TextBlue>, we can
        manipulate {'`b`'} byte by byte, since <S.TextRed> char </S.TextRed> is
        guaranteed to be 1 byte in size by standard.
      </S.P>
      <S.P>
        ° p = ( <S.TextRed>char </S.TextRed> <S.TextBlue> * </S.TextBlue> )b ;
        converts the <S.TextRed> void </S.TextRed> <S.TextBlue> * </S.TextBlue>{' '}
        pointer to a <S.TextRed>char </S.TextRed> <S.TextBlue> * </S.TextBlue>{' '}
        pointer. This allows the function to manipulate the memory pointed to by{' '}
        {'`b`'} byte by byte.
      </S.P>
      <S.P>
        ° The while (len <S.TextBlue> {'>'} </S.TextBlue> 0) loop continues to
        iterate as long as len, the number of bytes to be filled, is greater
        than 0. This ensures that the function will fill exactly len bytes of
        memory.
      </S.P>
      <S.P>
        ° Inside the loop, p[ len <S.TextBlue> - </S.TextBlue> 1 ] = c ; is
        where the actual filling occurs. This assigns the byte at position len{' '}
        <S.TextBlue> - </S.TextBlue> 1 of the memory block the value c. Note
        that c is implicitly converted to a char when assigned to p[ len{' '}
        <S.TextBlue> - </S.TextBlue> 1 ], as p is a pointer to char. Thus, only
        the least significant byte of c is used.
      </S.P>
      <S.P>
        ° len <S.TextBlue>--</S.TextBlue> ; decrements len, moving the{' '}
        {'"position"'} of filling one byte backwards, towards the beginning of
        the memory block.
      </S.P>
      <br />
      <S.H3>Function Return: return (b);</S.H3>
      <S.P>
        ° After filling len bytes of memory with the value c, the function
        returns the original pointer b. This allows the function to be used in
        chained expressions, passing the filled pointer to other functions
        without the need for an intermediate variable. Essentially, ft_memset
        fills the last len bytes of the memory block pointed to by b with the
        least significant byte of the integer c, starting from the end of the
        block (p[ len <S.TextBlue> - </S.TextBlue> 1 ]) and moving towards the
        beginning, and then returns the original pointer to the memory block.
      </S.P>
      <Footer />
    </S.ContainerMain>
  )
}

export default Ft_memset
