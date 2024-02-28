import { Colors } from '../../globalStyles'
import styled from 'styled-components'

export const HeaderStyles = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: ${Colors.secondfund};
  width: 100%;
  height: 100px;
  color: ${Colors.textDestac};
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
`

export const Nav = styled.nav``
