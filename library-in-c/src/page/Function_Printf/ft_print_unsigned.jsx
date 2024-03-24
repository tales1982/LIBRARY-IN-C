import React from 'react'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import * as S from './styles'

const Ft_print_unsigned = () => {
  return (
    <S.ContainerMain>
      <Header />
      <S.H1>Ft_print_unsigned.c</S.H1>
      <S.P>
        The print_unsigned function is part of a custom implementation that
        simulates a behavior similar to the printf function from the standard C
        library, focusing specifically on printing unsigned integers (unsigned
        int). {"Let's"} analyze each part of this code in detail.
      </S.P>
      <S.H3>Function convert_num</S.H3>
      <S.SectionInfo>
        <span>
          <S.Red>#include</S.Red> <S.Green>{'"ft_printf.h"'}</S.Green>
        </span>
        <span>
          <S.Red>static</S.Red> void <S.SpanTab />
          <S.Lilas>convert_num</S.Lilas>( unsigned int nb )
        </span>
        <span>{'{'}</span>
        <S.SpanTab>
          <S.Red>if</S.Red> ( nb <S.Green>{'>'}</S.Green> 9 )
        </S.SpanTab>
        <S.SpanTab2>
          <S.Lilas>print_unsigned </S.Lilas>( nb <S.Green>/</S.Green> 10 );
        </S.SpanTab2>
        <S.SpanTab>
          <S.Red>if</S.Red> ( nb <S.Green>{'<='}</S.Green> 9 )
        </S.SpanTab>
        <S.SpanTab>{'{'}</S.SpanTab>
        <S.SpanTab2>
          <S.Lilas>ft_putchar_fd</S.Lilas> (nb <S.Green>+</S.Green> 48, 1);
        </S.SpanTab2>
        <S.SpanTab2>
          <S.Red>return</S.Red> ;
        </S.SpanTab2>
        <S.SpanTab>{'}'}</S.SpanTab>
        <S.SpanTab>
          <S.Lilas>ft_putchar_fd</S.Lilas>( ( nb <S.Green>%</S.Green> 10 ){' '}
          <S.Green>+</S.Green> 48, 1 );
        </S.SpanTab>
        <span>{'}'}</span>
      </S.SectionInfo>
      <br />
      <S.P>
        ° <S.Gold>Objective: </S.Gold> <br /> <S.Green>*</S.Green>This recursive
        function prints an unsigned integer (unsigned int) character by
        character. The base case for the recursion is when nb is less than or
        equal to 9, i.e., when {"it's"} a single digit.
      </S.P>
      <S.P>
        ° <S.Gold>Process: </S.Gold> <br /> <t />
        <S.Green>*</S.Green>If nb is greater than 9, the function calls itself
        (print_unsigned) with nb divided by 10. This splits the number into
        digits, starting from the most significant digit to the least
        significant one. <br />
        <S.Green>*</S.Green>If nb is less than or equal to 9 (base case of
        recursion), the digit is converted to its corresponding ASCII character
        by adding 48 (the ASCII code for {"'0'"}) and printed using
        ft_putchar_fd. <br />
        <S.Green>*</S.Green>After processing the base case, it prints the last
        digit of the number, obtained by the remainder of nb divided by 10 (nb %
        10), also converting it to the corresponding ASCII character.
      </S.P>
      <br />
      <S.H3>Função print_unsigned</S.H3>
      <S.SectionInfo>
        <span>
          int
          <S.SpanTab />
          <S.Lilas>print_unsigned</S.Lilas>( unsigned int nb )
        </span>
        <span>{'{'}</span>
        <S.SpanTab>
          unsigned int
          <S.SpanTab /> i;
        </S.SpanTab>
        <br />
        <S.SpanTab>
          <S.Lilas>convert_num</S.Lilas>( nb );
        </S.SpanTab>
        <S.SpanTab>
          i <S.Green>=</S.Green> 1;
        </S.SpanTab>
        <S.SpanTab>
          <S.Red>while</S.Red> ( nb <S.Green>{'>'}</S.Green> 9 )
        </S.SpanTab>
        <S.SpanTab>
          <span>{'{'}</span>
        </S.SpanTab>
        <S.SpanTab2>
          {' '}
          nb <S.Green>= </S.Green>nb <S.Green>/</S.Green> 10;
        </S.SpanTab2>
        <S.SpanTab2>
          i<S.Green>++</S.Green>;
        </S.SpanTab2>
        <S.SpanTab>
          <span>{'}'}</span>
        </S.SpanTab>
        <S.SpanTab>
          <S.Red>return</S.Red> ( i );
        </S.SpanTab>
        <span>{'}'}</span>
      </S.SectionInfo>
      <br />
      <S.P>
        <S.Gold>Objective: </S.Gold>Prints an unsigned integer and returns the
        length of the number (how many characters were printed).
      </S.P>
      <S.P>
        <S.Gold>Process:</S.Gold>
        <br />
        <S.Green>*</S.Green> The function starts by calling convert_num to print
        the number.
        <br />
        <S.Green>*</S.Green> The variable i is initialized to 1, assuming that
        there is at least one digit to print.
        <br />
        <S.Green>*</S.Green> A while loop counts how many digits the number has
        by dividing the number by 10 until it is less than or equal to 9. With
        each division, the counter i is incremented.
        <br />
        <S.Green>*</S.Green> Returns i, which is the total number of digits of
        the number, thus representing the length of the printed number.
      </S.P>
      <S.H3>Additional Observations</S.H3>
      <S.P>
        This function prints a character to the specified file descriptor, in
        this case, 1, which corresponds to the standard output (stdout). The use
        of 48 to convert numbers into characters is based on the ASCII table,
        where the digits 0 to 9 are represented by the ASCII codes 48 to 57,
        respectively. This implementation shows a way to handle the printing of
        numbers without using high-level functions from the standard C library,
        like printf, focusing on a low-level approach and more granular control
        over the {"program's"} output.
      </S.P>

      <br />
      <Footer />
    </S.ContainerMain>
  )
}
export default Ft_print_unsigned
