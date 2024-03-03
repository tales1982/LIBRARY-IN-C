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

`

export default GlobalStyle


export const Fonts = {
  fontDestaque: "Vollkorn, serif",
  fontHighlight: "Roboto, sans-serif"
};

export const Colors = {
  mainColor: '#14161a',
  secondfund:'#0e1018',
  texto:'#fff',
  textDestac: '#6cfaee',
  colorRed: '#ca2314',
  textBlue: '#6dace3',
  textREd: '#d66b65',
  textGray: '#6b727b',
  textREd2: '#ca2314'
}