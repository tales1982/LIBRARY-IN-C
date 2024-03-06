
import styled, { keyframes } from 'styled-components'
import { Colors, Fonts } from '../../globalStyles'

export const glowing = keyframes`
  0% { background-position: 0 0; }
  50% { background-position: 400% 0; }
  100% { background-position: 0 0; }
`

export const StyledButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 100px;
  border: none;
  outline: none;
  color: #fff;
  background: ${Colors.secondfund};
  cursor: pointer;
  position: relative;
  z-index: 0;
  border-radius: 10px;
  border: 1px solid white;
  margin: 10px;
  color: ${Colors.textDestac};
  font-size: 24px;
  font-weight: bold;
  font-family: ${Fonts.fontDestaque};

  @media (max-width: 764px) {
    height: 60px;
    width: 250px;
  }


  box-shadow: ${(props) => props.shadowColor || 'rgba(0, 115, 255, 0.925)'} 0px
    20px 50px -25px;
  transition: all 0.5s ease-in-out;
  padding: 50px 25px 25px 25px;
  transform-style: preserve-3d;

  &:before {
    content: '';
    background: linear-gradient(
      45deg,
      #ff0000,
      #ff7300,
      #fffb00,
      #48ff00,
      #00ffd5,
      #002bff,
      #7a00ff,
      #ff00c8,
      #ff0000
    );
    position: absolute;
    top: -2px;
    left: -2px;
    background-size: 400%;
    z-index: -1;
    filter: blur(5px);
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    animation: ${glowing} 20s linear infinite;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    border-radius: 10px;
  }

  &:active {
    background: ${Colors.secondfund};
  }

  &:active:after {
    background: transparent;
  }

  &:hover:before {
    opacity: 1;
  }

  &:after {
    z-index: -1;
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: ${Colors.secondfund};
    left: 0;
    top: 0;
    border-radius: 10px;
  }

`