import React from 'react'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import * as S from './styles'

const Printf_C = () => {
  return (
    <S.ContainerMain>
      <Header />
      <S.H1>ft_printf.c</S.H1>
      <S.P>
        This code is a simplified implementation of a ft_printf function, a
        custom version of the standard printf function from the C library.{' '}
        {"It's"} designed to process a user-supplied format string, along with a
        variable number of additional arguments, and print the formatted output
        according to the specifications of the string. {"Let's"} detail the main
        parts of this code:
      </S.P>
      <S.SectionInfo>
        <span>
          <S.Red>#include</S.Red> <S.Green>{'"ft_printf.h"'}</S.Green>
        </span>
        <br />
        <span>
          static int <S.Lilas>check_type</S.Lilas>(<S.Red>const</S.Red> char{' '}
          <S.Green>*</S.Green>input, void <S.Green>*</S.Green>arg)
        </span>
        <span>{'{'}</span>
        <S.SpanTab>
          int <S.SpanTab>i</S.SpanTab>;
        </S.SpanTab>
        <br />
        <S.SpanTab>
          i <S.Green>=</S.Green> 0;
        </S.SpanTab>
        <span>
          <S.SpanTab />
          <S.Red>if</S.Red> ( <S.Green>*</S.Green>input <S.Green>==</S.Green>{' '}
          {"'c'"} )
        </span>
        <span>
          <S.Margin /> i <S.Green>+=</S.Green> print_char(( int ) arg );
        </span>
        <span>
          <S.SpanTab />
          <S.Red>else if </S.Red>( <S.Green>*</S.Green>input{' '}
          <S.Green>==</S.Green> {"'s'"} )
        </span>
        <span>
          <S.Margin /> i <S.Green>+=</S.Green> print_string((char{' '}
          <S.Green>*</S.Green> ) arg);
        </span>
        <span>
          <S.SpanTab />
          <S.Red>else if</S.Red> ( <S.Green>*</S.Green>input{' '}
          <S.Green>== </S.Green>
          {"'p'"} )
        </span>
        <span>
          <S.Margin /> i <S.Green>+=</S.Green> print_pointer( ( unsigned long )
          arg, 87 );
        </span>
        <span>
          <S.SpanTab />
          <S.Red>else if</S.Red> ( <S.Green>*</S.Green>input{' '}
          <S.Green>==</S.Green> {"'d')"} )
        </span>
        <span>
          <S.Margin /> i <S.Green>+=</S.Green> print_int( ( int )arg );
        </span>
        <span>
          <S.SpanTab />
          <S.Red>else if </S.Red>( <S.Green>*</S.Green>input{' '}
          <S.Green>==</S.Green> {"'i'"} )
        </span>
        <span>
          <S.Margin /> i <S.Green>+=</S.Green> print_int( ( int) arg );
        </span>
        <span>
          <S.SpanTab />
          <S.Red>else if</S.Red> ( <S.Green>*</S.Green>input{' '}
          <S.Green>==</S.Green> {"'u'"} )
        </span>
        <span>
          <S.Margin /> i <S.Green>+=</S.Green> print_unsigned( ( unsigned int)
          arg );
        </span>
        <span>
          <S.SpanTab />
          <S.Red>else if</S.Red> ( <S.Green>*</S.Green>input{' '}
          <S.Green>==</S.Green> {"'x'"} )
        </span>
        <span>
          <S.Margin /> i <S.Green>+=</S.Green> print_hex( ( unsigned int) arg,
          87 );
        </span>
        <span>
          <S.SpanTab />
          <S.Red>else if</S.Red> ( <S.Green>*</S.Green>input{' '}
          <S.Green>==</S.Green> {"'X'"} )
        </span>
        <span>
          <S.Margin /> i <S.Green>+=</S.Green> print_hex( ( unsigned int) arg,
          55 );
        </span>
        <span>
          <S.SpanTab />
          <S.Red>return</S.Red> ( i );
        </span>
        <span>{'}'}</span>
        <br />
        <span>
          int <S.Lilas>ft_printf</S.Lilas>( <S.Red>const</S.Red> char{' '}
          <S.Green>*</S.Green>input, ... )
        </span>
        <span>{'{'}</span>
        <span>
          <S.SpanTab />
          va_list
          <S.Margin />
          args;
        </span>
        <span>
          <S.SpanTab />
          unsigned int <S.SpanTab />
          i;
        </span>
        <br />
        <span>
          <S.SpanTab />i <S.Green>=</S.Green> 0;
        </span>
        <span>
          <S.SpanTab />
          va_start( args, input );
        </span>
        <span>
          <S.SpanTab />
          while ( <S.Green>*</S.Green>input <S.Green>!=</S.Green>
          {"'\\0'"} )
        </span>
        <span>
          <S.SpanTab />
          {'{'}
        </span>
        <span>
          <S.Margin />
          if ( <S.Green>*</S.Green>input <S.Green>==</S.Green> {"'%'"} )
        </span>
        <span>
          <S.Margin />
          {'{'}
        </span>
        <span>
          <S.Margin />
          <S.SpanTab />
          input<S.Green>++</S.Green>;
        </span>
        <span>
          <S.Margin />
          <S.SpanTab />
          if ( ft_strchr( {'"cspdiuxX"'}, <S.Green>*</S.Green>input ) )
        </span>
        <span>
          <S.Margin />
          <S.Margin />
          <S.SpanTab />i <S.Green>+=</S.Green> check_type( input, va_arg( args,
          void <S.Green>*</S.Green> ) );
        </span>
        <span>
          <S.Margin />
          <S.SpanTab />
          else if ( <S.Green>*</S.Green>input <S.Green>==</S.Green> {" '%'"} )
        </span>
        <span>
          <S.Margin />
          <S.Margin />
          <S.SpanTab />i <S.Green>+=</S.Green> print_char( {"'%'"} );
        </span>
        <span>
          <S.Margin />
          {'}'}
        </span>
        <span>
          <S.Margin />
          else
        </span>
        <span>
          <S.Margin />
          
          <S.SpanTab />i<S.Green> = </S.Green> i <S.Green>+</S.Green>{' '}
          print_char( <S.Green>*</S.Green>input );
        </span>
        <span>
          <S.Margin />
          input<S.Green>++</S.Green>;
        </span>
        <span>
          <S.SpanTab />
          {'}'}
        </span>
        <span>
          <S.SpanTab />
          va_end(args);
        </span>
        <span>
          <S.SpanTab />
          <S.Red>return</S.Red> (i);
        </span>
        <span>{'}'}</span>
      </S.SectionInfo>
      <br />
      <S.H3>Header File Inclusion</S.H3>
      <S.P>
        <S.Gold>{'#include "ft_printf.h"'} </S.Gold>This line includes the
        header file ft_printf.h, which contains the declarations of the
        functions used in this file, such as print_char, print_string,
        print_pointer, among others, and the declaration of ft_printf itself.
      </S.P>
      <S.H3>Function check_type</S.H3>
      <S.P>
        <S.Gold>{'static int	check_type(const char *input, void *arg)'}</S.Gold>{' '}
        This is the main implementation of the ft_printf function. It accepts a
        format string input and a variable number of additional arguments. The
        function uses the variable argument list args to access these additional
        arguments.
      </S.P>
      <S.H3>Format String Processing</S.H3>
      <S.P>
        The main loop of the ft_printf function iterates over each character in
        the format string. When it encounters a <S.Gold>{"'%'"}</S.Gold>{' '}
        character, it advances to the next character to determine the specified
        argument type and then:
      </S.P>
      <S.P>
        ° Calls <S.Gold>check_type</S.Gold> with the appropriate argument if the
        following character is a valid format specifier{' '}
        <S.Gold>{"('c', 's', 'p', 'd', 'i', 'u', 'x', 'X')."}</S.Gold>
      </S.P>
      <S.P>
        ° Prints a <S.Gold>{"'%'"}</S.Gold> character if the following character
        is also <S.Gold>{"'%'"}</S.Gold>.
      </S.P>
      <S.P>
        ° For any other character, it simply prints the character as is.
      </S.P>
      <S.H3>Variable Arguments</S.H3>
      <S.P>
        The va_start macro initializes the variable argument list args to allow
        access to the arguments provided after input. va_arg is used to retrieve
        the next argument in the list with the specified type{' '}
        <S.Gold>
          (void* in this case, which is then cast to the appropriate type within
          check_type)
        </S.Gold>{' '}
        . va_end cleans up the variable argument list.
      </S.P>
      <S.H3>Return</S.H3>
      <S.P>The function returns the total number of characters printed.</S.P>
      <S.H3>Conclusion</S.H3>
      <S.P>
      This code is an excellent example of how to implement a function that handles variable arguments and format strings to produce formatted output in a custom manner. It demonstrates important concepts such as variable argument lists, type casting, and flow control based on format specifiers.
      </S.P>
      <br />
      <Footer />
    </S.ContainerMain>
  )
}
export default Printf_C
