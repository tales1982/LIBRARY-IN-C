import React from "react";
import * as S from './styles'

const Button = ({ text, shadowColor }) => {
  return (
    <>
      <S.StyledButton shadowColor={shadowColor}>{text}</S.StyledButton>
    </>
  );
}

export default Button;