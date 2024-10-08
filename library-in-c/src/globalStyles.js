import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
    list-style: none;
    text-decoration: none;
  }
  html, body {
  height: 100%;
  margin: 0;
  padding: 0;
}


`

export default GlobalStyle

export const Fonts = {
  fontDestaque: 'Vollkorn, serif',
  fontHighlight: 'Roboto, sans-serif'
}
export const Colors = {
  mainColor: '#14161a',
  secondfund: '#0e1018',
  texto: '#fff',
  textDestac: '#6cfaee',
  colorRed: '#ca2314',
  textBlue: '#6dace3',
  textREd: '#d66b65',
  textGray: '#6b727b',
  textREd2: '#ca2314',
  bgSection: '#151820',
  textYellow: '#D98B0C',
  textGreen: '#029A68'
}

export const FCor = {
  white: '#fff',
  green: '#00ff7f',
  black: '#000',
  red: '#c93939',
  gold: '#ffd700',
  lila: '#FD00FD'
}
