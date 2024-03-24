import React from 'react'
import Header from '../../Components/Header'
import * as S from './styles'
import Footer from '../../Components/Footer'

const Makefile = () => {
  return (
    <>
      <S.containerMakefile>
        <Header />
        <S.sectionDescrible>
          <S.H1>Makefile Overview:</S.H1>
          <S.P>
            A Makefile is a special file used in Unix-based operating systems to
            automate the process of building and compiling programs. It consists
            of a set of rules and dependencies that specify how the program
            should be built from its source code. The make utility reads the
            Makefile and executes the necessary commands to build the program.
          </S.P>
          <br />
          <S.P>
            Makefiles are particularly useful in managing large software
            projects with multiple source files, dependencies, and complex build
            processes. They help ensure that only the necessary parts of the
            program are recompiled when changes are made, improving efficiency.
          </S.P>
          <S.H2>Description of the Provided Makefile:</S.H2>
          <S.Article>
            <span>SRC = ft_atoi.c \</span>
            <S.SpanTab> ft_bzero.c \</S.SpanTab>
            <S.SpanTab> ft_calloc.c \</S.SpanTab>
            <S.SpanTab> ft_isalnum.c \</S.SpanTab>
            <S.SpanTab> ft_isalpha.c \</S.SpanTab>
            <S.SpanTab> ft_isascii.c \</S.SpanTab>
            <S.SpanTab> ft_isdigit.c \</S.SpanTab>
            <S.SpanTab> ft_isprint.c \</S.SpanTab>
            <S.SpanTab> ft_memchr.c \</S.SpanTab>
            <S.SpanTab> ft_memcmp.c \</S.SpanTab>
            <S.SpanTab> ft_memcpy.c \</S.SpanTab>
            <S.SpanTab> ft_memmove.c \</S.SpanTab>
            <S.SpanTab> ft_memset.c \</S.SpanTab>
            <S.SpanTab> ft_strchr.c \</S.SpanTab>
            <S.SpanTab> ft_strdup.c \</S.SpanTab>
            <S.SpanTab> ft_strlcat.c \</S.SpanTab>
            <S.SpanTab> ft_strlcpy.c \</S.SpanTab>
            <S.SpanTab> ft_strlen.c \</S.SpanTab>
            <S.SpanTab> ft_strncmp.c \</S.SpanTab>
            <S.SpanTab> ft_strnstr.c \</S.SpanTab>
            <S.SpanTab> ft_strrchr.c \</S.SpanTab>
            <S.SpanTab> ft_tolower.c \</S.SpanTab>
            <S.SpanTab> ft_toupper.c</S.SpanTab>
            <br />
            <S.SpanL>
              NAME
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;=&nbsp;&nbsp;&nbsp;libft.a
            </S.SpanL>
            <S.SpanL>
              OBJS &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; =&nbsp;&nbsp;&nbsp;
              {'${SRC:.c=.o}'}
            </S.SpanL>
            <S.SpanL>
              CC&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;=&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;cc
            </S.SpanL>
            <S.SpanL>
              RM&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              = &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;rm -f
            </S.SpanL>

            <S.SpanL>
              CFLAGS &nbsp;&nbsp;&nbsp;= &nbsp;&nbsp;&nbsp;-Wall -Wextra -Werror
            </S.SpanL>

            <S.SpanL>.c.o :</S.SpanL>
            <S.SpanTab2>
              {' '}
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <S.TextGreen>{'@ ${CC} ${CFLAGS} -g -c $< -o ${<:.c=.o}'}</S.TextGreen>
            </S.SpanTab2>
            <S.SpanL><S.TextGreen>{'$( NAME ): ${OBJS}'}</S.TextGreen></S.SpanL>
            <S.SpanTab2>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<S.TextGreen>{'@ ar rcs ${NAME} ${OBJS}'}</S.TextGreen>
            </S.SpanTab2>

            <S.SpanL>all: <S.TextGreen>{'${NAME}'}</S.TextGreen></S.SpanL>

            <S.SpanL>fclean:</S.SpanL>
            <S.SpanTab2>
              {' '}
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<S.TextGreen>@ ${'{RM} ${NAME}'}</S.TextGreen>
            </S.SpanTab2>
            <span>re: fclean all</span>
          </S.Article>
          <S.Ol>
            <S.H2>Explanation:</S.H2>
            <S.Li>1° - SRC: List of source files (.c files) forming the library.</S.Li>
            <S.Li>2° - NAME: Name of the resulting library.</S.Li>
            <S.Li>3° - OBJS: List of object files derived from source files.</S.Li>
            <S.Li>4° - CC: Compiler command.</S.Li>
            <S.Li>5° - RM: Command for removing files.</S.Li>
            <S.Li>
              6° - CFLAGS: Compilation flags, including -Wall, -Wextra, and -Werror
              for enabling common warnings and treating warnings as errors.
            </S.Li>
            <S.Li>
              7° - .c.o Rule: A pattern rule for compiling .c files into object
              files.
            </S.Li>
            <S.Li>
              8° - $(NAME) Rule: Specifies how to build the library. It depends on
              the object files and uses the ar command to create the static
              library.
            </S.Li>
            <S.Li>9° - all Rule: A shortcut rule to build the library.</S.Li>
            <S.Li>10° - clean Rule: Removes object files.</S.Li>
            <S.Li>
              11° - fclean Rule: Removes object files and the resulting library.
            </S.Li>
            <S.Li>
              12° - re Rule: Rebuilds the library from scratch by performing a fclean
              followed by an all.
            </S.Li>
          </S.Ol>
          <br />
          <S.Ol>
          <S.H2>How to Use:</S.H2>
            <S.Li>° Run make to build the library.</S.Li>
            <S.Li>° Run make clean to remove object files.</S.Li>
            <S.Li>° Run make fclean to remove object files and the library.</S.Li>
            <S.Li>° Run make re to rebuild the library from scratch.</S.Li>
          </S.Ol>
          <S.P>This Makefile is designed for a C library (libft.a) and follows common conventions. The all rule is the default target, so simply running make will build the library. Adjustments can be made to include additional rules or accommodate specific project requirements.</S.P>
        </S.sectionDescrible>
        <br />
        <Footer/>
      </S.containerMakefile>
    </>
  )
}

export default Makefile
