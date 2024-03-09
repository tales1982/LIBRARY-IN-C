import styled, { keyframes } from 'styled-components'
import { Colors, Fonts } from '../../globalStyles'

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
  width: 100vw;
  height: 100%;
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

/********* Secao de Informacoes **********************/
export const SectionInfo = styled.section`
  display: flex;
  flex-direction: column;
  align-items: start;
  box-shadow: 0px 20px 50px -25px rgba(0, 115, 255, 0.925);
  background-color: #000a2d;
  color: #fff;
  line-height: 1.8;
  font-family: ${Fonts.fontHighlight};
  width: 100%;
  max-width: 69%;
  height: auto;
  margin: 15px;
  border-radius: 10px;
  padding: 10px;

  /***************** Resposabilidade Mobile *******************/
  @media (max-width: 764px) {
    max-width: 90%;
  }

  @media (min-width: 765px) and (max-width: 1024px) {
    max-width: 90%;
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
  width: 60%;
  text-align: start;
  @media (max-width: 764px) {
    width: 90%;
    text-align: start;
  }

  @media (min-width: 765px) and (max-width: 1024px) {
    padding-left: 10px;
    width: 100%;
    height: 100%;
  }
`
/*********Estilizacao do paragrafo ********************/
export const P = styled.p`
  font-family: ${Fonts.fontHighlight};
  width: 70%;
  font-size: 18px;
  font-weight: normal;
  padding: 10px;
  line-height: 1.4;
  color: #fff;

  /***************** Resposabilidade Mobile *******************/
  @media (max-width: 764px) {
    font-size: 16px;
    padding: 10px;
    width: 100%;
    text-align: start;
  }

  @media (min-width: 765px) and (max-width: 1024px) {
    padding: 10px;
    font-size: 16px;
    text-align: start;
    width: 100%;
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
