import styled from 'styled-components'

export const Div = styled.div`
  width: 100vw;
  height: calc(100vh - 60px);
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
  justify-content: center;
  width: 100%;
  height: 100%;
  color: #fff;

  @media (max-width: 764px) {
    display: flex;
    flex-direction: column;
    margin-top: 200px;
  }
  @media (min-width:765px) and (max-width: 1024px) {
    width: 90vw;
}
`
