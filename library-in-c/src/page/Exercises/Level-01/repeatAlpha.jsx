import React, { useState } from 'react'
import * as S from './styles'
import Header from '../../../Components/Header'
import Footer from '../../../Components/Footer/index'

const RepeatAlpha = () => {
  const [showSectionExercises, setShowSectionExercises] = useState(false)

  const toggleSectionExercises = () => {
    setShowSectionExercises(!showSectionExercises)
  }

  return (
    <S.ContainerMain>
      <Header />
      <S.H1>repeat_alpha</S.H1>
      <S.ContainerExercises>
        <S.SectionInfo>
          <br />
          <S.P>Assignment name : repeat_alpha</S.P>
          <br />
          <S.P>Expected files : repeat_alpha.c</S.P>
          <br />
          <S.P>Allowed functions: write</S.P>
          <br />
          <S.P>
            --------------------------------------------------------------------------------
          </S.P>
          <br />
          <S.P>
            Write a program called repeat_alpha that takes a string and display
            it
          </S.P>
          <S.P>
            repeating each alphabetical character as many times as its
            alphabetical index,
          </S.P>
          <S.P>followed by a newline.</S.P>
          <br />
          <S.P>
            {"'a'"} becomes {"'a'"}, {"'b'"} becomes {"'bb'"}, {"'e'"} becomes{' '}
            {"'eeeee'"}, etc...
          </S.P>
          <br />
          <S.P>Case remains unchanged.</S.P>
          <br />
          <S.P>
            If the number of arguments is not 1, just display a newline.
          </S.P>
          <br />
          <S.P>
            <S.TextOrange>Examples: </S.TextOrange>
          </S.P>
          <br />
          <S.P><S.Red>{'$>'}./repeat_alpha</S.Red>{' "abc"'}</S.P>
          <S.P><S.Green>abbccc</S.Green></S.P>
          <S.P><S.Red>{'$>'}./repeat_alpha</S.Red> {'"Alex."'} | cat -e</S.P>
          <S.P><S.Green>Alllllllllllleeeeexxxxxxxxxxxxxxxxxxxxxxxx.$</S.Green></S.P>
          <S.P><S.Red>{'$>'}./repeat_alpha </S.Red>{"'abacadaba 42!'"} | cat -e</S.P>
          <S.P><S.Green>abbacccaddddabba 42!$</S.Green></S.P>
          <S.P><S.Red>{'$>'}./repeat_alpha</S.Red> | cat -e</S.P>
          <S.P><S.Green>$</S.Green></S.P>
          <S.P><S.Red>{'$>'}</S.Red></S.P>
          <S.P><S.Red>{'$>'}./repeat_alpha</S.Red> {'" "'} | cat -e</S.P>
          <S.P><S.Green>$</S.Green></S.P>
          <S.P><S.Red>{'$>'}</S.Red></S.P>
        </S.SectionInfo>
        <br />
        <br />
        <S.ButtonExersice onClick={toggleSectionExercises}>
          View answer
        </S.ButtonExersice>
        <br />
        <br />
        <S.SectionExercises className={showSectionExercises ? 'expanded' : ''}>
          <br />
          <br />
          <S.P><S.Red>#include</S.Red> <S.Green>{'<unistd.h>'}</S.Green></S.P>
          <br />
          <span>void<S.SpanTab/><S.Lilas>ft_putchar_n</S.Lilas> ( char c, int i )</span>
          <span>{'{'}</span>
          <S.SpanTab><S.Red>while </S.Red> ( i <S.Green>{'>'}</S.Green> 0 )</S.SpanTab>
          <S.SpanTab>{'{'}</S.SpanTab>
          <S.SpanTab2><S.Lilas>write</S.Lilas>( 1, <S.Green>&</S.Green>c, 1 );</S.SpanTab2>
          <S.SpanTab2><S.Green>--</S.Green>i;</S.SpanTab2>
          <S.SpanTab>{'}'}</S.SpanTab>
          <span>{'}'}</span>
          <br />
          <br />
          <span>void<S.SpanTab/><S.Lilas>repeat_alpha</S.Lilas> ( char <S.Green>*</S.Green>str )</span>
          <span>{'{'}</span>
          <S.SpanTab><S.Red>while</S.Red> ( <S.Green>*</S.Green>str <S.Green>!=</S.Green> {"'\\0'"} )</S.SpanTab>
          <S.SpanTab>{'{'}</S.SpanTab>
          <S.SpanTab2> <S.Red>if</S.Red> ( <S.Green>*</S.Green>str <S.Green>{'>='}</S.Green> {"'a'"} <S.Green>&&</S.Green> <S.Green>*</S.Green>str <S.Green>{'<='}</S.Green> {"'z'"} )</S.SpanTab2>
          <S.SpanTab2><S.SpanTab /><S.Lilas>ft_putchar_n</S.Lilas> ( <S.Green>*</S.Green>str, <S.Green>*</S.Green>str <S.Green>+</S.Green> 1 <S.Green>-</S.Green> {"'a'"} );</S.SpanTab2>
          <S.SpanTab2> <S.Red>else if</S.Red> ( <S.Green>*</S.Green>str <S.Green>{'>='}</S.Green> {"'A'"} <S.Green>&&</S.Green> <S.Green>*</S.Green>str <S.Green>{'<='}</S.Green> {"'Z'"} )</S.SpanTab2>
          <S.SpanTab2><S.SpanTab /><S.Lilas>ft_putchar_n</S.Lilas> ( <S.Green>*</S.Green>str, <S.Green>*</S.Green>str <S.Green>+</S.Green> 1 <S.Green>-</S.Green> {"'A'"} );</S.SpanTab2>
          <S.SpanTab2><S.Red>else</S.Red></S.SpanTab2>
          <S.SpanTab2><S.SpanTab /> <S.Lilas>write</S.Lilas> ( 1, str, 1 );</S.SpanTab2>
          <S.SpanTab2><S.Green>++</S.Green>str;</S.SpanTab2>
          <S.SpanTab>{'}'}</S.SpanTab>
          <span>{'}'}</span>
          <br />
          <br />
          <span>int <S.SpanTab/><S.Lilas>main</S.Lilas>(int ac, char <S.Green>**</S.Green>av)</span>
          <span>{'{'}</span>
          <S.SpanTab><S.Red>if </S.Red>( ac <S.Green>==</S.Green> 2 )</S.SpanTab>
          <S.SpanTab2><S.Lilas>repeat_alpha</S.Lilas>( av[ 1 ] );</S.SpanTab2>
          <br />
          <S.SpanTab><S.Lilas>write</S.Lilas>( 1, {'"\\n"'}, 1 );</S.SpanTab>
          <S.SpanTab><S.TextRed>return</S.TextRed> ( 0 );</S.SpanTab>
          <span>{'}'}</span>
        </S.SectionExercises>
        <br />
        <br />
        <Footer />
      </S.ContainerExercises>
    </S.ContainerMain>
  )
}

export default RepeatAlpha
