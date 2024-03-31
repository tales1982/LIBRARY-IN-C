import React from 'react'
import Header from '../../../Components/Header'
import Footer from '../../../Components/Footer'
import * as S from './styles'

const Ft_atoi = () => {
  return (
    <S.ContainerMain>
      <Header />
      <S.H1>ft_atoi</S.H1>
      <S.P>
        The ft_atoi function converts a string (a sequence of characters) into
        an integer. The detailed process is as follows:
      </S.P>
      <S.SectionInfo>
        <span>
          int
          <S.SpanTab2 />
          <S.Lilas>ft_atoi</S.Lilas>( <S.Red>const</S.Red> char{' '}
          <S.Green>*</S.Green>str )
        </span>
        <span>{'{'}</span>
        <S.SpanTab>
          int
          <S.SpanTab />
          i;
        </S.SpanTab>
        <S.SpanTab>
          int
          <S.SpanTab />
          neg;
        </S.SpanTab>
        <S.SpanTab>
          int
          <S.SpanTab />
          res;
        </S.SpanTab>
        <br />
        <S.SpanTab>
          i <S.Green>=</S.Green> 0;
        </S.SpanTab>
        <S.SpanTab>
          neg <S.Green>=</S.Green> 1;
        </S.SpanTab>
        <S.SpanTab>
          res <S.Green>=</S.Green> 0;
        </S.SpanTab>
        <S.SpanTab>
          <S.Red>while</S.Red> ( str[ i ] <S.Green>==</S.Green> {"'  '"}{' '}
          <S.Green>||</S.Green> ( str[ i ] <S.Green>{'>='}</S.Green> 9{' '}
          <S.Green>&&</S.Green> str[ i ] <S.Green>{'<='}</S.Green> 13 ) )
        </S.SpanTab>
        <S.SpanTab2>
          i<S.Green>++</S.Green>;
        </S.SpanTab2>
        <S.SpanTab>
          <S.Red>if </S.Red> ( str[ i ] <S.Green>==</S.Green> {"' - '"}{' '}
          <S.Green>||</S.Green> str[ i ] <S.Green>==</S.Green> {"' + '"} )
        </S.SpanTab>
        <S.SpanTab>{'{'}</S.SpanTab>
        <S.SpanTab2>
          <S.Red>if</S.Red> ( str[ i ] <S.Green>==</S.Green> {"' - '"} )
        </S.SpanTab2>
        <S.SpanTab2>
          <S.SpanTab />
          neg <S.Green>*=</S.Green> -1;
        </S.SpanTab2>
        <S.SpanTab2>
          i<S.Green>++</S.Green>;
        </S.SpanTab2>
        <S.SpanTab>{'}'}</S.SpanTab>
        <S.SpanTab>
          <S.Red>while</S.Red> ( str[ i ] <S.Green>{'>='}</S.Green> {"'0'"}{' '}
          <S.Green>&&</S.Green> str[ i ] <S.Green>{'<='}</S.Green> {"'9'"} )
        </S.SpanTab>
        <S.SpanTab>{'{'}</S.SpanTab>
        <S.SpanTab2>
          res <S.Green>=</S.Green>( str[ i ] <S.Green>-</S.Green> {"'0'"} ){' '}
          <S.Green>+</S.Green> ( res <S.Green>*</S.Green> 10 );
        </S.SpanTab2>
        <S.SpanTab2>
          i<S.Green>++</S.Green>;
        </S.SpanTab2>
        <S.SpanTab>{'}'}</S.SpanTab>
        <S.SpanTab>
          <S.Red>return</S.Red>( res <S.Green>*</S.Green> neg );
        </S.SpanTab>
        <span>{'}'}</span>
      </S.SectionInfo>
      <br />
      <S.H3>Variable Initialization:</S.H3>
      <S.P>
        <S.Gold>° </S.Gold>i is initialized to 0 to serve as an index while
        iterating through the characters of the string str.
      </S.P>
      <S.P>
        <S.Gold>° </S.Gold>neg is initialized to 1 to indicate the sign of the
        resulting number. If a minus sign ({"' - '"}) is encountered, neg will
        become -1.
      </S.P>
      <S.P>
        <S.Gold>° </S.Gold>res is initialized to 0 and will store the numeric
        value converted from the string.
      </S.P>
      <S.H3>Skipping Whitespaces and Control Characters:</S.H3>
      <S.P>
        <S.Gold>° </S.Gold>The initial while loop skips whitespace ({"' '"}) and
        control characters (ASCII 9 to 13, which include tab, newline, etc.),
        incrementing i until a significant character (one that is not a
        whitespace or control character) is found.
      </S.P>
      <S.H3>Sign Check:</S.H3>
      <S.P>
        <S.Gold>° </S.Gold>The function checks if the current character (after
        skipping spaces and control characters) is a plus {"(' + ')"} or minus{' '}
        {"(' - ')"} sign. If it is a minus sign, neg is multiplied by -1 to
        indicate that the number is negative. After that, i is incremented to
        move to the next character.
      </S.P>
      <S.H3>Number Conversion:</S.H3>
      <S.P>
        <S.Gold>° </S.Gold>A second while loop iterates while the current
        character is between {"'0'"} and {"'9'"} (i.e., it is a numeric digit).
      </S.P>
      <S.P>
        <S.Gold>° </S.Gold>For each digit found, the value of res is updated to
        include this digit. This is done by subtracting {"'0'"} from the
        character (converting the digit character to the corresponding integer
        number), multiplying the current res by 10 (to {'"move"'} the number one
        decimal place to the left), and then adding the integer value of the
        current digit. For example, if res is 12 and the current digit is{' '}
        {"'3'"}, then res would become 123.
      </S.P>
      <S.P>
        <S.Gold>° </S.Gold>i is incremented after each digit is processed to
        move to the next character in the string.
      </S.P>
      <S.H3>Result Return:</S.H3>
      <S.P>
        <S.Gold>° </S.Gold>Finally, the function returns res * neg, which is the
        converted numeric value, adjusted to be negative if a minus sign was
        encountered.
      </S.P>
      <S.H3>In summary:</S.H3>
      <S.P>
        <S.Gold>° </S.Gold>ft_atoi parses a string to extract an integer number,
        ignoring leading whitespace and control characters, handling positive
        and negative signs, and converting the sequence of numeric digits into
        an integer value, respecting the order and sign of the digits.
      </S.P>
      <Footer />
    </S.ContainerMain>
  )
}

export default Ft_atoi
