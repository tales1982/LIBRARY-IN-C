import React from 'react'
import * as S from './styles'
import Header from '../../Components/Header/index'
import Card from '../../Components/Card'
import Footer from '../../Components/Footer/index'

const Printf = () => {
  return (
    <>
      <Header />
      <S.Div>
        <S.ContainerPrintf>
          <S.ContainerCard>
            <Card
            title="Makefile"
            text=""
            linkTo="/page/Function_Printf/makefile"
            shadowColor="rgba(255, 0, 0, 0.925)" // Cor da sombra para o segundo Card
            imgSrc="img/makefile.png"
            alt="Makefile"
          />
          <Card
            title="ft_printf.h"
            text=""
            linkTo="/page/Function_Printf/header"
            shadowColor="rgba(238, 255, 0, 0.925)"
            imgSrc="img/iconH.webp"
            alt="ft_printf.h"
          />
          <Card
            title="ft_printf.c"
            text=""
            linkTo="/page/Function_Printf/ft_print_c"
            shadowColor="rgba(0, 255, 0, 0.973)" // Cor da sombra para o primeiro Card
            imgSrc="img/C.ico"
            alt="ft_printf.c"
          />
          </S.ContainerCard>
          <S.ContainerCard>
             <Card
            title="ft_print_char.c"
            text=""
            linkTo="/page/Function_Printf/ft_print_char_c"
            shadowColor="rgba(57, 255, 20, 0.84)" // Cor da sombra para o primeiro Card
            imgSrc="img/C.ico"
            alt="ft_print_char.c"
          />
          <Card
            title="ft_print_hex.c"
            text=""
            linkTo="/page/Function_Printf/ft_print_hex"
            shadowColor="rgba(150, 7, 0, 0.973)" // Cor da sombra para o primeiro Card
            imgSrc="img/C.ico"
            alt="ft_print_hex.c"
          />
          <Card
            title="ft_print_int.c"
            text=""
            linkTo="/page/Function_Printf/ft_print_int"
            shadowColor="rgba(57, 255, 20, 0.84)" // Cor da sombra para o primeiro Card
            imgSrc="img/C.ico"
            alt="ft_print_int.c"
          />
          </S.ContainerCard>
          <S.ContainerCard>
            <Card
            title="ft_print_pointer.c"
            text=""
            linkTo="/page/Function_Printf/ft_print_point"
            shadowColor="rgba(0, 255, 255, 0.886)" // Cor da sombra para o primeiro Card
            imgSrc="img/C.ico"
            alt="ft_print_pointer.c"
          />
           <Card
            title="ft_print_string.c"
            text=""
            linkTo="/page/Function_Printf/ft_string"
            shadowColor="rgba(255, 255, 0, 0.831)" // Cor da sombra para o primeiro Card
            imgSrc="img/C.ico"
            alt="ft_print_string.c"
          />
           <Card
            title="ft_print_unsigned.c"
            text=""
            linkTo="/page/Function_Printf/ft_print_unsigned"
            shadowColor="rgba(255, 65, 108, 0.904)" // Cor da sombra para o primeiro Card
            imgSrc="img/C.ico"
            alt="ft_print_unsigned.c"
          />
          </S.ContainerCard>
        </S.ContainerPrintf>
      </S.Div>
      <Footer />
    </>
  )
}

export default Printf
