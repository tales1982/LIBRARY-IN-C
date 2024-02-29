import React from 'react'
import * as S from './styles'
import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <S.HeaderStyles>
      <S.SpanImg>
        <img src="img/logo.png" alt="Logo Tales Technology" />
      </S.SpanImg>
      <S.Nav>
        <S.Ul>
          <Link to={'/'}>Home</Link>
          <Link to={'Tools'}>Tools</Link>
          <li>MENU-3</li>
          <li>MENU-4</li>
          </S.Ul>
      </S.Nav>
    </S.HeaderStyles>
  )
}

export default Header
