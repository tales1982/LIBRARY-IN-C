import React, { useState } from 'react'
import * as S from './styles'
import Header from '../../../Components/Header'
import Footer from '../../../Components/Footer/index'

const Ulstr = () => {
  const [showSectionExercises, setShowSectionExercises] = useState(false)

  const toggleSectionExercises = () => {
    setShowSectionExercises(!showSectionExercises)
  }

  return (
    <S.ContainerMain>
      <Header />
      <S.H1>ulstr</S.H1>
      <S.ContainerExercises>
        <S.SectionInfo>
          <br />
          <S.P>Assignment name : ulstr</S.P>
          <br />
          <S.P>Expected files : ulstr.c</S.P>
          <br />
          <S.P>Allowed functions: write </S.P>
          <br />
          <S.P>
            --------------------------------------------------------------------------------
          </S.P>
          <br />
          <S.P>
            Write a program that takes a string and reverses the case of all its
            letters. <br />
            Other characters remain unchanged. <br />
            <br />
            You must display the result followed by a {"'\n'"}.<br />
            <br />
            If the number of arguments is not 1, the program displays {"'\n'"}.
          </S.P>

          <br />

          <S.P> </S.P>
          <S.P>
            <S.TextOrange>Examples:</S.TextOrange>
          </S.P>
          <br />
          <S.P>
            <S.Red>{'$>'} ./ulstr </S.Red>
            {'"'} L{" ' "}eSPrit nE peUt plUs pRogResSer s{"'"}Il staGne et sI
            peRsIsTent VAnIte et auto-justification.{'"'} | cat -e
          </S.P>
          <S.P>
            <S.Green>
              l{" ' "}EspRIT Ne PEuT PLuS PrOGrESsER S{" ' "}iL STAgNE ET Si
              PErSiStENT vaNiTE ET AUTO-JUSTIFICATION.$
            </S.Green>{' '}
          </S.P>

          <S.P>
            <S.Red>{'$>'} ./ulstr </S.Red>
            {'"'}S{" ' "}enTOuRer dE sECreT eSt uN sIGnE De mAnQuE De
            coNNaiSSanCe. {'"'} | cat -e
          </S.P>
          <S.P>
            <S.Green>
              s{" ' "}ENtoUrER De SecREt EsT Un SigNe dE MaNqUe dE COnnAIssANcE.
              $
            </S.Green>{' '}
          </S.P>
          <S.P>
            <S.Red>{'$>'} ./ulstr </S.Red>
            {'"'}3:21 Ba tOut moUn ki Ka di KE m{" ' "}en Ka fe fot{'"'} | cat
            -e
          </S.P>
          <S.P>
            <S.Green>
              3:21 bA ToUT MOuN KI kA DI ke M{" ' "}EN kA FE FOT$
            </S.Green>{' '}
          </S.P>
          <S.P>
            <S.Red>{'$>'} ./ulstr</S.Red> | cat -e
          </S.P>
          <S.P>
            <S.Green>{'$'}</S.Green>
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
          <span>int <S.SpanTab/> <S.Lilas>main</S.Lilas>( int argc, char <S.Green>**</S.Green>argv )</span>
          <span>{'{'}</span>
          <S.SpanTab>int  <S.SpanTab />i ;</S.SpanTab>
          <br />
          <S.SpanTab>i <S.Green>= </S.Green>0 ;</S.SpanTab>
          <S.SpanTab><S.Red>if </S.Red>( argc <S.Green>== </S.Green>2 )</S.SpanTab>
          <S.SpanTab>{'{'}</S.SpanTab>
          <S.SpanTab2><S.Red>while</S.Red>( argv[ 1 ][ i ] <S.Green>!=</S.Green> {"'\\0'"} )</S.SpanTab2>
          <S.SpanTab2>{'{'}</S.SpanTab2>
          <S.SpanTab2><S.SpanTab/><S.Red>if</S.Red> ( argv[ 1 ][ i ] <S.Green>{'>='}</S.Green> {"'a'"} <S.Green>&&</S.Green> argv[ 1 ][ i ] <S.Green>{'<='}</S.Green> {"'z'"} )</S.SpanTab2>
          <S.SpanTab2><S.SpanTab2/>argv[ 1 ][ i ] <S.Green>-= </S.Green>32; </S.SpanTab2>
          <S.SpanTab2><S.SpanTab /> <S.Red>else if</S.Red> ( argv[ 1 ][ i ] <S.Green>{'>='}</S.Green> {"'A'"} <S.Green>&&</S.Green> argv[ 1 ][ i ] <S.Green>{'<='}</S.Green> {"'Z'"} )</S.SpanTab2>
          <S.SpanTab2><S.SpanTab2/>argv[ 1 ][ i ] <S.Green>+= </S.Green>32; </S.SpanTab2>
          <S.SpanTab2><S.SpanTab/> <S.Lilas> write</S.Lilas>( 1, <S.Green>&</S.Green>argv[ 1 ][ i ], 1 );</S.SpanTab2>
          <S.SpanTab2><S.SpanTab />i<S.Green>++</S.Green>;</S.SpanTab2>
          <S.SpanTab2>{'}'}</S.SpanTab2>
          <S.SpanTab>{'}'}</S.SpanTab>
          <S.SpanTab><S.Lilas>write</S.Lilas>(1, {'"\\n"'}, 1);</S.SpanTab>
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

export default Ulstr
