import React, { useState } from 'react'
import * as S from './styles'
import Header from '../../../Components/Header'
import Footer from '../../../Components/Footer/index'

const FirstWord = () => {
  const [showSectionExercises, setShowSectionExercises] = useState(false)

  const toggleSectionExercises = () => {
    setShowSectionExercises(!showSectionExercises)
  }

  return (
    <S.ContainerMain>
      <Header />
      <S.H1>First Word</S.H1>
      <S.ContainerExercises>
        <S.SectionInfo>
          <S.P>Assignment name : first_word</S.P>
          <S.P>Expected files : first_word.c</S.P>
          <S.P>Allowed functions: write</S.P>
          <S.P>
            ---------------------------------------------------------------------------------------------
          </S.P>
          <S.P>
            Write a program that takes a string and displays its first word,
            followed by a newline.
          </S.P>
          <S.P>
            A word is a section of string delimited by spaces/tabs or by the
            start/end of the string.
          </S.P>
          <S.P>
            If the number of parameters is not 1, or if there are no words,
            simply display a newline.
          </S.P>
          <S.P>
            <S.TextOrange>Examples</S.TextOrange>:
          </S.P>
          <S.P>
            <S.TextRed>${'>'} ./first_word </S.TextRed>
            {'"FOR PONY" '}| cat -e
          </S.P>
          <S.P>
            <S.Green>FOR$</S.Green>
          </S.P>
          <S.P>
            <S.TextRed>${'>'} ./first_word </S.TextRed>
            {'"this        ...    is sparta, then again, maybe    not" '}| cat
            -e
          </S.P>
          <S.P>
            <S.Green>this$</S.Green>{' '}
          </S.P>
          <S.P>
            <S.TextRed>${'>'}./first_word</S.TextRed>
            {' "'}
            <S.SpanTab />
            {' "'} | cat -e
          </S.P>
          <S.P>
            <S.Green>$</S.Green>
          </S.P>
          <S.P>
            <S.TextRed>${'>'} ./first_word </S.TextRed> {'"a" "b"'} | cat -e
          </S.P>
          <S.P>
            <S.Green>$</S.Green>{' '}
          </S.P>
          <S.P>
            <S.TextRed>${'>'} ./first_word </S.TextRed> {'"  lorem,ipsum  "'} |
            cat -e
          </S.P>
          <S.P>
            <S.Green>lorem,ipsum$</S.Green>
          </S.P>
          <S.P>
            {' '}
            <S.TextRed>${'>'}</S.TextRed>
          </S.P>
        </S.SectionInfo>
        <br />
        <S.ButtonExersice onClick={toggleSectionExercises}>
          View answer
        </S.ButtonExersice>
        <br />
        <S.SectionExercises className={showSectionExercises ? "expanded" : ""}>
          <br />
          <span><S.TextRed>#include</S.TextRed> <S.Green>{'<unistd.h>'}</S.Green></span>
          <br />
          <span>int main (int argc, char **argv)</span>
          <span>{'{'}</span>
          <S.SpanTab>int i <S.Green>=</S.Green> 0; </S.SpanTab>
          <br />
          <S.SpanTab><S.Red>if</S.Red> (argc <S.Green>==</S.Green> 2)</S.SpanTab>
          <S.SpanTab>{'{'}</S.SpanTab>
          <S.SpanTab2><S.Red>while</S.Red>  ( argv[ 1 ][ i ] <S.Green>==</S.Green> 32 <S.Green>||</S.Green> argv[ 1 ][ i ] <S.Green>==</S.Green> 9 )</S.SpanTab2>
          <S.SpanTab2><S.SpanTab />i<S.Green>++</S.Green>;</S.SpanTab2>
          <S.SpanTab2><S.Red>while</S.Red> ( ( argv[ 1 ][ i ] <S.Green>!=</S.Green> 32 <S.Green>&&</S.Green> argv[ 1 ][ i ] <S.Green>!=</S.Green> 9 ) <S.Green>&&</S.Green> argv[ 1 ][ i ] )</S.SpanTab2>
          <S.SpanTab2>{'{'}</S.SpanTab2>
          <S.SpanTab2><S.SpanTab /><S.Red>while</S.Red>( 1, <S.Green>&</S.Green>argv[ 1 ][ i ], 1 );</S.SpanTab2>
          <S.SpanTab2><S.SpanTab />i<S.Green>++</S.Green>;</S.SpanTab2>
          <S.SpanTab2>{'}'}</S.SpanTab2>
          <S.SpanTab>{'}'}</S.SpanTab>
          <S.SpanTab><S.Red>write</S.Red> (1, {'"\\n"'}, 1); </S.SpanTab>
          <span>{'}'}</span>
        </S.SectionExercises>
        <br />
        <Footer />
      </S.ContainerExercises>
    </S.ContainerMain>
  )
}

export default FirstWord
