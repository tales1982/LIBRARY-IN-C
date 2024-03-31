import React from 'react'
import Header from '../../../Components/Header'
import Footer from '../../../Components/Footer'
import * as S from './styles'

const Ft_calloc = () => {
  return (
    <S.ContainerMain>
      <Header />
      <S.H1>ft_calloc</S.H1>
      <S.P>
        The ft_calloc function is a custom implementation of the standard calloc
        function from the C library. This function is designed to safely
        allocate memory for an array of nmemb elements of size each, and
        initialize all bytes of this allocated memory to zero. {"Let's"} detail
        each part of the function:
      </S.P>
      <S.SectionInfo>
        <span>void	<S.SpanTab /><S.Green>*</S.Green><S.Lilas>ft_calloc</S.Lilas>( size_t nmemb, size_t size )</span>
        <span>{'{'}</span>
        <S.SpanTab>void	<S.SpanTab /><S.Green>*</S.Green>array;	</S.SpanTab>
        <br />
        <S.SpanTab><S.Red>if </S.Red>( nmemb <S.Green>&&</S.Green> size <S.Green>&&</S.Green> nmemb <S.Green>{'>'}</S.Green> ( 4294967295 <S.Green>/</S.Green> size ) )</S.SpanTab>
        <S.SpanTab2><S.Red>return</S.Red> (NULL);</S.SpanTab2>
        <S.SpanTab>array <S.Green>=</S.Green> ( void <S.Green>*</S.Green> )malloc( nmemb <S.Green>*</S.Green> size );</S.SpanTab>
        <S.SpanTab><S.Red>if </S.Red>( array <S.Green>==</S.Green> NULL )</S.SpanTab>
        <S.SpanTab2><S.Red>return</S.Red> (NULL);</S.SpanTab2>
        <S.SpanTab><S.Lilas>ft_bzero</S.Lilas>( array, ( nmemb <S.Green>*</S.Green> size ) );</S.SpanTab>
        <S.SpanTab><S.Red>return</S.Red> ( array );</S.SpanTab>
        <span>{'}'}</span>
      </S.SectionInfo>
      <br />
      <S.H3>Parameters:</S.H3>
      <S.P>
        <S.Gold>° </S.Gold>nmemb represents the number of elements to be allocated.
      </S.P>
      <S.P>
        <S.Gold>° </S.Gold>size represents the size of each element.
      </S.P>
      <S.H3>Overflow Check:</S.H3>
      <S.P>
        <S.Gold>° </S.Gold>The expression if (nmemb && size && nmemb {'>'} (4294967295 / size)) checks whether multiplying nmemb by size would result in an overflow. The number 4294967295 is the maximum value for an unsigned int in 32-bit systems, equivalent to UINT_MAX. If the product of nmemb and size is greater than this value, the function returns NULL, thus avoiding an overflow situation that could result in incorrect memory allocation.
      </S.P>
      <S.H3>Memory Allocation:</S.H3>
      <S.P>
        <S.Gold>° </S.Gold>array = (void *)malloc(nmemb * size); allocates memory for the array. The malloc function is called with the product of nmemb and size as an argument, requesting a continuous block of memory sufficient to store all the elements. The result is converted to a void * pointer, which can be assigned to any type of pointer in C.
      </S.P>
      <S.H3>Successful Allocation Check:</S.H3>
      <S.P>
        <S.Gold>° </S.Gold>if (array == NULL) checks if the memory allocation failed. If malloc returns NULL, this indicates a failure in memory allocation, possibly due to a lack of available memory. In this case, ft_calloc also returns NULL.
      </S.P>
      <S.H3>Memory Initialization:</S.H3>
      <S.P>
        <S.Gold>° </S.Gold>fbzero(array, (nmemb * size)); calls a function (presumably similar to the standard bzero function, but here named fbzero) to zero out the allocated memory. This step ensures that all bytes in the allocated memory block are set to 0. The fbzero function receives two arguments: the pointer to the allocated memory (array) and the total size of the memory to be zeroed (nmemb * size), ensuring that the entire allocated area is initialized.
      </S.P>
      <S.H3>Return:</S.H3>
      <S.P>
        <S.Gold>° </S.Gold>Finally, the function returns the pointer to the allocated and initialized memory. This allows the caller of the function to use the allocated memory to store data, with the assurance that all data starts at zero.
      </S.P>
      <S.H3>In summary:</S.H3>
      <S.P><S.Gold>° </S.Gold>ft_calloc is a function carefully designed for safe memory allocation and initialization, with built-in checks to prevent overflow and ensure that all allocated memory is initialized to zero before being used.</S.P>
      <Footer />
    </S.ContainerMain>
  )
}

export default Ft_calloc
