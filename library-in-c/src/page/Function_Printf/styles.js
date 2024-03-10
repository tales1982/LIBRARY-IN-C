import styled, { keyframes } from 'styled-components'
import { Colors, Fonts,FCor } from '../../globalStyles'

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
  @media (min-width: 1025px) {
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
  max-width: 60%;
  height: auto;
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


  }
  @media (min-width: 765px) and (max-width: 1024px) {

  }
`
/***************** H3 ************** */
export const H3 = styled.h3`
  color: ${Colors.textDestac};
  padding-top: 4px;
  padding-bottom: 2px;
  width: 60%;
  padding-bottom: 10px;
  text-align: start;
  @media (max-width: 764px) {
    width: 90%;
  }

  @media (min-width: 765px) and (max-width: 1024px) {
    width: 98%;
  }
`
/*********Estilizacao do paragrafo ********************/
export const P = styled.p`
  font-family: ${Fonts.fontHighlight};
  font-size: 18px;
  font-weight: normal;
  padding-bottom: 20px;
  width: 60%;
  line-height: 1.4;
  color: #fff;

  /***************** Resposabilidade Mobile *******************/
  @media (max-width: 764px) {
    font-size: 16px;
    width: 96%;
    text-align: left;
  }

  @media (min-width: 765px) and (max-width: 1024px) {
    font-size: 16px;
    width: 96%;
    text-align: left;
  }
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
export const Margin = styled.span`
 margin-left: 66px;

  /***************** Resposabilidade Mobile *******************/
  @media (max-width: 764px) {

  }

  @media (min-width: 765px) and (max-width: 1024px) {

  }
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