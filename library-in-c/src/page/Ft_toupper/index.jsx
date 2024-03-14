import React from 'react'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import * as S from './styles'

const Ft_toupper = () => {
  return (
    <S.ContainerMain>
      <Header />
      <S.H1>ft_toupper</S.H1>
      <S.P>
        The ft_toupper function in C is a custom implementation of the standard
        toupper library function in C. Its purpose is to convert a lowercase
        alphabetic character to uppercase. {"Let'"}s analyze the code step by
        step:
      </S.P>
      <S.SectionInfo>
        <span>
          <S.Red># include</S.Red> <S.Green>{'"libft.h"'}</S.Green>
        </span>
        <br />
        <span>
          int <S.Lilas>ft_toupper</S.Lilas>( int i )
        </span>
        <span>{'{'}</span>
        <S.SpanTab>
          {' '}
          <S.Red>if </S.Red> ( i <S.Green>{'>='}</S.Green> {"'a'"}
          <S.Green> &&</S.Green> i <S.Green>{'<='} </S.Green> {"'z'"} )
        </S.SpanTab>
        <S.SpanTab>
          <S.Red>return</S.Red> ( i <S.Green>-</S.Green> 32 );
        </S.SpanTab>
        <S.SpanTab>
          <S.Red>return </S.Red>( i );
        </S.SpanTab>
        <span>{'}'}</span>
      </S.SectionInfo>
      <br />
      <br />
      <S.H3>Function Parameter (int i):</S.H3>
      <S.P>
        ° The function takes an integer i as an argument. In C, characters are
        essentially small integers (typically, char is one byte), so this
        function can take the ASCII code of a character.
      </S.P>
      <S.H3>
        Check Condition <S.Gold>{"( if (i >= 'a' && i <= 'z' )) "}</S.Gold>:
      </S.H3>
      <S.P>
        ° This line checks if the value of i is within the range of lowercase
        alPhabetic characters in the ASCII table. In ASCII,{' '}
        <S.Gold>{"'a'"}</S.Gold> has the value <S.Gold>97</S.Gold>, and{' '}
        <S.Gold>{"'z'"} </S.Gold>has the value <S.Gold>122</S.Gold>. If i is a
        character between <S.Gold>{"'a'"}</S.Gold>and <S.Gold>{"'z'"}</S.Gold>,
        the condition will be true.
      </S.P>
      <S.H3>
        Conversion to Uppercase <S.Gold>(return ( i - 32 );)</S.Gold>:
      </S.H3>
      <S.P>
        ° If the previous condition is true, meaning i is a lowercase letter,
        the line return <S.Gold>(i - 32)</S.Gold>; is executed to convert i to
        uppercase. The difference between the ASCII values of uppercase and
        lowercase letters is <S.Gold>32</S.Gold> (for example, the ASCII value
        of <S.Gold>{"'A'"} </S.Gold>is <S.Gold>65</S.Gold>, and{' '}
        <S.Gold>{"'a'"}</S.Gold> is <S.Gold>97</S.Gold>). Therefore, subtracting
        32 from the ASCII value of a lowercase letter results in the ASCII value
        of its uppercase counterpart.
      </S.P>
      <S.H3>
        Return the Original Value <S.Gold>(return (i)</S.Gold>;):
      </S.H3>
      <S.P>
        ° If i is not a lowercase letter ( i.e., {"it's"} not in the range of{' '}
        <S.Gold>{"'a'"}</S.Gold> to <S.Gold>{"'z'"}</S.Gold> ), the function
        simply returns the original value of i. This means that uppercase
        letters, digits, symbols, and any other characters that are not
        lowercase letters are returned without modification.
      </S.P>
      <S.H3>In summary</S.H3>
      <S.P>
        ° ft_toupper is a function that converts a lowercase character to
        uppercase. If the provided character is already uppercase or is not a
        letter, it is returned without changes.
      </S.P>
      <br />
      <Footer />
    </S.ContainerMain>
  )
}

export default Ft_toupper
