import React from 'react'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import * as S from './styles'

const Ft_print_int = () => {
  return (
    <S.ContainerMain>
      <Header />
      <S.H1>ft_print_pointer</S.H1>
      <S.P>
        This function is part of a custom implementation of printf, a standard C
        function for printing formatted data. {"Let's"} break down its operation
        into parts, focusing on each function present in the code:
      </S.P>
      <S.H3>Function string</S.H3>
      <S.P>
        The string function is a static function (meaning its scope is limited
        to the source file) that generates a string representing a number in
        hexadecimal base. It takes an unsigned long numerical value and a
        pointer to an integer (int *strlen) that will be used to store the
        resulting {"string's"} length.
      </S.P>
      <S.SectionInfo>
        <span>
          <S.Red>#include</S.Red> <S.Green>{'"ft_printf.h"'}</S.Green>
        </span>
        <br />
        <span>
          <S.Red>static </S.Red>char <S.SpanTab /> <S.Green>*</S.Green>
          <S.Lilas>string</S.Lilas>( unsigned long value, int{' '}
          <S.Green>*</S.Green>strlen )
        </span>
        <span>{'{'}</span>
        <S.SpanTab>
          {' '}
          unsigned long <S.SpanTab2 />
          <S.SpanTab />
          temp;
        </S.SpanTab>
        <S.SpanTab>
          {' '}
          char <S.SpanTab /> <S.SpanTab2 />
          i;
        </S.SpanTab>
        <S.SpanTab>
          {' '}
          int <S.SpanTab /> <S.SpanTab2 />
          <S.SpanTab2 />
          <S.Green>*</S.Green>str;
        </S.SpanTab>
        <br />
        <S.SpanTab></S.SpanTab>
        <S.SpanTab>
          {' '}
          i <S.Green>=</S.Green> 0;
        </S.SpanTab>
        <S.SpanTab>
          {' '}
          temp <S.Green>= </S.Green>valeu;
        </S.SpanTab>
        <S.SpanTab>
          <S.Red>while</S.Red> ( temp <S.Green>!= </S.Green>0 )
        </S.SpanTab>
        <S.SpanTab>{'{'}</S.SpanTab>
        <S.SpanTab>
          <S.SpanTab2 />
          <S.SpanTab2 /> temp <S.Green>/=</S.Green> 16;
        </S.SpanTab>
        <S.SpanTab>
          <S.SpanTab2 />
          <S.SpanTab2 /> i <S.Green>++</S.Green>;
        </S.SpanTab>
        <S.SpanTab>{'}'}</S.SpanTab>
        <S.SpanTab>
          str <S.Green>=</S.Green>
          <S.Lilas> calloc</S.Lilas>( i + 1, <S.Red>sizeof</S.Red>( char ));
        </S.SpanTab>
        <S.SpanTab>
          <S.Green>*</S.Green>strlen
          <S.Green> =</S.Green> i<S.Green> -</S.Green> 1;
        </S.SpanTab>
        <S.SpanTab>
          <S.Red>return</S.Red>( str );
        </S.SpanTab>
        <span>{'}'}</span>
      </S.SectionInfo>
      <br />
      <S.P>
        <S.Gold>° </S.Gold> Initial Variables: Creates a temporary variable temp
        and a variable i to count the number of digits.
      </S.P>
      <S.P>
        <S.Gold>° </S.Gold> Digit Counting: Uses a loop to count how many digits
        are needed to represent value in base 16 (hexadecimal).
      </S.P>
      <S.P>
        <S.Gold>° </S.Gold> Memory Allocation: Allocates enough memory for the
        resulting string, including the null termination character, using
        calloc, which initializes the allocated memory to zero.
      </S.P>
      <S.P>
        <S.Gold>° </S.Gold> Updating *strlen: Updates the value pointed by
        strlen to be the length of the string (number of digits) minus one
      </S.P>
      <S.P>
        <S.Gold>° </S.Gold> Returning the Allocated String: Returns the pointer
        to the allocated string.
      </S.P>
      <S.H3>Function printnil</S.H3>
      <S.P>
        Checks if the passed value is 0 and, if so, prints the string{' '}
        {"'(nil)'"}. This is useful for representing null pointers in a pointer
        printing context.
      </S.P>
      <S.SectionInfo>
        <span>
          int <S.SpanTab />
          <S.Lilas>printnil</S.Lilas> ( unsigned long value )
        </span>
        <span>{'{'}</span>
        <S.SpanTab>
          int <S.SpanTab2 />
          count;
        </S.SpanTab>
        <br />
        <S.SpanTab>
          count <S.Green> = </S.Green>0;
        </S.SpanTab>
        <S.SpanTab>
          <S.Red>if </S.Red>( value <S.Green>==</S.Green> 0 )
        </S.SpanTab>
        <S.SpanTab2>
          <S.SpanTab2 />
          <S.SpanTab2 />
          count
          <S.Green> +=</S.Green>
          <S.Lilas> print_string</S.Lilas>(<S.Green>{'"( nil )"'}</S.Green>)
        </S.SpanTab2>
        <S.SpanTab>
          <S.Red>return</S.Red> ( count )
        </S.SpanTab>
        <span>{'}'}</span>
      </S.SectionInfo>
      <br />
      <S.P>
        <S.Gold>° </S.Gold> Counter Initialization: Starts a character printed
        counter (count) as 0 .
      </S.P>
      <S.P>
        <S.Gold>° </S.Gold> Condition and Printing: If value is 0, prints{' '}
        {'"(nil)"'} and increments count with the number of printed characters.
      </S.P>
      <S.P>
        <S.Gold>° </S.Gold> Counter Return: Returns the total number of
        characters printed.
      </S.P>
      <S.H3>Function print_pointer</S.H3>
      <S.P>
        Prints the hexadecimal representation of a pointer value, preceded by{' '}
        0x.
      </S.P>
      <S.SectionInfo>
        <span>
          int <S.SpanTab />
          <S.Lilas>print_pointer</S.Lilas>( unsigned long value, int asc )
        </span>
        <span>{'{'}</span>
        <S.SpanTab>
          int <S.SpanTab2 />
          <S.SpanTab2 />
          count;{' '}
        </S.SpanTab>
        <S.SpanTab>
          char <S.SpanTab2 />
          <S.Green>*</S.Green>printout;
        </S.SpanTab>
        <S.SpanTab>
          int <S.SpanTab2 />
          <S.SpanTab2 />
          <S.Green>*</S.Green>iptr;
        </S.SpanTab>
        <S.SpanTab>
          int <S.SpanTab2 />
          <S.SpanTab2 />
          i;
        </S.SpanTab>
        <br />
        <S.SpanTab>
          count <S.Green>= </S.Green>
          <S.Lilas>printnil</S.Lilas>( value );
        </S.SpanTab>
        <S.SpanTab>
          <S.Red>if </S.Red>( count <S.Green>!= </S.Green>0 )
        </S.SpanTab>
        <S.SpanTab>
          <S.SpanTab2 />
          <S.SpanTab2 />
          <S.Red>return</S.Red>( count );
        </S.SpanTab>
        <S.SpanTab>
          iptr <S.Green>= &</S.Green>i;
        </S.SpanTab>
        <S.SpanTab>
          printout{' '}
          <S.Green>
            {' '}
            <S.Green>= </S.Green>
            <S.Lilas>string</S.Lilas>
          </S.Green>
          ( value, iptr );
        </S.SpanTab>
        <S.SpanTab>
          <S.Red>if </S.Red>( <S.Green>!</S.Green>printout )
        </S.SpanTab>
        <S.SpanTab>
          <S.SpanTab2 />
          <S.SpanTab2 />
          <S.Red>return</S.Red>( 0 );
        </S.SpanTab>
        <S.SpanTab>
          <S.Red>while</S.Red>(value <S.Green>!= </S.Green>0{' '}
          <S.Green>&& </S.Green>i<S.Green>-- {'>='}</S.Green> 0)
        </S.SpanTab>
        <S.SpanTab2>{'{'}</S.SpanTab2>
        <S.SpanTab>
          <S.SpanTab2 />
          <S.SpanTab2 />
          <S.Red>if</S.Red> ( (value <S.Green>%</S.Green>16){' '}
          <S.Green>{'<'}</S.Green> 10 )
        </S.SpanTab>
        <S.SpanTab>
          <S.SpanTab2 />
          <S.SpanTab2 />
          <S.SpanTab2 />
          <S.SpanTab2 />
          printout[i <S.Green>+</S.Green> 1] <S.Green>=</S.Green> (value{' '}
          <S.Green>%</S.Green> 16) <S.Green>+</S.Green> {"'0'"};
        </S.SpanTab>
        <S.SpanTab>
          <S.SpanTab2 />
          <S.SpanTab2 />
          <S.Red>else</S.Red>
        </S.SpanTab>
        <S.SpanTab>
          <S.SpanTab2 />
          <S.SpanTab2 />
          <S.SpanTab2 />
          <S.SpanTab2 />
          printout[i <S.Green>+</S.Green> 1] <S.Green>=</S.Green> (value{' '}
          <S.Green>%</S.Green> 16) <S.Green>+</S.Green> asc;
        </S.SpanTab>
        <S.SpanTab>
          <S.SpanTab2 />
          <S.SpanTab2 />
          value <S.Green>/=</S.Green> 16;
        </S.SpanTab>
        <S.SpanTab2>{'}'}</S.SpanTab2>
        <S.SpanTab>
          count <S.Green>= </S.Green>
          <S.Lilas>print_string</S.Lilas>( <S.Green>{'"0x"'}</S.Green> );
        </S.SpanTab>
        <S.SpanTab>
          count <S.Green>+=</S.Green>
          <S.Lilas>ft_strlen</S.Lilas>( printout );
        </S.SpanTab>
        <S.SpanTab>
          <S.Lilas>ft_putstr_fd</S.Lilas>( printout, 1 );
        </S.SpanTab>
        <S.SpanTab>
          <S.Lilas>free</S.Lilas>( printout );
        </S.SpanTab>
        <S.SpanTab>
          <S.Red>return</S.Red>( count );
        </S.SpanTab>
        <span>{'}'}</span>
      </S.SectionInfo>
      <br />
      <S.P>
        <S.Gold>° </S.Gold> nil Check: Uses printnil to check if the value is 0
        and, if so, prints {'"(nil)"'} and{' '}
      </S.P>
      <S.P>
        <S.Gold>° </S.Gold> String Conversion: Calls the string function to
        convert the pointer value into a hexadecimal string.
      </S.P>
      <S.P>
        <S.Gold>° </S.Gold> Allocation Check: Checks if the string was correctly
        allocated.
      </S.P>
      <S.P>
        <S.Gold>° </S.Gold> Hexadecimal Formatting: Uses a loop to convert each
        digit of value into its respective hexadecimal character, considering
        whether the digits are less than 10 or not, and adjusts the conversion
        based on the asc parameter for uppercase or lowercase letters.
      </S.P>
      <S.P>
        <S.Gold>° </S.Gold> Prefix and String Printing: Prints the prefix 0x,
        followed by the hexadecimal string representing the pointer value.
      </S.P>
      <S.P>
        <S.Gold>° </S.Gold> Memory Release: Frees the memory allocated for the
        hexadecimal string.
      </S.P>
      <S.P>
        <S.Gold>° </S.Gold> Counter Return: Returns the total number of
        characters printed during the function.
      </S.P>
      <S.P>
        <S.Gold>° </S.Gold> The asc parameter is used to adjust the initial
        character for hexadecimal digits above 9, allowing the choice between
        uppercase and lowercase letters in the hexadecimal representation.
      </S.P>
      <Footer />
    </S.ContainerMain>
  )
}
export default Ft_print_int
