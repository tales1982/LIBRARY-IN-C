import React, { useState } from 'react'
import * as S from './styles'
import Header from '../../../Components/Header'
import Footer from '../../../Components/Footer/index'

const FtPutstr = () => {
  const [showSectionExercises, setShowSectionExercises] = useState(false)

  const toggleSectionExercises = () => {
    setShowSectionExercises(!showSectionExercises)
  }

  return (
    <S.ContainerMain>
      <Header />
      <S.H1>ft_putstr</S.H1>
      <S.ContainerExercises>
        <S.SectionInfo>
          <S.P>Assignment name : ft_putstr</S.P>
          <br />
          <S.P>Expected files : ft_putstr.c</S.P>
          <br />
          <S.P>Allowed functions: write</S.P>
          <br />
          <S.P>
            --------------------------------------------------------------------------------
          </S.P>
          <br />
          <S.P>
            Write a function that displays a string on the standard output.
          </S.P>
          <br />
          <S.P>
            The pointer passed to the function contains the address of the{' '}
            {"string's"} first character.
          </S.P>
          <br />
          <S.P>Your function must be declared as follows:</S.P>
          <S.P>
            <S.TextOrange>
              void <S.SpanTab /> ft_putstr ( char *str );
            </S.TextOrange>
          </S.P>
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
          <span>
            <S.Red>#include</S.Red> <S.Green>{'<unistd.h>'}</S.Green>
          </span>
          <br />
          <span>
            void <S.SpanTab />
            <S.Lilas>ft_putstr</S.Lilas>( char <S.Green>*</S.Green>str )
          </span>
          <span>{'{'}</span>
          <S.SpanTab>
            int i <S.Green>=</S.Green> 0;
          </S.SpanTab>
          <br />
          <S.SpanTab>
            <S.Red>while</S.Red> ( str[ i ] )
          </S.SpanTab>
          <S.SpanTab2>
            <S.Lilas>write</S.Lilas> ( 1, <S.Green>&</S.Green>str[ i
            <S.Green>++</S.Green> ], 1 );
          </S.SpanTab2>
          <span>{'}'}</span>
        </S.SectionExercises>
        <br />
        <br />
        <Footer />
      </S.ContainerExercises>
    </S.ContainerMain>
  )
}

export default FtPutstr
