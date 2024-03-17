import React from 'react'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import * as S from './styles'

const Ft_print_int = () => {
  return (
    <S.ContainerMain>
      <Header />
      <S.H1>ft_print_int</S.H1>
      <S.P>
        This function, named print_int, aims to print an integer n and return
        the number of digits this integer has, including the minus sign for
        negative numbers, except for the specific case of the smallest <S.Gold>32-bit</S.Gold>
        signed integer, which is <S.Gold>-2147483648</S.Gold>.
      </S.P>
      <S.SectionInfo>
        <span>
          <S.Red>#include</S.Red> <S.Green>{'"ft_printf.h"'}</S.Green>
        </span>
        <br />
        <span>
          int <S.SpanTab /> <S.Lilas>print_int</S.Lilas>( int n )
        </span>
        <span>{'{'}</span>
        <S.SpanTab>
          {' '}
          int <S.SpanTab2 />
          <S.SpanTab />
          nb;
        </S.SpanTab>
        <S.SpanTab>
          {' '}
          unsigned int <S.SpanTab />
          i;
        </S.SpanTab>
        <S.SpanTab></S.SpanTab>
        <S.SpanTab>
          {' '}
          nb <S.Green>=</S.Green> n;
        </S.SpanTab>
        <S.SpanTab>
          {' '}
          i <S.Green>= </S.Green>1;
        </S.SpanTab>
        <S.SpanTab>
          {' '}
          <S.Red>if </S.Red>( n <S.Green>{'<'}</S.Green> 0 <S.Green>&&</S.Green>{' '}
          n <S.Green>!=</S.Green> <S.Green>-</S.Green>2147483648 )
        </S.SpanTab>
        <S.SpanTab> {'{'}</S.SpanTab>
        <S.SpanTab>
          <S.SpanTab /> nb <S.Green>= </S.Green> <S.Green>-</S.Green>n;
        </S.SpanTab>
        <S.SpanTab>
          <S.SpanTab /> i<S.Green>++</S.Green>;
        </S.SpanTab>
        <S.SpanTab> {'}'}</S.SpanTab>
        <S.SpanTab>
          <S.Red>while</S.Red> ( nb<S.Green>{' >'}</S.Green> 9 )
        </S.SpanTab>
        <S.SpanTab> {'{'}</S.SpanTab>
        <S.SpanTab>
          <S.SpanTab /> nb <S.Green>=</S.Green> nb <S.Green>/</S.Green> 10;
        </S.SpanTab>
        <S.SpanTab>
          <S.SpanTab /> i<S.Green>++</S.Green>;
        </S.SpanTab>
        <S.SpanTab> {'}'}</S.SpanTab>
        <S.SpanTab>
          {' '}
          <S.Lilas>ft_putnbr_fd</S.Lilas>( n, 1 );
        </S.SpanTab>
        <S.SpanTab>
          {' '}
          <S.Red>if </S.Red> ( n == -2147483648 )
        </S.SpanTab>
        <S.SpanTab>
          <S.SpanTab /> <S.Red>return </S.Red> ( 11 ) ;
        </S.SpanTab>
        <S.SpanTab>
          {' '}
          <S.Red>return </S.Red> ( i ) ;
        </S.SpanTab>
        <span>{'}'}</span>
      </S.SectionInfo>
      <br />
      <br />
      <S.P>

        ° <S.Gold>The function begins by defining two variables:</S.Gold> nb ( which will store
        the absolute value of n or n itself if it is not negative ) and i ( which
        is initialized as 1 and will represent the count of digits of the
        number ).
      </S.P>
      <S.P>
        ° The first if checks if n is negative and different from <S.Gold>-2147483648</S.Gold>.
        If so, the{" number's"} sign is inverted <S.Gold>( making it positive )</S.Gold> to
        facilitate the counting of digits, and i is incremented by <S.Gold>1</S.Gold> to account
        for the minus sign in the final digit count.
      </S.P>
      <S.P>
        ° Next, the function enters a while loop that divides nb by 10
        repeatedly until it is less than 10. For each iteration of the loop
        (i.e., for each division that represents the <S.Gold>{'"removal"'}</S.Gold> of a digit),
        i is incremented. This effectively counts how many digits the number
        has.
      </S.P>
      <S.P>
        ° After exiting the loop, the function uses ft_putnbr_fd<S.Gold>(n, 1) </S.Gold>to print
        the number n to file descriptor 1 (which is usually the terminal or
        stdout in Unix-like environments).
      </S.P>
      <S.P>
        ° Finally, the function checks if the provided number is <S.Gold>-2147483648</S.Gold>.
        This value is treated as a special case because it is the smallest value
        for a <S.Gold>32-bit </S.Gold>signed integer, and its absolute value representation
        cannot be stored in an int type variable ( due to how {"two's"}{' '}
        complement works for integer representation ). If n is <S.Gold>-2147483648</S.Gold>, the
        function <S.Gold>returns 11</S.Gold>, which is the correct number of digits for this
        number (including the minus sign). Otherwise, it returns i, which
        contains the count of digits of n.
      </S.P>
      <S.P>
        °{" It's "}important to note that the function assumes the compilation
        environment uses {"two's"} complement for integer representation and
        that integers are represented using <S.Gold>32 bits</S.Gold> (which implies the value
        range is from <S.Gold>-2147483648</S.Gold> to <S.Gold>2147483647</S.Gold>).
      </S.P>

      <br />
      <Footer />
    </S.ContainerMain>
  )
}
export default Ft_print_int
