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

export const containerMakefile = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100;
  background-color: ${Colors.bgSection};
  color: #fff;
`

export const sectionDescrible = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
`
export const Article = styled.article`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 60%;
  height: auto;
  margin-top: 15px;
  background-color: #000a2d;
  border-radius: 10px;
  box-shadow: 0px 20px 50px -25px rgba(0, 115, 255, 0.925);
  margin-bottom: 30px;
  padding: 20px;
  line-height: 1.5;
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

export const H2 = styled.h1`
font-size: 32px;
padding-top: 20px;
padding-bottom: 10px;
color: ${Colors.textDestac};
font-family: ${Fonts.fontDestaque};
`
export const P = styled.p`
font-size: 16px;
padding: 10px;
font-weight: bold;
max-width: 900px;
flex-wrap: wrap;
font-family: ${Fonts.fontHighlight};
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

export const TextGreen = styled.span`
  color: ${Colors.textGreen};
  font-weight: 700;
`

export const TextYellow = styled.span`
  color: ${Colors.textYellow};
  font-weight: 700;
`
export const SpanTab = styled.span`
padding-left: 58px;
`

export const SpanTab2 = styled.span`
padding-left: 58px;
`

export const SpanL = styled.span`
line-height: 1.6;
`
export const Ol = styled.ol`
padding-top: 50px;
  padding-left: 100px;
  padding-bottom: 10px;
  @media (max-width: 764px) {
    padding-left: 10px;
}
`
export const Li = styled.li`
  font-family: ${Fonts.fontHighlight};
  padding-bottom: 4px;
  line-height: 1.4;
  font-weight: bold;
  margin: 3px;
`

