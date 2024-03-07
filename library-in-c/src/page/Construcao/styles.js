import styled from 'styled-components'
import { Colors } from '../../globalStyles'



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
    height: 100vh;
  }

  @media (min-width: 765px) and (max-width: 1024px) {
    text-align: center;
  }
`
export const Img = styled.img`
padding-top: 160px;
height: 600px;

@media (max-width: 764px) {
  padding-top: 160px;
height: 500px;
  }
  @media (min-width: 765px) and (max-width: 1024px) {

  }
`