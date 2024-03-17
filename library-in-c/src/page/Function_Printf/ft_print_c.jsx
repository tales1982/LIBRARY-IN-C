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
      This code represents a simplified implementation of the printf function named  <S.Gold>ft_printf</S.Gold>, which mimics the behavior of the standard printf function from the C library, allowing formatting and printing of various types of data. The code is divided into two main parts: the check_type function and the main  <S.Gold>ft_printf </S.Gold>function.
      </S.P>
      <S.H3>Função check_type</S.H3>
      <S.SectionInfo>
        <span>
          <S.Red>#include</S.Red> <S.Green>{'"ft_printf.h"'}</S.Green>
        </span>
        <br />
        <span>
          static int <S.Lilas>check_type</S.Lilas>(<S.Red>const</S.Red> char input, va_list args )
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
          <S.Red>if</S.Red> ( input <S.Green>==</S.Green>{' '}
          {"'c'"} )
        </span>
        <span>
          <S.Margin /> i <S.Green>+=</S.Green> <S.Lilas>print_char</S.Lilas>( <S.Lilas>va_arg</S.Lilas>( args, int ) );
        </span>
        <span>
          <S.SpanTab />
          <S.Red>else if </S.Red>( input{' '}
          <S.Green>==</S.Green> {"'s'"} )
        </span>
        <span>
          <S.Margin /> i <S.Green>+=</S.Green> <S.Lilas>print_string</S.Lilas>( <S.Lilas>va_arg</S.Lilas>( args, char <S.Green>*</S.Green> ) );
        </span>
        <span>
          <S.SpanTab />
          <S.Red>else if</S.Red> ( input{' '}
          <S.Green>== </S.Green>
          {"'p'"} )
        </span>
        <span>
          <S.Margin /> i <S.Green>+=</S.Green> <S.Lilas>print_pointer</S.Lilas>( <S.Lilas>va_arg</S.Lilas>( args, unsigned long ), 87 );
        </span>
        <span>
          <S.SpanTab />
          <S.Red>else if</S.Red> ( input{' '}
          <S.Green>==</S.Green> {"'d')"} )
        </span>
        <span>
          <S.Margin /> i <S.Green>+=</S.Green> <S.Lilas>print_int</S.Lilas>( <S.Lilas>va_arg</S.Lilas>( args, int ) );
        </span>
        <span>
          <S.SpanTab />
          <S.Red>else if </S.Red>( input{' '}
          <S.Green>==</S.Green> {"'i'"} )
        </span>
        <span>
          <S.Margin /> i <S.Green>+=</S.Green> <S.Lilas>print_int</S.Lilas>( <S.Lilas>va_arg</S.Lilas>( args, int ) );
        </span>
        <span>
          <S.SpanTab />
          <S.Red>else if</S.Red> ( input{' '}
          <S.Green>==</S.Green> {"'u'"} )
        </span>
        <span>
          <S.Margin /> i <S.Green>+=</S.Green> <S.Lilas>print_unsigned</S.Lilas>( <S.Lilas>va_arg</S.Lilas>( args, unsigned int ) );
        </span>
        <span>
          <S.SpanTab />
          <S.Red>else if</S.Red> ( input{' '}
          <S.Green>==</S.Green> {"'x'"} )
        </span>
        <span>
          <S.Margin /> i <S.Green>+=</S.Green> <S.Lilas>print_hex</S.Lilas>( <S.Lilas>va_arg</S.Lilas>(args, unsigned int), 87 );
        </span>
        <span>
          <S.SpanTab />
          <S.Red>else if</S.Red> ( input{' '}
          <S.Green>==</S.Green> {"'X'"} )
        </span>
        <span>
          <S.Margin /> i <S.Green>+=</S.Green> <S.Lilas>print_hex</S.Lilas>( <S.Lilas>va_arg</S.Lilas>( args, unsigned int ), 55 );
        </span>
        <span>
          <S.SpanTab />
          <S.Red>else if</S.Red> ( input{' '}
          <S.Green>==</S.Green> {"'%'"} )
        </span>
        <span>
          <S.Margin /> i <S.Green>+=</S.Green> <S.Lilas>print_char</S.Lilas>({"'%'"});
        </span>
        <span>
          <S.SpanTab />
          <S.Red>return</S.Red> ( i );
        </span>
        <span>{'}'}</span>
        <br />

      </S.SectionInfo>
      <br />
  
      <S.P>° check_type is a static helper function that receives a character representing the format specifier  <S.Gold>{"(such as 'c', 's', 'p', etc.)"}</S.Gold> and a variable argument list  <S.Gold>(va_list)</S.Gold>.</S.P>
     <S.P>° <S.Gold></S.Gold>It checks the format specifier and calls the appropriate print function, passing the argument extracted using  <S.Gold>va_arg </S.Gold>with the corresponding type.</S.P>
     <S.P>° For different format specifiers, different print functions are called:</S.P>
     <S.P>°  <S.Gold>Returns</S.Gold> the total number of characters printed.</S.P>
     <br />
     <S.H3>Function ft_printf:</S.H3>
      <S.SectionInfo>
      <span>
          int <S.Lilas>ft_printf</S.Lilas>( <S.Red>const</S.Red> char{' '}
          <S.Green>*</S.Green> input, ... )
        </span>
        <span>{'{'}</span>
        <span>
          <S.SpanTab />
          <S.Lilas>va_list</S.Lilas>
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
          <S.Lilas>va_start</S.Lilas>( args, input );
        </span>
        <span>
          <S.SpanTab />
          <S.Red>while </S.Red>( <S.Green>*</S.Green>input <S.Green>!=</S.Green>
          {" '\\0'"} )
        </span>
        <span>
          <S.SpanTab />
          {'{'}
        </span>
        <span>
          <S.Margin />
          <S.Red>if</S.Red> ( <S.Green>*</S.Green>input <S.Green>==</S.Green> {"'%'"} )
        </span>
        <span>
        </span>
        <span>
          <S.Margin />
          <S.SpanTab />
          <S.SpanTab />i <S.Green>+=</S.Green><S.Lilas> <S.Lilas>check_type</S.Lilas></S.Lilas>( <S.Green>*</S.Green>(<S.Green>++</S.Green>input ), args,);
        </span>
        <span>
          <S.Margin />
          <S.Red>else</S.Red>
        </span>
        <span>
          <S.Margin />
          <S.SpanTab />
          <S.SpanTab />i <S.Green>+=</S.Green> <S.Lilas>print_char</S.Lilas>( <S.Green>*</S.Green>input );
        </span>
        <span>
        <S.SpanTab /><S.Margin /><S.SpanTab />
          input<S.Green>++</S.Green>;
        </span>
        <span>
          <S.SpanTab />
          {'}'}
        </span>
        <span>
          <S.SpanTab />
          <S.Lilas>va_end</S.Lilas>(args);
        </span>
        <span>
          <S.SpanTab />
          <S.Red>return</S.Red> ( i );
        </span>
        <span>{'}'}</span>
      </S.SectionInfo>
      <br />
     <S.P>° The main function that mimics printf, accepting a format string followed by a variable number of arguments.</S.P>
     <S.P>° It iterates over the format string. If it finds a <S.Gold>{" '%' "}</S.Gold>character, it identifies that the next character specifies the type of data to be printed and calls check_type passing that specifier and the argument list.</S.P>
     <S.P>° f the character is not <S.Gold>{" '%'"}</S.Gold>, the character is printed directly to the output, being part of the literal string format.</S.P>
     <S.P>° Uses the variable argument list  <S.Gold>(va_list) </S.Gold>to access the arguments passed after the format string, initiating it with <S.Gold>va_start</S.Gold>  and finalizing it with <S.Gold>va_end</S.Gold>.</S.P>
     <S.P>° <S.Gold>Returns</S.Gold> the total number of characters printed.</S.P>
     <S.H3>General Considerations:</S.H3>
     <S.P>° This code is a modular implementation of printf functionality, allowing easy extension or modification.</S.P>
     <S.P>° The approach utilizes advanced C concepts, including variable arguments and argument list manipulation, to offer flexibility in formatting and printing different types of data.</S.P>
     <S.P>° Being a simplified implementation, it may not cover all use cases or format specifiers of the original printf, but it serves as a solid foundation for understanding how formatting functions work internally.</S.P>
      <br />
      <Footer />
    </S.ContainerMain>
  )
}
export default Printf_C
