import React from 'react'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import * as S from './styles'

const Ft_print_hex = () => {
  return (
    <S.ContainerMain>
      <Header />
      <S.H1>Ft_print_hex </S.H1>
      <S.P>
        This code consists of two functions designed to print an unsigned
        integer value as a hexadecimal string to the standard output, with some
        customization options. {"Let's"} break down each function:
      </S.P>
      <S.H3>Function string</S.H3>
      <S.P>
        The string function allocates and initializes a string that will be used
        to represent the hexadecimal value of an unsigned integer.
      </S.P>
      <S.SectionInfo>
        <span>
          <S.Red>#include</S.Red> <S.Green>{'"ft_printf.h"'}</S.Green>
        </span>
        <br />
        <span>
          <S.Red>
            <S.SpanTab>static </S.SpanTab>
          </S.Red>
          char <S.SpanTab />
          <S.Green>*</S.Green>
          <S.Lilas>string</S.Lilas>( unsigned int value, int{' '}
          <S.Green>*</S.Green>strlen )
        </span>
        <span>{'{'}</span>
        <S.SpanTab>
          int <S.SpanTab2 />
          <S.SpanTab2 />i ;
        </S.SpanTab>
        <S.SpanTab>
          unsigned int <S.SpanTab2 />
          temp ;
        </S.SpanTab>
        <S.SpanTab>
          char <S.SpanTab2 />
          <S.SpanTab />
          <S.Green>*</S.Green>str
        </S.SpanTab>
        <br />
        <S.SpanTab>
          i <S.Green>=</S.Green> 0 ;
        </S.SpanTab>
        <S.SpanTab>
          temp <S.Green>=</S.Green> value ;
        </S.SpanTab>
        <S.SpanTab>
          <S.Red>while</S.Red>( temp <S.Green>!= </S.Green>0 )
        </S.SpanTab>
        <S.SpanTab>{'{'}</S.SpanTab>
        <S.SpanTab>
          <S.SpanTab /> temp <S.Green>= </S.Green> temp <S.Green>/</S.Green> 16
          ;{' '}
        </S.SpanTab>
        <S.SpanTab>
          <S.SpanTab /> i <S.Green>++</S.Green> ;
        </S.SpanTab>
        <S.SpanTab>{'}'}</S.SpanTab>
        <S.SpanTab>
          str <S.Green>=</S.Green> <S.Lilas>calloc</S.Lilas>( i{' '}
          <S.Green>+</S.Green> 1 <S.Red>sizeof</S.Red>( char ) );
        </S.SpanTab>
        <S.SpanTab>
          <S.Green>*</S.Green>strlen <S.Green>=</S.Green> i{' '}
          <S.Green>- </S.Green>1 ;
        </S.SpanTab>
        <S.SpanTab>
          <S.Red>return</S.Red> ( str );
        </S.SpanTab>
        <span>{'}'}</span>
      </S.SectionInfo>
      <br />
      <S.H3>Parameters:</S.H3>
      <S.P>
        ° <S.Gold>unsigned int value:</S.Gold> The unsigned integer value to be
        converted to hexadecimal.
      </S.P>
      <S.P>
        ° <S.Gold>int *strlen:</S.Gold> A pointer to an integer where the length
        of the resulting string (minus one) will be stored.
      </S.P>
      <S.H3>Process:</S.H3>
      <S.P>
        It calculates the length of the hexadecimal representation by dividing
        the value by <S.Gold>16</S.Gold> in a loop until the value becomes{' '}
        <S.Gold>0</S.Gold>. Each division step counts the digits in the
        hexadecimal representation.
      </S.P>
      <S.P>
        It then allocates memory for the string using <S.Gold>calloc</S.Gold>,
        which also initializes the memory to zero. The allocated size is the
        number of <S.Gold>digits (i) </S.Gold>plus one for the{' '}
        <S.Gold>null</S.Gold> terminator.
      </S.P>
      <S.P>
        The length of the string <S.Gold>(minus one)</S.Gold> is stored in the
        location pointed to by strlen.
      </S.P>
      <S.H3>Return Value:</S.H3>
      <S.P>
        It returns a pointer to the allocated string, which is not yet filled
        with the hexadecimal digits ({"it's"} initialized to zeros).
      </S.P>
      <S.H3>Function print_hex</S.H3>
      <S.P>
        The print_hex function prints an unsigned integer in hexadecimal format.
      </S.P>
      <S.SectionInfo>
        <span>
          int <S.SpanTab />
          <S.Lilas>print_hex</S.Lilas>( unsigned int value, int asc )
        </span>
        <span>{'{'}</span>
        <S.SpanTab>
          {' '}
          unsigned int
          <S.SpanTab />
          tempval ;
        </S.SpanTab>
        <S.SpanTab>
          char <S.SpanTab2 />
          *printout ;
        </S.SpanTab>
        <S.SpanTab>
          {' '}
          int
          <S.SpanTab />

          <S.SpanTab2 />i ;
        </S.SpanTab>
        <S.SpanTab>
          {' '}
          int
          <S.SpanTab />

          <S.SpanTab2 />
          <S.Green>*</S.Green>iptr ;
        </S.SpanTab>
        <br />
        <S.SpanTab>
          iptr = <S.Green>&</S.Green>i;
        </S.SpanTab>
        <S.SpanTab>
          tempval <S.Green>=</S.Green> value;
        </S.SpanTab>
        <S.SpanTab>
          printout <S.Green>=</S.Green> <S.Lilas>string</S.Lilas>( value, iptr )
          ;
        </S.SpanTab>
        <S.SpanTab>
          <S.Red>if</S.Red> ( !printout )
        </S.SpanTab>
        <S.SpanTab>
          {' '}

          <S.SpanTab />
          <S.Red>return</S.Red> ( 0 ) ;
        </S.SpanTab>
        <S.SpanTab>
          <S.Red>while</S.Red> ( tempval <S.Green>!= </S.Green> 0 )
        </S.SpanTab>
        <span>
          <S.SpanTab/>
          {'{'}
        </span>
        <S.SpanTab2>
          <S.SpanTab />
          <S.Red>if</S.Red> ( ( tempval <S.Green>%</S.Green> 16 ){' '}
          <S.Green>{'<'}</S.Green> 10 )
        </S.SpanTab2>
        <S.SpanTab2>
          <S.SpanTab />
          <S.SpanTab2 /> printout[ i ] <S.Green>=</S.Green> ( tempval{' '}
          <S.Green>%</S.Green> 16 ) + 48 ;
        </S.SpanTab2>
        <S.SpanTab2>
          <S.SpanTab />
          <S.Red>else</S.Red>{' '}
        </S.SpanTab2>
        <S.SpanTab2>
          <S.SpanTab />
          <S.SpanTab2 /> printout[ i ] <S.Green>=</S.Green> ( tempval{' '}
          <S.Green>%</S.Green> 16 ) + asc ;
        </S.SpanTab2>
        <S.SpanTab2>
          <S.SpanTab />
          tempval <S.Green>/=</S.Green> 16 ;
        </S.SpanTab2>
        <S.SpanTab2>
          <S.SpanTab />i <S.Green>--</S.Green> ;
        </S.SpanTab2>
        <span>
          <S.SpanTab />
          {'}'}
        </span>
        <S.SpanTab>
          <S.Lilas>ft_putstr_fd</S.Lilas>( printout , 1 ) ;
        </S.SpanTab>
        <S.SpanTab>
          i <S.Green>= </S.Green>
          <S.Lilas>ft_strlen</S.Lilas>( printout ) ;
        </S.SpanTab>
        <S.SpanTab>
          <S.Lilas>free</S.Lilas>( printout ) ;
        </S.SpanTab>
        <S.SpanTab>
          <S.Red>if </S.Red>( value <S.Green>== </S.Green>0 )
        </S.SpanTab>
        <S.SpanTab>
          <S.SpanTab />i <S.Green>+=</S.Green> <S.Lilas>print_char</S.Lilas>
          <S.Green>( {"'0'"} )</S.Green> ;
        </S.SpanTab>
        <S.SpanTab>
          <S.Red>return</S.Red> ( i ) ;
        </S.SpanTab>
        <span>{'}'}</span>
      </S.SectionInfo>
      <br />
      <S.H3>Parameters:</S.H3>
      <S.P>
        ° <S.Gold>unsigned int value:</S.Gold> The value to be printed.
      </S.P>
      <S.P>
        ° <S.Gold>int asc:</S.Gold> An adjustment value for the ASCII
        representation of digits above 9. This allows for customization of the
        case <S.Gold>( uppercase or lowercase ) </S.Gold>of the hexadecimal
        letters.
      </S.P>
      <S.H3>Process:</S.H3>
      <S.P>
        ° Calls string function to allocate a string with sufficient length to
        hold the hexadecimal representation of value.
      </S.P>
      <S.P>
        ° If allocation fails <S.Gold>( printout is NULL )</S.Gold>, it{' '}
        <S.Gold>returns 0</S.Gold>.
      </S.P>
      <S.P>
        ° Fills the allocated string with hexadecimal digits by repeatedly
        dividing value by 16 and using the remainder to calculate the character
        to store at each position. The calculation adjusts for numeric{' '}
        <S.Gold>( 0-9 ) </S.Gold>and alphabetic <S.Gold>( a-f or A-F )</S.Gold>{' '}
        characters based on the remainder and the asc parameter.
      </S.P>
      <S.P>
        ° The hexadecimal digits are filled in reverse order, starting from the
        end of the string.
      </S.P>
      <S.P>
        ° Uses <S.Gold>ft_putstr_fd</S.Gold> to print the string to the standard
        output <S.Gold>(file descriptor 1</S.Gold>).
      </S.P>
      <S.P>° Frees the allocated string.</S.P>
      <S.P>
        ° If the original value is <S.Gold>0</S.Gold>, it explicitly prints{' '}
        <S.Gold>{"'0'"}</S.Gold> by calling print_char and adjusts the return
        length.
      </S.P>
      <S.P>
        ° This code efficiently handles hexadecimal conversion and printing,
        including memory allocation for the string and customization of
        hexadecimal digit case through the asc parameter. However, there are
        some potential issues or improvements that could be made, especially in
        error handling and the logic for the case where the original value is 0
        (it seems to handle it explicitly rather than letting the loop take care
        of it, which might be redundant or error-prone).
      </S.P>
      <br />
      <Footer />
    </S.ContainerMain>
  )
}
export default Ft_print_hex
