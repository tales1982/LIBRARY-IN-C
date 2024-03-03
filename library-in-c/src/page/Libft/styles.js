import styled, { keyframes } from 'styled-components'
import { Colors } from '../../globalStyles'

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
  height: 100%;
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