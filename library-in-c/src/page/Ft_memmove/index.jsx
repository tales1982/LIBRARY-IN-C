import React from 'react'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import * as S from './styles'

const Ft_memmove = () => {
  return (
    <S.ContainerMain>
      <Header />
      <S.H1>ft_memmove</S.H1>
      <S.P>
        The ft_memmove function is a customized implementation of the standard C{' '}
        {"library's"} memmove function, designed to copy n bytes of memory from
        a source location (s2) to a destination location (s1), safely handling
        overlaps between the source and destination memory regions. {"Let's"}{' '}
        explore what this function does in detail:
      </S.P>

      <S.SectionInfo>
        <span>
          # <S.TextBlue>include </S.TextBlue>{' '}
          <S.TextGreen>{'"libft.h"'}</S.TextGreen>{' '}
        </span>
        <span>
          <S.TextRed>void </S.TextRed>{' '}
          <S.TextRed2>
            {' '}
            <S.TextBlue> *</S.TextBlue>ft_memmove
          </S.TextRed2>
          (<S.TextRed> void </S.TextRed> <S.TextBlue> *</S.TextBlue>s1,{' '}
          <S.TextRed>const </S.TextRed> void <S.TextBlue> *</S.TextBlue>s2,{' '}
          <S.TextRed>size_t </S.TextRed> n )
        </span>
        <span>{'{'}</span>
        <S.SpanTab>
          <S.TextRed>
            <S.TextRed>size_t </S.TextRed>
          </S.TextRed>
          <S.SpanTab>len;</S.SpanTab>
        </S.SpanTab>
        <br />
        <S.SpanTab>len = 0;</S.SpanTab>
        <S.SpanTab>
          <S.TextRed>if</S.TextRed> ( s2 {'< '}s1 )
        </S.SpanTab>
        <S.SpanTab>{'{'}</S.SpanTab>
        <S.SpanTab2>
          <S.SpanTab>len = n;</S.SpanTab>{' '}
        </S.SpanTab2>
        <S.SpanTab2>
          <S.SpanTab>
            <S.TextRed>while</S.TextRed>
          </S.SpanTab>
          ( len {'> '}0 )
        </S.SpanTab2>
        <S.SpanTab2>
          <S.SpanTab></S.SpanTab> {'{'}
        </S.SpanTab2>
        <S.SpanTab2>
          <S.SpanTab>
            {' '}
            <S.SpanTab>
              len<S.TextBlue>--</S.TextBlue>;
            </S.SpanTab>{' '}
          </S.SpanTab>
        </S.SpanTab2>
        <S.SpanTab2>
          <S.SpanTab>
            <S.SpanTab>
              (( <S.TextRed>unsigned char </S.TextRed>{' '}
              <S.TextBlue>*</S.TextBlue>) s1 )[ len ] = ((
              <S.TextRed>unsigned char </S.TextRed> <S.TextBlue>*</S.TextBlue>)
              s2 )[ len ];
            </S.SpanTab>
          </S.SpanTab>
        </S.SpanTab2>
        <S.SpanTab>
          <S.SpanTab2>{'}'}</S.SpanTab2>
        </S.SpanTab>
        <S.SpanTab>{'}'}</S.SpanTab>
        <S.SpanTab>
          <S.TextRed>else</S.TextRed>
        </S.SpanTab>
        <S.SpanTab>{'{'}</S.SpanTab>
        <S.SpanTab2>
          <S.SpanTab>len = 0;</S.SpanTab>{' '}
        </S.SpanTab2>
        <S.SpanTab2>
          <S.SpanTab>
            <S.TextRed>while</S.TextRed> ( len {'< '}n )
          </S.SpanTab>
        </S.SpanTab2>
        <S.SpanTab2>
          <S.SpanTab>{'{'}</S.SpanTab>
        </S.SpanTab2>
        <S.SpanTab2>
          <S.SpanTab2>
            (( <S.TextRed>unsigned char </S.TextRed> <S.TextBlue>*</S.TextBlue>)
            s1 )[ len ] = ((
            <S.TextRed>unsigned char </S.TextRed> <S.TextBlue>*</S.TextBlue>) s2
            )[ len ];
          </S.SpanTab2>
        </S.SpanTab2>
        <S.SpanTab2>
          <S.SpanTab2>
            len<S.TextBlue>++</S.TextBlue>;
          </S.SpanTab2>
        </S.SpanTab2>
        <S.SpanTab2>
          <S.SpanTab>{'}'}</S.SpanTab>
        </S.SpanTab2>
        <S.SpanTab>{'}'}</S.SpanTab>
        <S.SpanTab>
          <S.TextBlue>return</S.TextBlue> ( <S.TextRed2> s1 </S.TextRed2> );
        </S.SpanTab>
        {'}'}
      </S.SectionInfo>
      <br />
      <S.H3>Function Body:</S.H3>
      <S.P>
        ° The function begins by declaring a <S.TextRed>size_t len</S.TextRed>;
        variable that will be used to control the copy loop.
      </S.P>
      <S.P>
        ° The function then checks if s2 ( the source ) is less than s1 ( the
        destination ). If so, this indicates that the memory regions overlap in
        such a way that the beginning of the destination region is within or
        after the source region. To handle this overlap without corrupting data,
        the copy is performed from back to front:
      </S.P>
      <S.P>
        ° <S.TextBlue>len = n</S.TextBlue>; initializes len with the total
        number of bytes to be copied.
      </S.P>
      <S.P>
        ° The loop while <S.TextBlue>( len {'>'} 0 ) </S.TextBlue>decrements len
        on each iteration, copying bytes one by one from the end to the
        beginning. This ensures that the copy of overlapping areas is done
        without overwriting data not yet copied.
      </S.P>
      <S.P>
        ° If <S.TextBlue>s2 </S.TextBlue> is not less than{' '}
        <S.TextBlue> s1</S.TextBlue>, there is no risk of overlap that could
        impair the copy, or the overlap occurs in a way that the beginning of
        the source region is within or after the destination region. In this
        case, the copy is made from beginning to end:
      </S.P>
      <S.P>
        ° <S.TextBlue>len = 0; </S.TextBlue> reinitializes{' '}
        <S.TextBlue>len</S.TextBlue>.
      </S.P>
      <S.P>
        ° The loop while ( len{'<'} n ) increments len on each iteration,
        copying the bytes one by one from the beginning to the end.
      </S.P>
      <S.H3>
        Function Return: return ( <S.TextRed>s1</S.TextRed> );
      </S.H3>
      <S.P>
        ° After copying the n bytes, the function returns the pointer to the
        destination <S.TextBlue>(s1)</S.TextBlue> . This allows the result of
        the function to be used in chains of calls.
      </S.P>
      <S.H3>Summary: </S.H3>
      <S.P>
        ° The ft_memmove safely copies n bytes from one memory location to
        another, correctly handling overlaps between the source and destination
        memory regions. Unlike memcpy, which does not guarantee data integrity
        in case of overlap, ft_memmove ensures that the data are copied intact,
        whether by performing the copy from back to front when necessary, or
        proceeding from beginning to end, depending on the relationship between
        the source and destination addresses.
      </S.P>
      <Footer />
    </S.ContainerMain>
  )
}

export default Ft_memmove
