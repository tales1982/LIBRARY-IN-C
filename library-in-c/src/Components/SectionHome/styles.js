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
  position: relative;
  justify-content: center;
  width: 100vw;
  height:calc( 100vh - 100px);
  background-color: #151820;
  margin-top: 100px;
  z-index: 1000;
  @media (max-width: 764px) {
    height: auto;
    padding-top: 30px;
  }
`

export const Img = styled.img`
  height: 600px;
  border-radius: 50%;
  animation: ${shadowAnimation} 5s infinite alternate;
  filter: drop-shadow(10px 7px 50px var(--shadow-color));
  @media (max-width: 764px) {
    height: 250px;
  }
`

export const Span = styled.span`

`

export const H1 = styled.h1`
  font-size: ${Fonts.fontDestaque};
  color: ${Colors.textDestac};
  padding-top: 30px;
  @media (max-width: 764px) {
    font-size: 16px;
    padding: 20px;
  }
`
