import React from 'react'
import * as S from './styles'
import Header from '../../Components/Header/index'
import Card from '../../Components/Card'
import Footer from '../../Components/Footer/index'

const SectionTools = () => {
  return (
    <>
      <S.Div>
        <Header />
        <S.ContainerTools>

          <Card
            title="Header files"
            text="This page will provide explanations about some of the concepts applied in header files."
            linkTo="/HeaderFiles"
            shadowColor="rgba(238, 255, 0, 0.925)"
            imgSrc="img/iconH.webp"
            alt="Header files"
          />
          <Card
            title="C Structures"
            text="A structure is a feature that allows grouping different data types under a single name."
            linkTo="/"
            shadowColor="rgba(0, 255, 0, 0.973)" // Cor da sombra para o primeiro Card
            imgSrc="img/struct.png"
            alt="C Structures"
          />
          <Card
            title="Makefiles"
            text="
          Makefiles automate program compilation in Unix and related systems."
            linkTo="/"
            shadowColor="rgba(255, 0, 0, 0.925)" // Cor da sombra para o segundo Card
            imgSrc="img/makefile.png"
            alt="Makefiles"
          />
          <Footer />
        </S.ContainerTools>

      </S.Div>
    </>
  )
}

export default SectionTools
/*
Aqui coloco o caminho que e pra direcionar
<Card title="° Título" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, sint." linkTo="/" />
*/
