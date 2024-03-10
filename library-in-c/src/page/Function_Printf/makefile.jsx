import React from 'react'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import * as S from './styles'

const MakefilePrintf = () => {
  return (
    <S.ContainerMain>
      <Header />
      <S.H1>Makefile Printf</S.H1>
      <S.H3>
        This Makefile is designed to build a static library named libftprintf.a
      </S.H3>
      <S.SectionInfo>
        <span>NAME = libftprintf.a</span>
        <span>LIBFTNAME = libft.a</span>
        <span>CC = cc</span>
        <span>CFLAGS = -Wall -Werror -Wextra</span>
        <span>LIBFTDIR = ./libft</span>
        <br />
        <span>SRCS = ft_printf.c \</span>
        <S.Margin>print_pointer.c \ </S.Margin>
        <S.Margin>print_unsigned.c \</S.Margin>
        <S.Margin>print_string.c \</S.Margin>
        <S.Margin>print_string.c \</S.Margin>
        <S.Margin>print_string.c \</S.Margin>
        <S.Margin>print_hex.c </S.Margin>
        <span>
          OBJS = <S.Green>$(SRCS:.c=.o)</S.Green>
        </span>
        <span>
          all: <S.Green>$(NAME)</S.Green>
        </span>
        <span>makelibft:</span>
        <S.Margin>
          <S.Green>@make -C $(LIBFTDIR)</S.Green>{' '}
        </S.Margin>
        <S.Margin>
          <S.Green>@cp $(LIBFTDIR)/$(LIBFTNAME)</S.Green>
        </S.Margin>
        <S.Margin>
          <S.Green>@mv $(LIBFTNAME) $(NAME)</S.Green>
        </S.Margin>
        <span>
          <S.Green>$(NAME):</S.Green> makelibft <S.Green>$(OBJS)</S.Green>
        </span>
        <S.Margin>
          <S.Green>@ar -r $(NAME) $(OBJS)</S.Green>
        </S.Margin>
        <span>clean:</span>
        <S.Margin>
          <S.Green>@rm -f $(OBJS)</S.Green>
        </S.Margin>
        <S.Margin>
          <S.Green>@cd $(LIBFTDIR) && make clean</S.Green>
        </S.Margin>
        <span>fclean: clean</span>
        <S.Margin>
          <S.Green>rm -f $(NAME)</S.Green>@
        </S.Margin>
        <S.Margin>
          <S.Green>@cd $(LIBFTDIR) && make fclean</S.Green>
        </S.Margin>
        <span>re: fclean all</span>
      </S.SectionInfo>
      <br />
      <S.H3>
        {"Here's"} a breakdown of its components and their functionalities:
      </S.H3>
      <S.H3>Variables:</S.H3>
      <S.P>° <S.Green>NAME: </S.Green>The name of the final static library to be created (libftprintf.a).</S.P>
      <S.P>° <S.Green>LIBFTNAME: </S.Green> The name of another static library that this project depends on (libft.a), probably providing foundational functionalities needed by ft_printf and its related functions.</S.P>
      <S.P>° <S.Green>CC: </S.Green>The C compiler to use (cc), which is a common alias for the{" system's"} default C compiler.</S.P>
      <S.P>° <S.Green>CFLAGS: </S.Green> Compiler flags to ensure strict code standards (-Wall -Werror -Wextra), enabling all warnings, treating warnings as errors, and enabling extra warnings, respectively.</S.P>
      <S.P>° <S.Green>LIBFTDIR: </S.Green>The directory where libft is located (./libft), indicating {"it's"} a subdirectory of the current project directory.</S.P>
      <S.P>° <S.Green>SRCS: </S.Green>Source files that make up the libftprintf library, including ft_printf.c and other files for printing various data types.</S.P>
      <S.P>° <S.Green>OBJS: </S.Green> Object files generated from the source files, used to create the static library</S.P>
      <S.H3>Targets:</S.H3>
      <S.P>° <S.Green>all: </S.Green>The default target, which triggers the building of the libftprintf.a library.</S.P>
      <S.P>° <S.Green>makelibft: </S.Green>A custom target that builds the libft library by invoking make in the libft directory and then copies and renames libft.a to libftprintf.a as part of the preparation process.</S.P>
      <S.P>° <S.Green>$(NAME)</S.Green>A target that depends on makelibft and the object files ($(OBJS)). It uses the ar command to archive the object files into the static library libftprintf.a.</S.P>
      <S.P>° <S.Green>clean: </S.Green>Removes the object files from the current project directory and also cleans the libft subdirectory by invoking make clean there, helping maintain a clean workspace.</S.P>
      <S.P>° <S.Green>fclean: </S.Green>Invokes the clean target and additionally removes the libftprintf.a library file. It also cleans up the libft directory more thoroughly by invoking make fclean there.</S.P>
      <S.P>° <S.Green>re: </S.Green>A convenience target that fully cleans the project with fclean and then rebuilds everything with all, useful for ensuring a clean build from scratch.
</S.P>
      <S.P>The Makefile uses common make conventions, like prefixing commands with @ to prevent them from being printed before execution, and employing automatic variables like $(NAME) and pattern rules (like $(SRCS:.c=.o)) for efficient file handling. The structure and dependencies ensure that changes in source files trigger the recompilation of only {"what's"} necessary, optimizing the build process.</S.P>
      <Footer />
    </S.ContainerMain>
  )
}
export default MakefilePrintf
