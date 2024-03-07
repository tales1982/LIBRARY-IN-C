import React from 'react'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import * as S from './styles'

const Construcao = () => {
  return (
    <S.ContainerMain>
      <Header />
        <S.Img src="/img/construcao2.png" alt="C" />
      <Footer />
    </S.ContainerMain>
  )
}

export default Construcao
