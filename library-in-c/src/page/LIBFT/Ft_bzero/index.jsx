import React from 'react'
import Header from '../../../Components/Header'
import Footer from '../../../Components/Footer'
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
        <S.Gold>°</S.Gold> unsigned char *
        ptr declares a pointer to unsigned char called ptr.
        This type is chosen because an unsigned char ensures
        that we are explicitly working with memory bytes, and each{' '}
        unsigned char occupies exactly one byte of memory.
      </S.P>
      <S.P>
        <S.Gold>°</S.Gold> ptr = (unsigned char * )b; converts the generic{' '}
         void * b pointer to an{' '}
        unsigned char *
        pointer. This conversion is necessary for performing the byte-by-byte
        filling operation since pointer arithmetic cannot be directly performed
        with a  void * .
      </S.P>
      <S.P>
        <S.Gold>°</S.Gold> The loop while (n--{' > '}0 ) executes the filling
        operation. The loop condition checks if n is greater than 0 before each
        iteration and then decrements n. This means the loop will continue until
        all n bytes have been zeroed.
      </S.P>
      <S.P>
        <S.Gold>°</S.Gold> *( ptr++ ) = 0;
        within the loop, this line effectively zeros the current byte pointed to
        by ptr and then increments the ptr pointer to point to the next byte of
        memory. The use of the post-increment operator{' '}
        (ptr ++ ) ensures that the current byte is zeroed
        before ptr is incremented.
      </S.P>
      <S.P>
      <S.Gold>°</S.Gold> Overall Functioning:
        The ft_bzero function iterates over n bytes of the memory block pointed
        to by b, zeroing each byte. The ptr pointer is used to access each byte
        sequentially, and after each byte is zeroed, ptr is incremented to point
        to the next byte. The loop ends when all n bytes have been zeroed.
      </S.P>
      <S.P>
      <S.Gold>°</S.Gold> In summary,  ft_bzero zeroes n bytes of memory starting
        from the address provided by b, ensuring that the specified memory block
        is completely filled with zero-value bytes. This is useful for
        initializing or clearing data in a memory block before its use.
      </S.P>
      <Footer />
    </S.ContainerMain>
  )
}

export default Ft_bzero
