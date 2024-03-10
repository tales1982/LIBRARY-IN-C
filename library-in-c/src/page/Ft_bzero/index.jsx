import React from 'react'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import * as S from './styles'

const Ft_bzero = () => {
  return (
    <S.ContainerMain>
      <Header />
      <S.H1>ft_bzero</S.H1>
      <S.P>
        The ft_bzero function is a customized implementation of the standard C{' '}
        {"library's"} bzero function. Its purpose is to zero (fill with
        zero-value bytes) a memory block. Here is what it does in detail:
      </S.P>
      <S.SectionInfo>
        <span>
          <S.Red># include </S.Red> <S.Green>{'"libft.h"'}</S.Green>{' '}
        </span>
        <span>
          void <S.Lilas> ft_bzero</S.Lilas>( void <S.Green> *</S.Green>b, int c,
          size_t n )
        </span>
        <span>{'{'}</span>
        <S.SpanTab>
          unsigned char
          <S.SpanTab>
            <S.Green> *</S.Green>ptr;
          </S.SpanTab>
        </S.SpanTab>
        <br />
        <S.SpanTab>
          ptr = ( unsigned char
          <S.Green> *</S.Green>)b;
        </S.SpanTab>
        <S.SpanTab>
          <S.Red>while</S.Red> ( n<S.Green>--{' > '}</S.Green> 0 )
        </S.SpanTab>
        <S.SpanTab2>
          <S.Green> *</S.Green>( ptr<S.Green>++ </S.Green>) <S.Green>=</S.Green>{' '}
          0;
        </S.SpanTab2>
        {'}'}
      </S.SectionInfo>
      <br />
      <S.H3>Function Body:</S.H3>
      <S.P>
        ° <S.Gold>unsigned char *</S.Gold>
        ptr declares a pointer to <S.Gold>unsigned char</S.Gold> called ptr.
        This type is chosen because an <S.Gold>unsigned char</S.Gold> ensures
        that we are explicitly working with memory bytes, and each{' '}
        <S.Gold>unsigned char</S.Gold> occupies exactly one byte of memory.
      </S.P>
      <S.P>
        ° <S.Gold>ptr = (unsigned char * )b;</S.Gold> converts the generic{' '}
        <S.Gold> void *</S.Gold> b pointer to an{' '}
        <S.Gold>unsigned char * </S.Gold>
        pointer. This conversion is necessary for performing the byte-by-byte
        filling operation since pointer arithmetic cannot be directly performed
        with a <S.Gold> void *</S.Gold> .
      </S.P>
      <S.P>
        ° The loop while (<S.Gold>n--{' > '}0</S.Gold> ) executes the filling
        operation. The loop condition checks if n is greater than 0 before each
        iteration and then decrements n. This means the loop will continue until
        all n bytes have been zeroed.
      </S.P>
      <S.P>
        ° <S.Gold>*( ptr++ ) = 0;</S.Gold>
        within the loop, this line effectively zeros the current byte pointed to
        by ptr and then increments the ptr pointer to point to the next byte of
        memory. The use of the post-increment operator{' '}
        <S.Gold>(ptr ++ )</S.Gold> ensures that the current byte is zeroed
        before ptr is incremented.
      </S.P>
      <S.P>
        <strong>Overall Functioning:</strong>
        The ft_bzero function iterates over n bytes of the memory block pointed
        to by b, zeroing each byte. The ptr pointer is used to access each byte
        sequentially, and after each byte is zeroed, ptr is incremented to point
        to the next byte. The loop ends when all n bytes have been zeroed.
      </S.P>
      <S.P>
        In summary, <S.Gold> ft_bzero</S.Gold> zeroes n bytes of memory starting
        from the address provided by b, ensuring that the specified memory block
        is completely filled with zero-value bytes. This is useful for
        initializing or clearing data in a memory block before its use.
      </S.P>
      <Footer />
    </S.ContainerMain>
  )
}

export default Ft_bzero
