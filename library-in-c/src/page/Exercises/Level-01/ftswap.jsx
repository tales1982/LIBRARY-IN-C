import React, { useState } from 'react'
import * as S from './styles'
import Header from '../../../Components/Header'
import Footer from '../../../Components/Footer/index'

const FtSwap = () => {
  const [showSectionExercises, setShowSectionExercises] = useState(false)

  const toggleSectionExercises = () => {
    setShowSectionExercises(!showSectionExercises)
  }

  return (
    <S.ContainerMain>
      <Header />
      <S.H1>ft_swap</S.H1>
      <S.ContainerExercises>
        <S.SectionInfo>
          <br />
          <S.P>Assignment name  : ft_swap</S.P>
          <br />
          <S.P>Expected files   : ft_swap.c</S.P>
          <br />
          <S.P>Allowed functions: </S.P>
          <br />
          <S.P>
            --------------------------------------------------------------------------------
          </S.P>
          <br />
          <S.P>Write a function that swaps the contents of two integers the adresses of which</S.P>
          <S.P>are passed as parameters.</S.P>
          <br />
          <S.P>Your function must be declared as follows:</S.P>
          <br />
          <S.P><S.TextOrange>void<S.SpanTab /> ft_swap ( int *a, int *b );</S.TextOrange></S.P>
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
          <span>void<S.SpanTab /><S.Lilas>ft_swap</S.Lilas>( int <S.Green>*</S.Green> a , int <S.Green>*</S.Green> b )</span>
          <span>{'{'}</span>
          <S.SpanTab>int<S.SpanTab /> temp ;</S.SpanTab>
          <br />
          <S.SpanTab>temp <S.Green>=</S.Green> <S.Green>*</S.Green>a;</S.SpanTab>

          <S.SpanTab><S.Green>*</S.Green>a <S.Green>= </S.Green> <S.Green>*</S.Green>b; </S.SpanTab>
          <S.SpanTab><S.Green>*</S.Green>b <S.Green>= </S.Green> temp;</S.SpanTab>
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

export default FtSwap