import React, { useState } from 'react'
import * as S from './styles'
import Header from '../../../Components/Header'
import Footer from '../../../Components/Footer/index'

const Rot13 = () => {
  const [showSectionExercises, setShowSectionExercises] = useState(false)

  const toggleSectionExercises = () => {
    setShowSectionExercises(!showSectionExercises)
  }

  return (
    <S.ContainerMain>
      <Header />
      <S.H1>rot_13</S.H1>
      <S.ContainerExercises>
        <S.SectionInfo>
          <br />
          <S.P>Assignment name  : rot_13</S.P>
          <br />
          <S.P>Expected files   : rot_13.c.c</S.P>
          <br />
          <S.P>Allowed functions: write </S.P>
          <br />
          <S.P>
            --------------------------------------------------------------------------------
          </S.P>
          <br />
          <S.P>Write a program that takes a string and displays it, replacing each of its</S.P>
          <S.P>letters by the letter 13 spaces ahead in alphabetical order.</S.P>
          <br />
          <S.P>{"'z'"} becomes {"'m' and 'Z' becomes 'M'"}. Case remains unaffected.</S.P>
          <S.P>The output will be followed by a newline.</S.P>
          <S.P>If the number of arguments is not 1, the program displays a newline.</S.P>
          <S.P><S.TextOrange>Examples:</S.TextOrange></S.P>
          <br />
          <S.P><S.Red>{'$>'} ./rot_13 </S.Red>{'"abc" '} {' "zaz"'}| cat -e</S.P>
          <S.P><S.Green>nop</S.Green></S.P>
          <S.P><S.Red>{'$>'} ./rot_13 </S.Red> {'"My horse is Amazing." '}{' "dub0 a POIL"'} | cat -e</S.P>
          <S.P><S.Green>Zl ubefr vf Nznmvat$</S.Green></S.P>
          <S.P><S.Red>{'$>'} ./rot_13 </S.Red>{'"AkjhZ zLKIJz , 23y "'}  | cat -e</S.P>
          <S.P><S.Green>NxwuM mYXVWm , 23l $</S.Green></S.P>
          <S.P><S.Red>{'$>'} ./rot_13 </S.Red> | cat -e</S.P>
          <S.P><S.Green>$</S.Green></S.P>
          <S.P><S.Red>{'$>'}./rot_13</S.Red> {'" "'} | cat -e</S.P>
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
          <span>int<S.SpanTab /><S.Lilas>main</S.Lilas>( int argc, char <S.Green> **</S.Green>argv )</span>
          <span>{'{'}</span>
          <S.SpanTab>int<S.SpanTab /> i ;</S.SpanTab>
          <br />
          <S.SpanTab>i <S.Green>=</S.Green> 0</S.SpanTab>
          <S.SpanTab><S.Red>if </S.Red> ( argc <S.Green> {'>'}</S.Green> 1 )</S.SpanTab>
          <S.SpanTab>{'{'}</S.SpanTab>
          <S.SpanTab2><S.Red>while</S.Red> ( argv[ 1 ][ i ] )</S.SpanTab2>
          <S.SpanTab2>{'{'}</S.SpanTab2>
          <S.SpanTab2><S.SpanTab /><S.Red>if </S.Red>( argv[ 1 ][ i ] <S.Green>{" >= "}</S.Green> {"'a'"} <S.Green>&&</S.Green> argv[ 1 ][ i ] <S.Green>{" <= "}</S.Green>{"'z' "}) </S.SpanTab2>
          <S.SpanTab2><S.SpanTab2/>argv[ 1 ][ i ] <S.Green>= </S.Green>( argv[ 1 ][ i ] <S.Green>-</S.Green>{" 'a' "} + 13) <S.Green>%</S.Green> 26 <S.Green>+</S.Green> {"'a'"} ;</S.SpanTab2>
          <S.SpanTab2><S.SpanTab /><S.Red>else if </S.Red>( argv[ 1 ][ i ] <S.Green>{" >= "}</S.Green> {"'A'"} <S.Green>&&</S.Green> argv[ 1 ][ i ] <S.Green>{" <= "}</S.Green>{"'Z' "}) </S.SpanTab2>
          <S.SpanTab2><S.SpanTab2/>argv[ 1 ][ i ] <S.Green>= </S.Green>( argv[ 1 ][ i ] <S.Green>-</S.Green>{" 'A' "} + 13) <S.Green>%</S.Green> 26 <S.Green>+</S.Green> {"'A'"} ;</S.SpanTab2>
          <S.SpanTab2><S.SpanTab /><S.Lilas>write</S.Lilas>( 1, <S.Green>&</S.Green>argv, 1 );</S.SpanTab2>
          <S.SpanTab2><S.SpanTab />i<S.Green>++</S.Green>;</S.SpanTab2>
          <S.SpanTab2>{'}'}</S.SpanTab2>
          <S.SpanTab>{'}'}</S.SpanTab>
          <S.SpanTab><S.Lilas>write</S.Lilas>( 1, {"' \\n '"}, 1 );</S.SpanTab>
          <S.SpanTab><S.Red>return</S.Red> ( 0 );</S.SpanTab>
          <span>{'}'}</span>
          <S.P></S.P>
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

export default Rot13