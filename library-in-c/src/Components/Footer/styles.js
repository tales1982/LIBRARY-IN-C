import { Colors } from '../../globalStyles'
import styled from 'styled-components'

export const footerStyles = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: ${Colors.secondfund};
  border-top: 1px solid gray;
  width: 100vw;
  height: 100px;
  position: fixed;
  bottom: 0;
  left: 0;
  color: ${Colors.textDestac};

@media (max-width: 764px) {
  width: 100vw;
  height: 60px;
}

`;

