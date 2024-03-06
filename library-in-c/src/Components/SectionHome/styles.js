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
export const SectionStyle = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: relative;
  height: 100vh;
  background-color: ${Colors.bgSection};
  @media (max-width: 764px) {

  }
  @media (min-width: 765px) and (max-width: 1024px) {

  }
`

export const Img = styled.img`
  height: 550px;
  border-radius: 50%;
  margin-top: 140px;
  animation: ${shadowAnimation} 5s infinite alternate;
  filter: drop-shadow(10px 7px 50px var(--shadow-color));
  @media (max-width: 764px) {
    height: 280px;
  }

  @media (min-width: 765px) and (max-width: 1024px) {
    height: 400px;
  }
`

export const Span = styled.span``

export const H1 = styled.h1`
  font-size: ${Fonts.fontDestaque};
  color: ${Colors.textDestac};
  padding-top: 30px;
  @media (max-width: 764px) {
    font-size: 16px;
    padding: 0 10px;
    margin: 0px;
  }
  @media (min-width: 765px) and (max-width: 1024px) {
    padding: 40px;
  }
`
