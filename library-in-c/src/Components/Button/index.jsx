import React from "react";
import * as S from './styles'
import { Link } from "react-router-dom";

const Button = ({ text, shadowColor,to }) => {
  return (
    <Link to={to}>
      <S.StyledButton shadowColor={shadowColor}>{text}</S.StyledButton>
    </Link>
  );
}

export default Button;