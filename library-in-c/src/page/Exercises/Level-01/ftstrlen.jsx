import React, { useState } from 'react'
import * as S from './styles'
import Header from '../../../Components/Header'
import Footer from '../../../Components/Footer/index'

const FtStrlen = () => {
  const [showSectionExercises, setShowSectionExercises] = useState(false)

  const toggleSectionExercises = () => {
    setShowSectionExercises(!showSectionExercises)
  }

  return (
    <S.ContainerMain>
      <Header />
      <S.H1>ft_strlen</S.H1>
      <S.ContainerExercises>
        <S.SectionInfo>
          <br />
          <S.P>Assignment name  : ft_strlen</S.P>
          <br />
          <S.P>Expected files   : ft_strlen.c</S.P>
          <br />
          <S.P>Allowed functions: </S.P>
          <br />
          <S.P>
            --------------------------------------------------------------------------------
          </S.P>
          <br />
          <S.P>Write a function that returns the length of a string.</S.P>
          <br />
          <S.P>Your function must be declared as follows:</S.P>
          <br />
          <S.P><S.TextOrange>int <S.SpanTab /> ft_strlen(char *str);</S.TextOrange></S.P>
          <br />
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
          <span>int<S.SpanTab /><S.Lilas>ft_strlen</S.Lilas>( char <S.Green>*</S.Green>str )</span>
          <span>{'{'}</span>
          <S.SpanTab>int<S.SpanTab /> i ;</S.SpanTab>
          <br />
          <S.SpanTab>i <S.Green>=</S.Green> 0</S.SpanTab>

          <S.SpanTab><S.Red>while</S.Red> ( str[ i ] )</S.SpanTab>
          <S.SpanTab><S.SpanTab />i<S.Green>++</S.Green>;</S.SpanTab>
          <S.SpanTab><S.Red>return</S.Red> ( i );</S.SpanTab>
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

export default FtStrlen