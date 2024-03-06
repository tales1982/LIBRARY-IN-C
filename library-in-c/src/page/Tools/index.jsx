import React from 'react'
import * as S from './styles'
import Header from '../../Components/Header/index'
import Card from '../../Components/Card'
import Footer from '../../Components/Footer/index'

const SectionTools = () => {
  return (
    <>
      <Header />
      <S.Div>
        <S.ContainerTools>
          <Card
            title="Header"
            text="This page will provide explanations about some of the concepts applied in header files."
            linkTo="/HeaderFiles"
            shadowColor="rgba(238, 255, 0, 0.925)"
            imgSrc="img/iconH.webp"
            alt="Header files"
          />
          <Card
            title="Struct"
            text="A structure is a feature that allows grouping different data types under a single name."
            linkTo="/Struct"
            shadowColor="rgba(0, 255, 0, 0.973)" // Cor da sombra para o primeiro Card
            imgSrc="img/struct.png"
            alt="C Structures"
          />
          <Card
            title="Makefiles"
            text="
          Makefiles automate program compilation in Unix and related systems."
            linkTo="/Makefile"
            shadowColor="rgba(255, 0, 0, 0.925)" // Cor da sombra para o segundo Card
            imgSrc="img/makefile.png"
            alt="Makefile"
          />
        </S.ContainerTools>
      </S.Div>
      <Footer />
    </>
  )
}

export default SectionTools
