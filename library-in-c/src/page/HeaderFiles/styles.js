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

export const ContaineHeadeFile = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  justify-content: center;
  margin-top: 100px;
  width: 100%;
  height: auto;
  color: #fff;
  background-color: ${Colors.bgSection};
`
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
  @media (max-width: 764px) {
    width: 90vw;
}

@media (min-width:765px) and (max-width: 1024px) {
    width: 80vw;
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

export const H3 = styled.h3`
  font-size: 22px;
  color: ${Colors.colorRed};
  font-family: ${Fonts.fontDestaque};

  @media (max-width: 764px) {
    font-size: 16px;
}
`

export const Ol = styled.ol`
  padding-left: 100px;
  padding-bottom: 10px;
  @media (max-width: 764px) {
    padding-left: 10px;
}
`
export const Li = styled.li`
  font-family: ${Fonts.fontHighlight};
  padding-bottom: 4px;
`

export const Code = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px;
  @media (max-width: 764px) {
    padding: 0px;
}
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
export const P = styled.p`
  padding: 4px;
`

export const Span = styled.span`
  font-size: 16px;
  padding: 5px;

  @media (max-width: 764px) {
    font-size: 12px;
}


text-align: center;
`
