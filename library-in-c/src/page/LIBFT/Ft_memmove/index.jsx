import React from 'react'
import Header from '../../../Components/Header'
import Footer from '../../../Components/Footer'
import * as S from './styles'

const Ft_memmove = () => {
  return (
    <S.ContainerMain>
      <Header />
      <S.H1>ft_memmove</S.H1>
      <S.P>
        The ft_memmove function is a customized implementation of the standard C{' '}
        {"library's"} memmove function, designed to copy n bytes of memory from
        a source location (s2)to a destination location{' '}
        (s1), safely handling overlaps between the source and
        destination memory regions. {"Let's"} explore what this function does in
        detail:
      </S.P>

      <S.SectionInfo>
        <span>
          <S.Red># include </S.Red> <S.Green>{'"libft.h"'}</S.Green>{' '}
        </span>
        <span>
          void
          <S.Green> *</S.Green>
          <S.Lilas>ft_memmove</S.Lilas>( void <S.Green> *</S.Green>s1,{' '}
          <S.Red>const </S.Red> void <S.Green> *</S.Green>s2, size_t n )
        </span>
        <span>{'{'}</span>
        <S.SpanTab>
          size_t
          <S.SpanTab>len;</S.SpanTab>
        </S.SpanTab>
        <br />
        <S.SpanTab>
          len<S.Green> = </S.Green>0;
        </S.SpanTab>
        <S.SpanTab>
          <S.Red>if</S.Red> ( s2 <S.Green>{'< '}</S.Green>s1 )
        </S.SpanTab>
        <S.SpanTab>{'{'}</S.SpanTab>
        <S.SpanTab2>
          <S.SpanTab>
            len <S.Green> = </S.Green> n;
          </S.SpanTab>{' '}
        </S.SpanTab2>
        <S.SpanTab2>
          <S.SpanTab>
            <S.Red>while</S.Red>
          </S.SpanTab>
          ( len <S.Green> {'> '} </S.Green>0 )
        </S.SpanTab2>
        <S.SpanTab2>
          <S.SpanTab></S.SpanTab> {'{'}
        </S.SpanTab2>
        <S.SpanTab2>
          <S.SpanTab>
            {' '}
            <S.SpanTab>
              len<S.Green>--</S.Green>;
            </S.SpanTab>{' '}
          </S.SpanTab>
        </S.SpanTab2>
        <S.SpanTab2>
          <S.SpanTab>
            <S.SpanTab>
              (( unsigned char <S.Green>*</S.Green>) s1 )[ len ]{' '}
              <S.Green> = </S.Green> (( unsigned char <S.Green>*</S.Green>) s2
              )[ len ];
            </S.SpanTab>
          </S.SpanTab>
        </S.SpanTab2>
        <S.SpanTab>
          <S.SpanTab2>{'}'}</S.SpanTab2>
        </S.SpanTab>
        <S.SpanTab>{'}'}</S.SpanTab>
        <S.SpanTab>
          <S.Red>else</S.Red>
        </S.SpanTab>
        <S.SpanTab>{'{'}</S.SpanTab>
        <S.SpanTab2>
          <S.SpanTab>len <S.Green>=</S.Green> 0;</S.SpanTab>{' '}
        </S.SpanTab2>
        <S.SpanTab2>
          <S.SpanTab>
            <S.Red>while</S.Red> ( len <S.Green>{' < '}</S.Green>n )
          </S.SpanTab>
        </S.SpanTab2>
        <S.SpanTab2>
          <S.SpanTab>{'{'}</S.SpanTab>
        </S.SpanTab2>
        <S.SpanTab2>
          <S.SpanTab2>
            (( unsigned char <S.Green>*</S.Green>) s1 )[ len ] <S.Green>=</S.Green> (( unsigned
            char <S.Green>*</S.Green>) s2 )[ len ];
          </S.SpanTab2>
        </S.SpanTab2>
        <S.SpanTab2>
          <S.SpanTab2>
            len<S.Green>++</S.Green>;
          </S.SpanTab2>
        </S.SpanTab2>
        <S.SpanTab2>
          <S.SpanTab>{'}'}</S.SpanTab>
        </S.SpanTab2>
        <S.SpanTab>{'}'}</S.SpanTab>
        <S.SpanTab>
          <S.Red>return</S.Red> ( s1 );
        </S.SpanTab>
        {'}'}
      </S.SectionInfo>
      <br />
      <S.H3>Function Body:</S.H3>
      <S.P>
        <S.Gold>° </S.Gold> The function begins by declaring a size_t len;
        variable that will be used to control the copy loop.
      </S.P>
      <S.P>
        <S.Gold>° </S.Gold> The function then checks if s2 ( the source ) is less than s1 ( the
        destination ). If so, this indicates that the memory regions overlap in
        such a way that the beginning of the destination region is within or
        after the source region. To handle this overlap without corrupting data,
        the copy is performed from back to front:
      </S.P>
      <S.P>
        <S.Gold>° </S.Gold> len = n; initializes len with the total number of
        bytes to be copied.
      </S.P>
      <S.P>
        <S.Gold>° </S.Gold> The loop while ( len {'>'} 0 ) decrements len on each
        iteration, copying bytes one by one from the end to the beginning. This
        ensures that the copy of overlapping areas is done without overwriting
        data not yet copied.
      </S.P>
      <S.P>
        <S.Gold>° </S.Gold> If s2  is not less than  s1, there
        is no risk of overlap that could impair the copy, or the overlap occurs
        in a way that the beginning of the source region is within or after the
        destination region. In this case, the copy is made from beginning to
        end:
      </S.P>
      <S.P>
        <S.Gold>° </S.Gold> len = 0;  reinitializes len.
      </S.P>
      <S.P>
        <S.Gold>° </S.Gold> The loop while ( len{' < '} n ) increments len on
        each iteration, copying the bytes one by one from the beginning to the
        end.
      </S.P>
      <S.P>
        <S.Gold>° </S.Gold>Function Return: return ( s1 ); After copying the n bytes, the function returns the pointer to the
        destination (s1) . This allows the result of the
        function to be used in chains of calls.
      </S.P>
      <S.H3>Summary: </S.H3>
      <S.P>
        <S.Gold>° </S.Gold> The ft_memmove safely copies n bytes from one memory
        location to another, correctly handling overlaps between the source and
        destination memory regions. Unlike memcpy, which does
        not guarantee data integrity in case of overlap,{' '}
        ft_memmove ensures that the data are copied intact,
        whether by performing the copy from back to front when necessary, or
        proceeding from beginning to end, depending on the relationship between
        the source and destination addresses.
      </S.P>
      <Footer />
    </S.ContainerMain>
  )
}

export default Ft_memmove
