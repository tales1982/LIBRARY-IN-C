import React, { useState } from 'react'
import * as S from './styles'
import Header from '../../../Components/Header'
import Footer from '../../../Components/Footer/index'

const Rotone = () => {
  const [showSectionExercises, setShowSectionExercises] = useState(false)

  const toggleSectionExercises = () => {
    setShowSectionExercises(!showSectionExercises)
  }

  return (
    <S.ContainerMain>
      <Header />
      <S.H1>rotone</S.H1>
      <S.ContainerExercises>
        <S.SectionInfo>
          <br />
          <S.P>Assignment name  : rotone</S.P>
          <br />
          <S.P>Expected files   : rotone.c.c</S.P>
          <br />
          <S.P>Allowed functions: write </S.P>
          <br />
          <S.P>
            --------------------------------------------------------------------------------
          </S.P>
          <br />
          <S.P>Write a program that takes a string and displays it, replacing each of its</S.P>
          <S.P>letters by the next one in alphabetical order.</S.P>
          <br />
          <S.P>{"'z'"} becomes {"'a' and 'Z' becomes 'A'"}. Case remains unaffected.</S.P>
          <S.P>The output will be followed by a \n.</S.P>
          <S.P>If the number of arguments is not 1, the program displays \n.</S.P>
          <S.P><S.TextOrange>Examples:</S.TextOrange></S.P>
          <br />
          <S.P><S.Red>{'$>'} ./rotone </S.Red>{'"abc"'} </S.P>
          <S.P><S.Green>bcd</S.Green></S.P>
          <S.P><S.Red>{'$>'} ./rotone  </S.Red>{'"Les stagiaires du staff ne sentent pas toujours tres bon." '}| cat -e</S.P>
          <S.P><S.Green>Mft tubhjbjsft ev tubgg of tfoufou qbt upvkpvst usft cpo. $</S.Green></S.P>
          <S.P><S.Red>{'$>'} ./rotone </S.Red>{'"AkjhZ zLKIJz , 23y "'}  | cat -e</S.P>
          <S.P><S.Green>BlkiA aMLJKa , 23z $</S.Green></S.P>
          <S.P><S.Red>{'$>'} ./rotone </S.Red> | cat -e</S.P>
          <S.P><S.Green>$</S.Green></S.P>
          <S.P><S.Red>{'$>'}./rotone {'" "'} </S.Red>| cat -e</S.P>
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
        <span><S.Red>#include</S.Red>{' <unistd.h>'}</span>
        <br />
        <span>void <S.SpanTab/><S.Lilas>ft_putchar</S.Lilas>( char c  )</span>
        <span>{'{'}</span>
        <S.SpanTab><S.Lilas>write</S.Lilas>( 1, <S.Green>&</S.Green>c , 1 );</S.SpanTab>
        <span>{'}'}</span>
        <br />
        <span>void<S.SpanTab/><S.Lilas>rotone</S.Lilas> ( char <S.Green>*</S.Green>s )</span>
        <span>{'{'}</span>
        <S.SpanTab><S.Red>while</S.Red>( <S.Green>*</S.Green>s )</S.SpanTab>
        <S.SpanTab>{'{'}</S.SpanTab>
        <S.SpanTab2><S.Red>if </S.Red>( ( <S.Green>*</S.Green>s <S.Green> {'>='}</S.Green> {"'A'"} <S.Green>&&</S.Green> <S.Green>*</S.Green>s <S.Green>{'<='}</S.Green> {"'Y'"}  ) <S.Green>|| </S.Green>( <S.Green>*</S.Green>s <S.Green>{'>='}</S.Green> {"'a'"} <S.Green>&&</S.Green> <S.Green>*</S.Green>s <S.Green>{'<='}</S.Green> {"'y'"} ) )</S.SpanTab2>
        <S.SpanTab2><S.SpanTab/> <S.Lilas>ft_putchar</S.Lilas> ( <S.Green>*</S.Green>s <S.Green>+</S.Green> 1 );</S.SpanTab2>
        <S.SpanTab2><S.Red>else if</S.Red> (<S.Green>*</S.Green>s <S.Green>==</S.Green> {"'Z'"} <S.Green>||</S.Green> <S.Green>*</S.Green>s <S.Green>==</S.Green> {"'z'"})</S.SpanTab2>
        <S.SpanTab2><S.SpanTab/> <S.Lilas>ft_putchar</S.Lilas> ( <S.Green>*</S.Green>s <S.Green>-</S.Green> 25 );</S.SpanTab2>
        <S.SpanTab2><S.Red>else </S.Red></S.SpanTab2>
        <S.SpanTab2><S.SpanTab/> <S.Lilas>ft_putchar</S.Lilas> ( <S.Green>*</S.Green>s );</S.SpanTab2>
        <S.SpanTab2> <S.Green>++</S.Green>s ;</S.SpanTab2>
        <S.SpanTab>{'}'}</S.SpanTab>
        <span>{'}'}</span>
        <br />
        <span>int <S.SpanTab/><S.Lilas>main</S.Lilas>( int ac, char <S.Green>**</S.Green>av )</span>
        <span>{'{'}</span>
        <S.SpanTab><S.Red>if</S.Red>  ( ac <S.Green>==</S.Green> 2 )</S.SpanTab>
        <S.SpanTab2><S.Lilas>rotone </S.Lilas>( av[ 1 ] );</S.SpanTab2>
        <S.SpanTab><S.Lilas>ft_putchar</S.Lilas> ( {"'\\n'"} );</S.SpanTab>
        <S.SpanTab><S.Red>return</S.Red>  ( 0 );</S.SpanTab>
        <span>{'}'}</span>

        </S.SectionExercises>
        <br />
        <br />
        <br />
        <br />
        <Footer />
      </S.ContainerExercises>
    </S.ContainerMain>
  )
}

export default Rotone