import { Colors, Fonts } from '../../globalStyles'
import styled from 'styled-components'

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
`
export const SpanImg = styled.span`
  & img {
    height: 100px;
  }
  
`

export const Ul = styled.ul`
  display: flex;
  flex-direction: row;
  width: 800px;
  justify-content: space-around;
  font-weight: bold;
  font-size: 18px;
  
  li{
    text-decoration: none;
  }

  a{
    text-decoration: none;
    color: ${Colors.textDestac};
    font-family: ${Fonts.fontDestaque};
  }

@media (max-width: 764px) {
  display: none;
  
}
`

export const Nav = styled.nav`
`
