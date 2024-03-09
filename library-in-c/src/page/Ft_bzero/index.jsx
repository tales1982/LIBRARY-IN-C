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
          # <S.TextBlue>include </S.TextBlue>{' '}
          <S.TextGreen>{'"libft.h"'}</S.TextGreen>{' '}
        </span>
        <span>
          <S.TextRed>void </S.TextRed> <S.TextRed2> ft_bzero</S.TextRed2>(
          <S.TextRed> void </S.TextRed> <S.TextBlue> *</S.TextBlue>b,{' '}
          <S.TextRed>int </S.TextRed> c, <S.TextRed>size_t </S.TextRed> n )
        </span>
        <span>{'{'}</span>
        <S.SpanTab>
          <S.TextRed>unsigned char</S.TextRed>
          <S.SpanTab>
            <S.TextBlue> *</S.TextBlue>ptr;
          </S.SpanTab>
        </S.SpanTab>
        <br />
        <S.SpanTab>
          ptr = (<S.TextRed>unsigned char</S.TextRed>
          <S.TextBlue> *</S.TextBlue>)b;
        </S.SpanTab>
        <S.SpanTab>
          <S.TextRed>while</S.TextRed> ( n<S.TextBlue>--</S.TextBlue> {'> '}0 )
        </S.SpanTab>
        <S.SpanTab2>
          <S.TextBlue> *</S.TextBlue>( ptr<S.TextBlue>++ </S.TextBlue>) = 0;
        </S.SpanTab2>
        {'}'}
      </S.SectionInfo>
      <br />
      <S.H3>Function Body:</S.H3>
      <S.P>
        ° <S.TextRed>unsigned char</S.TextRed>
        <S.TextBlue> *</S.TextBlue>ptr declares a pointer to{' '}
        <S.TextRed>unsigned char</S.TextRed> called ptr. This type is chosen
        because an <S.TextRed>unsigned char</S.TextRed> ensures that we are
        explicitly working with memory bytes, and each{' '}
        <S.TextRed>unsigned char</S.TextRed> occupies exactly one byte of
        memory.
      </S.P>
      <S.P>
        ° ptr = (<S.TextRed>unsigned char</S.TextRed>
        <S.TextBlue> *</S.TextBlue>)b; converts the generic{' '}
        <S.TextRed> void </S.TextRed> <S.TextBlue> *</S.TextBlue>b pointer to an{' '}
        <S.TextRed>unsigned char</S.TextRed>
        <S.TextBlue> *</S.TextBlue> pointer. This conversion is necessary for
        performing the byte-by-byte filling operation since pointer arithmetic
        cannot be directly performed with a <S.TextRed> void </S.TextRed>{' '}
        <S.TextBlue> *</S.TextBlue>.
      </S.P>
      <S.P>
        ° The loop while (n<S.TextBlue>--</S.TextBlue> {'> '}0) executes the
        filling operation. The loop condition checks if n is greater than 0
        before each iteration and then decrements n. This means the loop will
        continue until all n bytes have been zeroed.
      </S.P>
      <S.P>
        ° <S.TextBlue> *</S.TextBlue>( ptr<S.TextBlue>++ </S.TextBlue>) = 0;
        within the loop, this line effectively zeros the current byte pointed to
        by ptr and then increments the ptr pointer to point to the next byte of
        memory. The use of the post-increment operator (ptr
        <S.TextBlue>++ </S.TextBlue>) ensures that the current byte is zeroed
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
        In summary, <S.TextRed2> ft_bzero</S.TextRed2> zeroes n bytes of memory
        starting from the address provided by b, ensuring that the specified
        memory block is completely filled with zero-value bytes. This is useful
        for initializing or clearing data in a memory block before its use.
      </S.P>
      <Footer />
    </S.ContainerMain>
  )
}

export default Ft_bzero
