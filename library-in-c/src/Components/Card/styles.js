// styles.js
import styled from 'styled-components'

export const Card = styled.div`
  /* Adicione estilos gerais para o componente Card aqui */
  height: 350px;
  width: 250px;
  padding: 20px;
  perspective: 1000px;
`

export const CardBox = styled.div`
  /* Adicione estilos para o box do card aqui */
  padding-top: 100px;
  transform-style: preserve-3d;
  background-image: url('img/bgCard.jpg');
  background-position: center center;
  width: 100%;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  transition: all 0.5 ease-in-out;

  &:hover {
    background-position: 80% 20%;
    transform: rotate3d(0.5, 1, 0, 30deg);
    cursor: pointer;
  }

  @media (max-width: 764px) {
  }
`

export const ContentBox = styled.div`
  /* Adicione estilos para o content box aqui */
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.811);
  border-radius: 0px 0px 10px 10px;
  box-shadow: ${(props) => props.shadowColor || 'rgba(0, 115, 255, 0.925)'} 0px
    20px 50px -25px;
  transition: all 0.5s ease-in-out;
  padding: 50px 25px 25px 25px;
  transform-style: preserve-3d;
`

export const CardTitle = styled.h2`
  color: #fff;
  font-size: 24px;
  font-weight: 800;
  transition: all 0.5s ease-in-out;
  transform: translate3d(0px, 0px, 20px);

  &:hover {
    transform: translate3d(0px, 0px, 50px);
  }
`

export const CardText = styled.p`
  padding-top: 18px;
  font-size: 14px;
  color: #d7d7d7;
  transition: all 0.5s ease-in-out;
  transform: translate3d(0px, 0px, 20px);

  &:hover {
    transform: translate3d(0px, 0px, 50px);
  }
`

export const seeMore = styled.span`
  display: block;
  font-weight: 700;
  font-size: 12px;
  text-transform: uppercase;

  padding-top: 15px;
  transition: all 0.5s ease-in-out;
  transform: translate3d(0px, 0px 20px);
  a {
    color: #0088ff;
  }
  &:hover {
    transform: translate3d(0px, 0px, 50px);
  }
`

export const Icon = styled.span`
  position: absolute;
  top: 55px;
  left: 25px;
  height: 80px;
  width: 80px;
  background-color: #000;
  border-radius: 10px;
  box-shadow:
    #0066ff 0px 20px 60px 0px,
    #00c8ff 0px 18px 36px -18px;
  transform: translate3d(0px, 0px, 50px);

  img {
    width: 100%;
    height: 100%;
  }
`
