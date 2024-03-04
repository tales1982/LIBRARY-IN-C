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
export const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding-top: 20px;
  margin-top: 100px;
  width: 100%;
  height: auto;
  color: #fff;
  background-color: ${Colors.bgSection};

  @media (max-width: 764px) {
    height: auto;
  }
`
export const ContainerButton = styled.section`
  width: 60%;

  @media (max-width: 764px) {
    width: 90%;
  }
`

export const ContainerLibft = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  color: #fff;
  background-color: ${Colors.bgSection};
  width: auto;

  @media (max-width: 764px) {
    width: 90vw;
  }
`
export const H1 = styled.h1`
  font-size: 34px;
  padding: 10px;
  color: ${Colors.textDestac};
  animation: ${shadowAnimation} 2s infinite alternate;
  filter: drop-shadow(10px 7px 50px var(--shadow-color));

  @media (max-width: 764px) {
    font-size: 20px;
  }
  /* Estilo para centralizar */
  margin: auto;
  text-align: center;
`

/* Container que contem o codigos  */

export const ContainerInfo = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 900px;
  margin-top: 30px;
  background-color: #000a2d;
  border-radius: 10px;
  box-shadow: 0px 20px 50px -25px rgba(0, 115, 255, 0.925);
  margin-bottom: 30px;
  padding: 20px;
  line-height: 1.8;
  font-family: ${Fonts.fontHighlight};
  font-weight: 600;
  @media (max-width: 764px) {
    width: 90vw;

  }
`

/***************  Estilizacao para as libft ****************/

export const DivFunction = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  color: #fff;
  background-color: ${Colors.bgSection};

  @media (max-width: 764px) {
    height: auto;
  }
`

export const ContainerLibftFunction = styled.section`
  color: #fff;
  background-color: ${Colors.bgSection};
  width: 900px;
  height: 100%;
  @media (max-width: 764px) {
    width: 90vw;
  }
`

export const FunctionH1 = styled.h1`
  font-size: 34px;
  color: ${Colors.textDestac};
  animation: ${shadowAnimation} 2s infinite alternate;
  filter: drop-shadow(10px 7px 50px var(--shadow-color));

  @media (max-width: 764px) {
    font-size: 20px;
  }
  margin: 120px 0 60px 0;
`

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
  font-weight: 700;
`

export const TextYellow = styled.span`
  color: ${Colors.textYellow};
  font-weight: 700;
`
export const SpanTab = styled.span`
  padding-left: 30px;
`

export const SpanTab2 = styled.span`
  padding-left: 60px;
`

export const TextPurple = styled.span`
  color: purple;
`

export const TextOrange = styled.span`
  color: orange;
`

export const P = styled.p`
  font-family: ${Fonts.fontHighlight};
  font-size: 16px;
  font-weight: bold;
  padding: 10px;
  line-height: 1.4;
`
