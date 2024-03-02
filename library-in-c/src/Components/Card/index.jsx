// Card.js
import React from 'react';
import * as S from './styles';
import { Link as RouterLink } from 'react-router-dom';

const Card = ({ title, text, linkTo, shadowColor, imgSrc }) => {
  return (
    <S.Card>
      <S.CardBox>
        <S.ContentBox shadowColor={shadowColor}>
          <S.CardTitle>{title}</S.CardTitle>
          <S.CardText>{text}</S.CardText>
          <S.seeMore>
            <RouterLink to={linkTo}>See More</RouterLink>
          </S.seeMore>
        </S.ContentBox>
        <S.Icon>
          <img src={imgSrc} alt='' />
        </S.Icon>
      </S.CardBox>
    </S.Card>
  );
};

export default Card;
