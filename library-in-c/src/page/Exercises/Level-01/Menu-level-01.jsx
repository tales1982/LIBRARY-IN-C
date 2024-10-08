import React from 'react'
import * as S from './styles'
import Header from '../../../../src/Components/Header'
import Button from '../../../../src/Components/Button'
import Footer from '../../../../src/Components/Footer/index'

const MenuLevel01 = () => {
  return (
    <S.ContainerMain>
      <Header />
      <S.H1>Level-01</S.H1>
      <S.ContainerExercises>
        <S.containerButao>
          <Button
            text="firstWord"
            shadowColor="rgba(255, 0, 0, 0.8)"
            to="../Exercises/Level-01/FristWord"
          />
          <Button
            text="fizzbuzz"
            shadowColor="rgba(0, 100, 0, 0.8)"
            to="../Exercises/Level-01/fizzbuzz"
          />
          <Button
            text="ft_putstr"
            shadowColor="rgba(0, 0, 139, 0.8)"
            to="../Exercises/Level-01/ftputstr"
          />
          <Button
            text="ft_strcpy"
            shadowColor="rgba(139, 139, 0, 0.8)"
            to="../Exercises/Level-01/ftstrcpy"
          />
        </S.containerButao>
        <S.containerButao>
          <Button
            text="ft_strlen"
            shadowColor="rgba(255, 0, 0, 0.8)"
            to="../Exercises/Level-01/ftstrlen"
          />
          <Button
            text="ft_swap"
            shadowColor="rgba(0, 100, 0, 0.8)"
            to="../Exercises/Level-01/ftswap"
          />
          <Button
            text="repeat_alpha"
            shadowColor="rgba(0, 0, 139, 0.8)"
            to="../Exercises/Level-01/repeatAlpha"
          />
          <Button
            text="rev_print"
            shadowColor="rgba(139, 139, 0, 0.8)"
            to="../Exercises/Level-01/revPrint"
          />
        </S.containerButao>
        <S.containerButao>
          <Button
            text="rot_13"
            shadowColor="rgba(255, 0, 0, 0.8)"
            to="../Exercises/Level-01/rot13"
          />
          <Button
            text="rotone"
            shadowColor="rgba(0, 100, 0, 0.8)"
            to="../Exercises/Level-01/rotone"
          />
          <Button
            text="search_and_replace"
            shadowColor="rgba(0, 0, 139, 0.8)"
            to="../Exercises/Level-01/search"
          />
          <Button
            text="ulstr"
            shadowColor="rgba(139, 139, 0, 0.8)"
            to="../Exercises/Level-01/ulstr"
          />
        </S.containerButao>
      </S.ContainerExercises>
      <Footer />
    </S.ContainerMain>
  )
}

export default MenuLevel01