import React, { useState } from 'react'
import * as S from './styles'
import Header from '../../../Components/Header'
import Footer from '../../../Components/Footer/index'

const RevPrint = () => {
  const [showSectionExercises, setShowSectionExercises] = useState(false)

  const toggleSectionExercises = () => {
    setShowSectionExercises(!showSectionExercises)
  }

  return (
    <S.ContainerMain>
      <Header />
      <S.H1>rev_print</S.H1>
      <S.ContainerExercises>
        <S.SectionInfo>
          <br />
          <S.P>Assignment name  : rev_print</S.P>
          <br />
          <S.P>Expected files   : rev_print.c</S.P>
          <br />
          <S.P>Allowed functions: write </S.P>
          <br />
          <S.P>
            --------------------------------------------------------------------------------
          </S.P>
          <br />
          <S.P>Write a program that takes a string, and displays the string in reverse</S.P>
          <S.P>followed by a newline.</S.P>
          <br />
          <S.P>If the number of parameters is not 1, the program displays a newline.</S.P>
          <S.P><S.TextOrange>Examples:</S.TextOrange></S.P>
          <br />
          <S.P><S.Red>{'$>'} ./rev_print </S.Red>{'"zaz"'}| cat -e</S.P>
          <S.P><S.Green>zaz$</S.Green></S.P>
          <S.P><S.Red>{'$>'} ./rev_print</S.Red> {'"dub0 a POIL"'} | cat -e</S.P>
          <S.P><S.Green>LIOP a 0bud$</S.Green></S.P>
          <S.P><S.Red>{'$>'} ./rev_print</S.Red> | cat -e</S.P>
          <S.P><S.Green>$</S.Green></S.P>
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
          <S.SpanTab><S.Red>if </S.Red> ( argc <S.Green>== </S.Green>2 )</S.SpanTab>
          <S.SpanTab>{'{'}</S.SpanTab>
          <S.SpanTab2><S.Red>while</S.Red> ( argv[ 1 ][ i ] )</S.SpanTab2>
          <S.SpanTab2><S.SpanTab />i <S.Green>+=</S.Green> 1;</S.SpanTab2>
          <S.SpanTab2><S.Red>while</S.Red>( i )</S.SpanTab2>
          <S.SpanTab2><S.SpanTab /><S.Lilas>write</S.Lilas> ( 1, <S.Green>&</S.Green>argv[ 1 ][ <S.Green>--</S.Green>1 ], 1 )</S.SpanTab2>
          <S.SpanTab>{'}'}</S.SpanTab>
          <S.SpanTab><S.Lilas>write</S.Lilas> ( 1, {'"\\n"'}, 1 );</S.SpanTab>
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

export default RevPrint