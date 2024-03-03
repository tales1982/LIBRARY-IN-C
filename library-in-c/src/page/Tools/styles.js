import styled from 'styled-components'

export const Div = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #151820;

  @media (max-width: 764px) {
    height: 100%;
    margin-top: -100px;
  }
`

export const ContainerTools = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  display: flex;
  justify-content: center;
  padding-top: 200px;
  width: 100%;
  color: #fff;

  @media (max-width: 764px) {
    display: flex;
    flex-direction: column;
  }
`
