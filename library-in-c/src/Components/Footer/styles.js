import { Colors } from '../../globalStyles'
import styled from 'styled-components'

export const footerStyles = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: ${Colors.secondfund};
  position: relative; /* Adicione esta linha */
  z-index: 1000; /* ajuste conforme necessário */
  border-top: 1px solid gray;
  width: 100vw;
  height: 60px;
  bottom: 0;
  left: 0;
  color: ${Colors.textDestac};

`;

export const Link = styled.a`
color:${Colors.textDestac}

`