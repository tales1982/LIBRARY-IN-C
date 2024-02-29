import styled from 'styled-components'

export const ContainerTools = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  display: flex;
  height: calc(100vh - 100px);
  background-color: #151820;
  margin-top: 100px; /* Adicione um margin-top correspondente à altura do seu cabeçalho fixo */
  padding: 30px;
  z-index: 999; /* Ajuste o valor para ser menor que o z-index do HeaderStyles */
  width:auto;
`
