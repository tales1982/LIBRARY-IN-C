import React from 'react'
import * as S from './styles'
import Header from '../../Components/Header/index'
import Card from '../../Components/Card'
import Footer from '../../Components/Footer/index'


const Exercises = () => {
  return (
    <>
      <Header />
      <S.Div>
        <S.ContainerPrintf>
          <S.ContainerCard>
            <Card
              title="Level-01"
              text="Execises easy"
              linkTo="./Level-01/Menu-level-01"
              shadowColor="rgba(238, 255, 0, 0.925)"
              imgSrc="img/C.ico"
              alt="Execises for C"
            />
            <Card
              title="Level-02"
              text="Execises middle level"
              linkTo="../Construcao"
              shadowColor="rgba(0, 255, 0, 0.973)" // Cor da sombra para o primeiro Card
              imgSrc="img/C.ico"
              alt="Execises for C"
            />
          </S.ContainerCard>
          <S.ContainerCard>
            <Card
              title="Level-03"
              text="Execises advanced"
              linkTo="../Construcao"
              shadowColor="rgba(57, 255, 20, 0.84)" // Cor da sombra para o primeiro Card
              imgSrc="img/C.ico"
              alt="Execises for C"
            />
            <Card
              title="Level-04"
              text="Execises hard level"
              linkTo="../Construcao"
              shadowColor="rgba(150, 7, 0, 0.973)" // Cor da sombra para o primeiro Card
              imgSrc="img/C.ico"
              alt="Execises for C"
            />
          </S.ContainerCard>
        </S.ContainerPrintf>
      </S.Div>
      <Footer />
    </>
  )
}

export default Exercises
