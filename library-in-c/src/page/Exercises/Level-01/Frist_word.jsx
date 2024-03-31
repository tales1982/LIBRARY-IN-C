import React from 'react'
import * as S from './styles'
import Header from '../../../Components/Header'
import Footer from '../../../Components/Footer/index'

const first_word = () => {
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
            <S.TextGreen>FOR$</S.TextGreen>
          </S.P>
          <S.P>
            <S.TextRed>${'>'} ./first_word </S.TextRed>
            {'"this        ...    is sparta, then again, maybe    not" '}| cat
            -e
          </S.P>
          <S.P>
            <S.TextGreen>this$</S.TextGreen>{' '}
          </S.P>
          <S.P>
            <S.TextRed>${'>'}./first_word</S.TextRed>
            {' "'}
            <S.SpanTab />
            {' "'} | cat -e
          </S.P>
          <S.P>
            <S.TextGreen>$</S.TextGreen>
          </S.P>
          <S.P>
            <S.TextRed>${'>'} ./first_word </S.TextRed> {'"a" "b"'} | cat -e
          </S.P>
          <S.P>
            <S.TextGreen>$</S.TextGreen>{' '}
          </S.P>
          <S.P>
            <S.TextRed>${'>'} ./first_word </S.TextRed> {'"  lorem,ipsum  "'} |
            cat -e
          </S.P>
          <S.P>
            <S.TextGreen>lorem,ipsum$</S.TextGreen>
          </S.P>
          <S.P>
            {' '}
            <S.TextRed>${'>'}</S.TextRed>
          </S.P>
        </S.SectionInfo>
        <br /> <Footer />
      </S.ContainerExercises>
    </S.ContainerMain>
  )
}

export default first_word
