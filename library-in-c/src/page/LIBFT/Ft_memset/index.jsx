import React from 'react'
import Header from '../../../Components/Header'
import Footer from '../../../Components/Footer'
import * as S from './styles'

const Ft_memset = () => {
  return (
    <S.ContainerMain>
      <Header />
      <S.H1>ft_memset</S.H1>
      <S.P>
        The ft_memset function is a custom implementation of the memset function
        from the standard C library, which is used to fill a block of memory
        with a specified value. Here is what each part of it does, in detail:
      </S.P>
      <S.H3>Function Prototype: </S.H3>
      <S.SectionInfo>
        <span>
          <S.Red># include </S.Red> <S.Green>{'"libft.h"'}</S.Green>{' '}
        </span>
        <br />
        <span>
          int <S.Lilas> *ft_memset</S.Lilas>( void <S.Green>* </S.Green>b, int
          c, size_t len )
        </span>
        <span>{'{'}</span>
        <S.SpanTab>
          char{' '}
          <S.SpanTab>
            <S.Green>*</S.Green>
          </S.SpanTab>
          p ;
        </S.SpanTab>
        <br />
        <S.SpanTab>
          p = ( char <S.Green>* </S.Green> )b ;
        </S.SpanTab>
        <S.SpanTab>
          <S.Red>while </S.Red>( len
          <S.Green>{' >'}</S.Green> 0 )
        </S.SpanTab>
        <S.SpanTab>
          <span>{'{'}</span>
          <br />
          <S.SpanTab2>
            p[ len <S.Green>-</S.Green> 1] <S.Green>=</S.Green> c ;
          </S.SpanTab2>
          <br />
          <S.SpanTab2>
            len<S.Green>--</S.Green>;
          </S.SpanTab2>
          <br />
          <span>{'}'}</span>
          <br />
          <S.Red>return</S.Red> ( b );
        </S.SpanTab>
        <span>{'}'}</span>
      </S.SectionInfo>
      <br />
      <br />
      <S.H3>Function Body:</S.H3>
      <S.P>
        <S.Gold>° </S.Gold> char * ; declares a pointer to char called {'`p`'}.
        This is necessary because pointer arithmetic in C with void * is not
        allowed. By converting b to void * , we can manipulate {'`b`'} byte by
        byte, since char is guaranteed to be 1 byte in size by standard.
      </S.P>
      <S.P>
        <S.Gold>° </S.Gold> p = ( char * )b ; converts the void * pointer to a
        char * pointer. This allows the function to manipulate the memory
        pointed to by {'`b`'} byte by byte.
      </S.P>
      <S.P>
        <S.Gold>° </S.Gold> The while ( len {'>'} 0 ) loop continues to iterate
        as long as len, the number of bytes to be filled, is greater than 0 .
        This ensures that the function will fill exactly len bytes of memory.
      </S.P>
      <S.P>
        <S.Gold>° </S.Gold> Inside the loop, [ len - 1 ] = c ; is where the
        actual filling occurs. This assigns the byte at position len -1 of the
        memory block the value c. Note that c is implicitly converted to a char
        when assigned to p[ len - 1 ], as p is a pointer to char. Thus, only the
        least significant byte of c is used.
      </S.P>
      <S.P>
        <S.Gold>° </S.Gold> len-- ; decrements len, moving the {'"position"'} of
        filling one byte backwards, towards the beginning of the memory block.
      </S.P>
  
      <S.P>
        <S.Gold>° </S.Gold>Function Return: return (b): After filling len bytes of memory with the value c,
        the function returns the original pointer b. This allows the function to
        be used in chained expressions, passing the filled pointer to other
        functions without the need for an intermediate variable. Essentially,
        ft_memset fills the last len bytes of the memory block pointed to by b
        with the least significant byte of the integer c, starting from the end
        of the block ( p[ len <S.TextBlue> - </S.TextBlue> 1 ] ) and moving
        towards the beginning, and then returns the original pointer to the
        memory block.
      </S.P>
      <Footer />
    </S.ContainerMain>
  )
}

export default Ft_memset
