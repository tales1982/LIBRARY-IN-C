import React, { useState } from 'react'
import * as S from './styles'
import Header from '../../../Components/Header'
import Footer from '../../../Components/Footer/index'

const Fizzbuzz = () => {
  const [showSectionExercises, setShowSectionExercises] = useState(false)

  const toggleSectionExercises = () => {
    setShowSectionExercises(!showSectionExercises)
  }

  return (
    <S.ContainerMain>
      <Header />
      <S.H1>Fizzbuzz</S.H1>
      <S.ContainerExercises>
        <S.SectionInfo>
          <S.P>Assignment name : fizzbuzz</S.P>
          <S.P>Expected files : fizzbuzz.c</S.P>
          <S.P>Allowed functions: write</S.P>
          <S.P>
            --------------------------------------------------------------------------------
          </S.P>
          <S.P>
            Write a program that prints the numbers from 1 to 100, each
            separated by a newline.
          </S.P>
          <S.P>
            If the number is a multiple of 3, it prints {"'fizz'"} instead.
          </S.P>
          <S.P>
            If the number is a multiple of 5, it prints {"'buzz' "}instead.
          </S.P>
          <S.P>
            If the number is both a multiple of 3 and a multiple of 5, it prints{' '}
            {"'fizzbuzz'"} instead.
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
          <br />
          <S.P>
            <S.Red>{'$>'}</S.Red>./fizzbuzz
          </S.P>
          <S.P>1</S.P>
          <S.P>2</S.P>
          <S.P>fizz </S.P>
          <S.P>4</S.P>
          <S.P>buzz</S.P>
          <S.P>fizz</S.P>
          <S.P>7</S.P>
          <S.P>8</S.P>
          <S.P>fizz</S.P>
          <S.P>buzz</S.P>
          <S.P>11</S.P>
          <S.P>fizz</S.P>
          <S.P>13</S.P>
          <S.P>14</S.P>
          <S.P>fizzbuzz</S.P>
          <S.P>[...]</S.P>
          <S.P>97</S.P>
          <S.P>98</S.P>
          <S.P>fizz</S.P>
          <S.P>buzz</S.P>
          <S.P>
            <S.Red>{'$>'}</S.Red>
          </S.P>
        </S.SectionInfo>
        <br />
        <S.ButtonExersice onClick={toggleSectionExercises}>
          View answer
        </S.ButtonExersice>
        <br />
        <S.SectionExercises className={showSectionExercises ? 'expanded' : ''}>
          <br />
          <span>
            <S.Red>#include</S.Red> <S.Green>{'<unistd.h>'}</S.Green>
          </span>
          <br />
          <span>
            void <S.SpanTab /> <S.Lilas>ft_write_number</S.Lilas>( int number )
          </span>
          <span>{'{'}</span>
          <S.SpanTab>
            char <S.SpanTab />
            str[10] <S.Green>=</S.Green> {'"0123456789"'};
          </S.SpanTab>
          <br />
          <S.SpanTab>
            <S.Red>if</S.Red> ( number <S.Green>{'>'}</S.Green> 9 )
          </S.SpanTab>
          <S.SpanTab2>
          <S.Lilas>ft_write_number</S.Lilas>( number <S.Green>/</S.Green> 10 );
          </S.SpanTab2>
          <S.SpanTab>
            <S.Lilas>write</S.Lilas> ( 1, <S.Green>&</S.Green>str[ number{' '}
            <S.Green>%</S.Green> 10 ], 1 );
          </S.SpanTab>
          <span>{'}'}</span>
          <br />
          <br />
          <span>
            int <S.SpanTab /> <S.Lilas>main</S.Lilas>( void )
          </span>
          <span>{'{'}</span>
          <S.SpanTab>int i = 1;</S.SpanTab>
          <br />
          <S.SpanTab><S.Red>while</S.Red> ( i <S.Green>{'<='}</S.Green> 100 )</S.SpanTab>
          <S.SpanTab>{'{'}</S.SpanTab>
          <S.SpanTab2><S.Red>if </S.Red>( i <S.Green>%</S.Green> 15 <S.Green>==</S.Green> 0 )</S.SpanTab2>
          <S.SpanTab2><S.SpanTab /><S.Lilas>write</S.Lilas> ( 1, {'"fizzbuzz"'}, 8 );</S.SpanTab2>
          <S.SpanTab2><S.Red>else if</S.Red> ( i <S.Green>%</S.Green> 3 <S.Green>==</S.Green> 0 )</S.SpanTab2>
          <S.SpanTab2><S.SpanTab /><S.Lilas>write</S.Lilas> ( 1, {'"fizz"'}, 4 );</S.SpanTab2>
          <S.SpanTab2><S.Red>else if</S.Red> ( i <S.Green>%</S.Green> 5 <S.Green>==</S.Green> 0 )</S.SpanTab2>
          <S.SpanTab2><S.SpanTab /><S.Lilas>write</S.Lilas> ( 1, {'"buzz"'}, 4 )</S.SpanTab2>
          <S.SpanTab2><S.Red>else</S.Red></S.SpanTab2>
          <S.SpanTab2><S.SpanTab /><S.Lilas>ft_write_number</S.Lilas> ( i );</S.SpanTab2>
          <S.SpanTab2>i<S.Green>++</S.Green>;</S.SpanTab2>
          <S.SpanTab2><S.Lilas>write</S.Lilas> ( 1, {'"\\n"'}, 1 );</S.SpanTab2>
          <S.SpanTab>{'}'}</S.SpanTab>
          <span>{'}'}</span>
        </S.SectionExercises>
        <br />
        <Footer />
      </S.ContainerExercises>
    </S.ContainerMain>
  )
}

export default Fizzbuzz
