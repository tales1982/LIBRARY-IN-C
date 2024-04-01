import React, { useState } from 'react'
import * as S from './styles'
import Header from '../../../Components/Header'
import Footer from '../../../Components/Footer/index'

const FtStrcpy = () => {
  const [showSectionExercises, setShowSectionExercises] = useState(false)

  const toggleSectionExercises = () => {
    setShowSectionExercises(!showSectionExercises)
  }

  return (
    <S.ContainerMain>
      <Header />
      <S.H1>ft_strcpy</S.H1>
      <S.ContainerExercises>
        <S.SectionInfo>
          <br />
          <S.P>Assignment name : ft_strcpy</S.P>
          <br />
          <S.P>Expected files : ft_strcpy.c</S.P>
          <br />
          <S.P>Allowed functions:</S.P>
          <br />
          <S.P>
            --------------------------------------------------------------------------------
          </S.P>
          <br />
          <S.P>Reproduce the behavior of the function strcpy (man strcpy).</S.P>
          <br />
          <S.P>Your function must be declared as follows:</S.P>
          <br />
          <S.P>char *ft_strcpy(char *s1, char *s2);</S.P>
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
          <span>char<S.SpanTab />	<S.Green>*</S.Green><S.Lilas>ft_strcpy</S.Lilas>( char <S.Green>*</S.Green>s1, char <S.Green>*</S.Green>s2 )</span>
          <span>{'{'}</span>
          <S.SpanTab>int<S.SpanTab /> i <S.Green>=</S.Green> 0;</S.SpanTab>
          <br />
          <S.SpanTab><S.Red>while</S.Red> ( s2[ i ] <S.Green>!= </S.Green>{"'\\0'"} )</S.SpanTab>
          <S.SpanTab>{'{'}</S.SpanTab>
          <S.SpanTab><S.SpanTab />s1[ i ] <S.Green>=</S.Green> s2[ i ];</S.SpanTab>
          <S.SpanTab><S.SpanTab />i<S.Green>++</S.Green>;</S.SpanTab>
          <S.SpanTab>{'}'}</S.SpanTab>
          <S.SpanTab>s1[ i ] <S.Green>=</S.Green> {"'\\0'"};</S.SpanTab>
          <S.SpanTab><S.Red>return</S.Red> ( s1 );</S.SpanTab>
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

export default FtStrcpy
