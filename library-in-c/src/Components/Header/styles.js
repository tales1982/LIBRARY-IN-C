import { Colors, Fonts } from '../../globalStyles'
import styled, { keyframes } from 'styled-components';

const moveBorderAnimation = keyframes`
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0);
  }
`;
const moveBorderAnimation2 = keyframes`
  0% {
    transform: translateX(0);
    background-color: blue;
  }
  20% {
    background-color: orange;
  }
  40% {
    background-color: yellow;
  }
  60% {
    background-color: green;
  }
  80% {
    background-color: blue;
  }
  100% {
    transform: translateX(100%);
    background-color: purple;
  }
`;

export const HeaderStyles = styled.header`
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: ${Colors.secondfund};
  width: 100vw;
  height: 100px;
  z-index: 1000; /* Ajuste o valor conforme necessário para garantir que seja maior que o z-index da SectionStyle */
  border-bottom: 1px solid gray;

  @media (max-width: 764px) {
    display: flex;
    flex-direction: row;
  }
`
export const SpanImg = styled.span`
  & img {
    height: 100px;
  }

  @media (max-width: 764px) {
    & img {
    display: none;
  }
  }

`

export const Ul = styled.ul`
  display: flex;
  flex-direction: row;
  width: 800px;
  justify-content: space-around;
  font-weight: bold;
  font-size: 18px;

  li {
    text-decoration: none;
  }

  a {
    text-decoration: none;
    color: ${Colors.textDestac};
    font-family: ${Fonts.fontDestaque};
    position: relative;
    display: inline-block;
    overflow: hidden;

    &::before {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 3px;
    }

    &:hover::before {
      background-color: green; /* Cor da borda */
      transform-origin: bottom left;
      animation: ${moveBorderAnimation} 3s linear infinite;
      animation: ${moveBorderAnimation2} 3s linear infinite;
    }
  }


  @media (max-width: 764px) {
  }
`

export const Nav = styled.nav`
width: 300px;
flex-wrap: wrap;
display: flex;
align-items: center;
justify-content: center;
`
