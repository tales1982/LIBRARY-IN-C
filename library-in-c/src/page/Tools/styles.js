import styled from 'styled-components'

export const Div = styled.div`
  width: 100vw;
  margin-top: -70px;
  height: calc(100vh + 450px);
  background-color: #151820;
`

export const ContainerTools = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  color: #fff;
  /* Adicione um margin-top correspondente à altura do seu cabeçalho fixo */
  /* Ajuste o valor para ser menor que o z-index do HeaderStyles */
  @media (max-width: 764px) {
    display: flex;
    flex-direction: column;
  }
`
