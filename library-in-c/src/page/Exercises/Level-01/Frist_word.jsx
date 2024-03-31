import React from 'react'
import * as S from './styles'
import Header from '../../../Components/Header'
import Footer from '../../../Components/Footer/index'

const first_word = () => {
  return (
    <S.ContainerMain>
      <Header />
      <S.H1>First Word</S.H1>

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
          If the number of parameters is not 1, or if there are no words, simply
          display a newline.
        </S.P>
        <S.P>Examples:</S.P>
        <S.P>
          ${'>'} ./first_word {'"FOR PONY" '}| cat -e
        </S.P>
        <S.P>FOR$</S.P>
        <S.P>
          ${'>'} ./first_word{' '}
          {'"this        ...    is sparta, then again, maybe    not" '}| cat -e
        </S.P>
        <S.P>this$</S.P>
        <S.P>
          ${'>'}./first_word{' "'}
          <S.SpanTab />
          {' "'} | cat -e
        </S.P>
        <S.P>$</S.P>
        <S.P>
          ${'>'} ./first_word {'"a" "b"'} | cat -e
        </S.P>
        <S.P>$</S.P>
        <S.P>
          ${'>'} ./first_word {'"  lorem,ipsum  "'} | cat -e
        </S.P>
        <S.P>lorem,ipsum$</S.P>
        <S.P>${'>'}</S.P>
      </S.SectionInfo>
      <br />
      <Footer />
    </S.ContainerMain>
  )
}

export default first_word
