import React, { useState } from 'react'
import * as S from './styles'
import Header from '../../../Components/Header'
import Footer from '../../../Components/Footer/index'

const SearchAndReplace = () => {
  const [showSectionExercises, setShowSectionExercises] = useState(false)

  const toggleSectionExercises = () => {
    setShowSectionExercises(!showSectionExercises)
  }

  return (
    <S.ContainerMain>
      <Header />
      <S.H1>search_and_replace</S.H1>
      <S.ContainerExercises>
        <S.SectionInfo>
          <br />
          <S.P>Assignment name : search_and_replace</S.P>
          <br />
          <S.P>Expected files : search_and_replace.c</S.P>
          <br />
          <S.P>Allowed functions: write, exit </S.P>
          <br />
          <S.P>
            --------------------------------------------------------------------------------
          </S.P>
          <br />
          <S.P>
            Write a program called search_and_replace that takes 3 arguments,
            the first <br />
            arguments is a string in which to replace a letter (2nd argument) by{' '}
            <br />
            another one (3rd argument).
          </S.P>
          <br />
          <S.P>
            {' '}
            If the number of arguments is not 3, just display a newline.
          </S.P>
          <br />
          <S.P>
            {' '}
            If the second argument is not contained in the first one (the
            string) <br />
            then the program simply rewrites the string followed by a newline.
          </S.P>
          <br />
          <S.P>
            <S.TextOrange>Examples:</S.TextOrange>
          </S.P>
          <br />
          <S.P>
            <S.Red>{'$>'} ./search_and_replace </S.Red>{' '}
            {'"Papache est un sabre"'} {'"a" "o"'}
          </S.P>
          <S.P>
            <S.Green> Popoche est un sobre</S.Green>
          </S.P>
          <S.P>
            <S.Red>{'$>'} ./search_and_replace </S.Red> {'"zaz" "art" "zul"'} |
            cat -e
          </S.P>
          <S.P>
            <S.Green> {'$'}</S.Green>
          </S.P>
          <S.P>
            <S.Red>{'$>'} ./search_and_replace </S.Red> {'"zaz" "r" "u"'} | cat
            -e
          </S.P>
          <S.P>
            <S.Green> zaz{'$'}</S.Green>
          </S.P>
          <S.P>
            <S.Red>{'$>'} ./search_and_replace </S.Red>{' '}
            {'"jacob" "a" "b" "c" "e" '}| cat -e
          </S.P>
          <S.P>
            <S.Green> {'$'}</S.Green>
          </S.P>
          <S.P>
            <S.Red>{'$>'} ./search_and_replace </S.Red>{' '}
            {'"ZoZ eT Dovid oiME le METol." "o" "a" | cat -e'}
          </S.P>
          <S.P>
            <S.Green> ZaZ eT David aiME le METal.{'$'}</S.Green>
          </S.P>
          <S.P>
            <S.Red>{'$>'} ./search_and_replace </S.Red>{' '}
            {'"wNcOre Un ExEmPle Pas Facilw a Ecrirw " "w" "e"'} | cat -e
          </S.P>
          <S.P>
            <S.Green>eNcOre Un ExEmPle Pas Facile a Ecrire {'$'}</S.Green>
          </S.P>
          <S.P>
            <S.Green> </S.Green>
          </S.P>
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
            <S.Red>#include</S.Red>
            {' <unistd.h>'}
          </span>
          <br />
          <span>
            int <S.SpanTab />
            <S.Lilas>main</S.Lilas>( int argc, char <S.Green>**</S.Green>argv )
          </span>
          <span>{'{'}</span>
          <S.SpanTab>
            int <S.SpanTab />i ;
          </S.SpanTab>
          <br />
          <S.SpanTab>
            i <S.Green>=</S.Green> 0 ;
          </S.SpanTab>
          <S.SpanTab>
            <S.Red>if</S.Red> ( argc <S.Green>==</S.Green> 4{' '}
            <S.Green>&&</S.Green> <S.Green>!</S.Green>argv[ 2 ][ 1 ]{' '}
            <S.Green>&&</S.Green> <S.Green>!</S.Green>argv[ 3 ][ 1 ] )
          </S.SpanTab>
          <S.SpanTab> {'{'}</S.SpanTab>
          <S.SpanTab2><S.Red>while</S.Red>( argv[ 1 ][ i ] <S.Green>!= </S.Green>{ "'\\0'" } )</S.SpanTab2>
          <S.SpanTab2>{'{'}</S.SpanTab2>
          <S.SpanTab2><S.SpanTab/><S.Red>if</S.Red> ( argv[ 1 ][ i ] <S.Green> == </S.Green>argv[ 2 ][ 0 ] )</S.SpanTab2>
          <S.SpanTab2><S.SpanTab2/>argv[ 1 ][ i ] <S.Green> = </S.Green> argv[ 3 ][ 0 ];</S.SpanTab2>
          <S.SpanTab2><S.SpanTab/><S.Lilas>write</S.Lilas> ( 1, <S.Green>&</S.Green>argv[ 1 ][ i ], 1 );</S.SpanTab2>
          <S.SpanTab2><S.SpanTab/>i<S.Green>++</S.Green>;</S.SpanTab2>
          <S.SpanTab2>{'}'}</S.SpanTab2>
          <S.SpanTab>{'}'}</S.SpanTab>
          <S.SpanTab><S.Lilas>write</S.Lilas> ( 1, {'"\\n"'}, 1 );</S.SpanTab>
          <span>{'}'}</span>
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

export default SearchAndReplace
