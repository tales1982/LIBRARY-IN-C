import styled, { keyframes } from 'styled-components'
import { Colors, Fonts,FCor } from '../../../../src/globalStyles'

const shadowAnimation = keyframes`
  0% {
    filter: drop-shadow(0px 0px 0px var(--shadow-color, ${Colors.textDestac}));
  }

  100% {
    filter: drop-shadow(0px 0px 50px var(--shadow-color, ${Colors.colorRed}));
  }
`
/************* container PAI ******************/
export const ContainerMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  justify-content: space-between;
  position: relative;
  display: flex;
  width: 100vw;
  height: 100vh;
  background-color: ${Colors.bgSection};

  /***************** Resposabilidade Mobile *******************/
  @media (max-width: 764px) {
    text-align: center;
    height: 100%;
  }

  @media (min-width: 765px) and (max-width: 1024px) {
    text-align: center;
    height: 100%;
  }
`
/************* Container de funcoes *******************/
export const ContainerExercises = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${Colors.bgSection};
  width: 100%;
  height: auto;
  color: #fff;

  /***************** Resposabilidade Mobile *******************/
  @media (max-width: 764px) {
    width: 100%;
    height: 100%;
  }
  @media (min-width: 765px) and (max-width: 1024px) {
    width: 100%;
    height: 100%;
  }
`
export const containerButao = styled.article`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media (min-width: 1024px) and (max-width: 1280px) {
    max-width: 1000px;
    padding-left: 100px;
  }
`
/********* Secao de Informacoes **********************/
export const SectionInfo = styled.section`
  display: flex;
  flex-direction: column;
  align-items: start;
  box-shadow: 0px 20px 50px -25px rgba(0, 115, 255, 0.925);
  background-color: #000a2d;
  color: #fff;
  font-family: ${Fonts.fontHighlight};
  max-width: 60%;
  width: 100%;
  height: auto;
  border-radius: 10px;
  padding: 10px;

  /***************** Resposabilidade Mobile *******************/
  @media (max-width: 764px) {
    max-width: 90%;
    width: auto;
  }

  @media (min-width: 765px) and (max-width: 1024px) {
    max-width: 90%;
    width: auto;
  }
`
/********* Secao de Informacoes **********************/
export const SectionExercises = styled.section`
  overflow: hidden;
  transition: max-height 0.5s ease-in-out;
  max-height: 0; // começa escondido
  &.expanded {
    max-height: 100%; // altura máxima esperada do conteúdo (ajuste conforme necessário)
  }
  display: flex;
  flex-direction: column;
  align-items: start;
  box-shadow: 0px 20px 50px -25px rgba(0, 115, 255, 0.925);
  background-color: #000a2d;
  color: #fff;
  font-family: ${Fonts.fontHighlight};
  max-width: 60%;
  width: 100%;
  height: auto;
  border-radius: 10px;
  padding: 10px;


  /***************** Resposabilidade Mobile *******************/
  @media (max-width: 764px) {
    max-width: 90%;
    width: auto;
  }

  @media (min-width: 765px) and (max-width: 1024px) {
    max-width: 90%;
    width: auto;
  }
`

/***************** H1 ************** */
export const H1 = styled.h1`
  padding-top: 120px;
  padding-bottom: 30px;
  font-size: 34px;
  color: ${Colors.textDestac};
  animation: ${shadowAnimation} 2s infinite alternate;
  filter: drop-shadow(10px 7px 50px var(--shadow-color));

  /***************** Resposabilidade Mobile *******************/
  @media (max-width: 764px) {
    align: center;
    width: 90vw;
  }
  @media (min-width: 765px) and (max-width: 1024px) {
    align: center;
    width: 90vw;
  }
`
/***************** H3 ************** */
export const H3 = styled.h3`
  color: ${Colors.textDestac};
  padding-top: 4px;
  padding-bottom: 2px;
`
/*********Estilizacao do paragrafo ********************/
export const P = styled.p`
  font-family: ${Fonts.fontHighlight};
  width: 70%;
  font-size: 16px;
  font-weight: normal;
  padding: 3px;
  color: #fff;

  /***************** Resposabilidade Mobile *******************/
  @media (max-width: 764px) {
    text-align: start;
    width: 90%;
    font-size: 16px;
  }

  @media (min-width: 765px) and (max-width: 1024px) {
    text-align: start;
    width: 90%;
    font-size: 16px;
  }
`
/******** Estilizacao das cores para os span ********** */
export const TextRed = styled.span`
  color: ${Colors.textREd};
  font-weight: 700;
`
export const TextRed2 = styled.span`
  color: ${Colors.textREd2};
  font-weight: 700;
`
export const TextBlue = styled.span`
  color: ${Colors.textBlue};
  font-weight: 700;
`
export const TextGray = styled.span`
  color: ${Colors.textGray};
  font-weight: 700;
`
export const TextGreen = styled.span`
  color: ${Colors.textGreen};
  html,
  body {
    height: 100%;
    margin: 0;
    padding: 0;
  }
  font-weight: 700;
`
export const TextYellow = styled.span`
  color: ${Colors.textYellow};
  font-weight: 700;
`
export const TextPurple = styled.span`
  color: purple;
`
export const TextOrange = styled.span`
  color: orange;
`
/********Tabulacao para os codigos *************/
export const SpanTab = styled.span`
  line-height: 1.5;
  padding-left: 30px;
  /***************** Resposabilidade Mobile *******************/
  @media (max-width: 764px) {
    padding-left: 10px;
  }

  @media (min-width: 765px) and (max-width: 1024px) {
    padding-left: 20px;
  }
`
export const SpanTab2 = styled.span`
  padding-left: 60px;
  line-height: 1.5;
  /***************** Resposabilidade Mobile *******************/
  @media (max-width: 764px) {
    padding-left: 20px;
  }

  @media (min-width: 765px) and (max-width: 1024px) {
    padding-left: 40px;
  }
`
/****************  Estilizacao do UL ***********/
export const Ul = styled.ul`
  color: #fff;
  font-size: 18px;
  width: 70%;
  @media (max-width: 764px) {
    padding-top: 20px;
    width: 90%;
    font-size: 14px;
  }

  @media (min-width: 765px) and (max-width: 1024px) {
    padding-top: 20px;
    width: 90%;
    font-size: 16px;
  }
`
/*************** Estilizacao do Li *****************/
export const Li = styled.li`
  padding-bottom: 4px;
`
/************** BUTTON OPEN EXERCISES ************ */
export const ButtonExersice = styled.button`
  width: 250px;
  font-size: 34px;
  color: ${Colors.colorRed};
  animation: ${shadowAnimation} 1s infinite alternate;
  filter: drop-shadow(10px 7px 50px var(--shadow-color));
border-radius: 10px;
`

/************ Cores Tags ***************/

export const White = styled.span`
color: ${FCor.white};
`
export const Green = styled.span`
color: ${FCor.green};
`
export const Gold = styled.span`
color: ${FCor.gold};
`
export const Black = styled.span`
color: ${FCor.black};
`
export const Red = styled.span`
color: ${FCor.red};
`
export const Lilas = styled.span`
color: ${FCor.lila};
`
