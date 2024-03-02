import styled from 'styled-components'

export const Div = styled.div`
  width: 100vw;
  height: 10vh;
`

export const ContainerLibft = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  height: calc(100vh);
  color: #fff;
  background-color: #151820; /* Adicione um margin-top correspondente à altura do seu cabeçalho fixo */
  /* Ajuste o valor para ser menor que o z-index do HeaderStyles */
`
