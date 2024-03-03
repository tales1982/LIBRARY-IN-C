import React from 'react'
import * as S from './styles'
import Header from '../../Components/Header/index'
import Button from '../../Components/Button'
import Footer from '../../Components/Footer/index'

const Libft = () => {
  return (
    <>
      <S.Div>
        <Header />
        <S.H1>Libft</S.H1>
        <S.ContainerButton>
          <S.ContainerLibft>
            <Button text="ft_isalpha" shadowColor="rgba(255, 0, 0, 0.8)" />
            <Button text="ft_isdigit.c" shadowColor="rgba(0, 100, 0, 0.8)" />
            <Button text="ft_isalnum.c" shadowColor="rgba(0, 0, 139, 0.8)" />
            <Button text="ft_isascii.c" shadowColor="rgba(139, 139, 0, 0.8)" />
            <Button text="ft_isprint.c" shadowColor="rgba(139, 0, 139, 0.8)" />
            <Button text="ft_strlen.c" shadowColor="rgba(0, 191, 255, 0.8)" />
            <Button text="ft_memset.c" shadowColor="rgba(144, 238, 144, 0.8)" />
            <Button text="ft_bzero.c" shadowColor="rgba(255, 165, 0, 0.8)" />
            <Button text="ft_memcpy.c" shadowColor="rgba(255, 182, 193, 0.8)" />
            <Button text="ft_memmove.c" shadowColor="rgba(105, 105, 105, 0.8)" />
            <Button text="ft_strlcpy.c" shadowColor="rgba(255, 0, 0, 0.8)" />
            <Button text="ft_strlcat.c" shadowColor="rgba(0, 100, 0, 0.8)" />
            <Button text="ft_toupper.c" shadowColor="rgba(0, 0, 139, 0.8)" />
            <Button text="ft_tolower.c" shadowColor="rgba(139, 139, 0, 0.8)" />
            <Button text="ft_strchr.c" shadowColor="rgba(139, 0, 139, 0.8)" />
            <Button text="ft_strrchr.c" shadowColor="rgba(0, 191, 255, 0.8)" />
            <Button text="ft_strncmp.c" shadowColor="rgba(144, 238, 144, 0.8)" />
            <Button text="ft_memchr.c" shadowColor="rgba(255, 165, 0, 0.8)" />
            <Button text="ft_memcmp.c" shadowColor="rgba(144, 238, 144, 0.8)" />
            <Button text="ft_strnstr.c" shadowColor="rgba(255, 165, 0, 0.8)" />
            <Button text="ft_atoi.c" shadowColor="rgba(255, 182, 193, 0.8)" />
            <Button text="ft_calloc.c" shadowColor="rgba(139, 0, 139, 0.8)" />
            <Button text="ft_strldup.c" shadowColor="rgba(0, 191, 255, 0.8)" />
            <Button text="ft_substr.c" shadowColor="rgba(144, 238, 144, 0.8)" />
          </S.ContainerLibft>
        </S.ContainerButton>
      <Footer />
      </S.Div>
    </>
  )
}

export default Libft
