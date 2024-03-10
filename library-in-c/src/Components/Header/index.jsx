import React from 'react'
import * as S from './styles'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <S.HeaderStyles>
        <Link to="/">
        <S.SpanImg>
          <img src="/img/logo.png" alt="Logo Tales Technology" />
        </S.SpanImg>
      </Link>
      <S.Nav>
        <S.Ul>
          <Link to={'/'}>Home</Link>
          <Link to={'/Tools'}>Tools</Link>
          <Link to={'/Libft'}>Libft</Link>
          <Link to={'/Printf'}>Printf</Link>
        </S.Ul>
      </S.Nav>
    </S.HeaderStyles>
  )
}

export default Header
