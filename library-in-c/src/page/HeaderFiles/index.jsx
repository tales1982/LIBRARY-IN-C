import React from 'react'
import Header from '../../Components/Header'
import * as S from './styles'

const HeaderFile = () => {
  return (
    <>
      <Header />
      <S.ContaineHeadeFile>
        <S.ContainerInfo>
          <S.H1>Header File</S.H1>
          <S.Ol>
            <S.Li>
              <S.H3>1° Introduction:</S.H3>
            </S.Li>
            <S.Li>Explanation of what headers are in C.</S.Li>
            <S.Li>Importance of headers in C development.</S.Li>
          </S.Ol>
          <S.Ol>
            <S.Li>
              <S.H3>2° Structure of a Header:</S.H3>
            </S.Li>
            <S.Li>
              Declaration of preprocessor directives, such as #include and
              #define.
            </S.Li>
            <S.Li>Organization and best practices in header structure.</S.Li>
          </S.Ol>
          <S.Ol>
            <S.Li>
              <S.H3>3° Functions and Prototypes:</S.H3>
            </S.Li>
            <S.Li>Declaration of functions and prototypes in the header.</S.Li>
            <S.Li>Examples of how to create and organize prototypes.</S.Li>
          </S.Ol>
          <S.Ol>
            <S.Li>
              <S.H3>4° Macros and Constants:</S.H3>
            </S.Li>
            <S.Li>Use of #define to create macros and constants.</S.Li>
            <S.Li>Examples of useful macros in headers.</S.Li>
          </S.Ol>
          <S.Ol>
            <S.Li>
              <S.H3>5° Include Guards:</S.H3>
            </S.Li>
            <S.Li>
              Explanation of the use of include guards (#ifndef, #define,
              #endif) to prevent multiple inclusions.
            </S.Li>
          </S.Ol>
          <S.Ol>
            <S.Li>
              <S.H3>6° Practical Examples:</S.H3>
            </S.Li>
            <S.Li>
              Demonstration of headers in standard libraries like{' '}
              <code>&lt;stdio.h&gt;</code> and <code>&lt;stdlib.h&gt;</code>.
            </S.Li>
            <S.Li>Creation of a simple custom header example.</S.Li>
          </S.Ol>
          <S.Ol>
            <S.Li>
              <S.H3>7° Best Practices and Conventions</S.H3>
            </S.Li>
            <S.Li>Tips on header names.</S.Li>
            <S.Li>Avoiding excessive logic in headers.</S.Li>
          </S.Ol>
          <S.Ol>
            <S.Li>
              <S.H3>8° References:</S.H3>
            </S.Li>
            <S.Li>Recommendations for additional reading.</S.Li>
          </S.Ol>
        </S.ContainerInfo>
        <S.ContainerInfo>
          <S.Code>
            <S.P>
              <S.TextGray>
                &nbsp;//****** Prevent multiple inclusions of the LIBFT_H header
                file
              </S.TextGray>
            </S.P>
            <S.P>
              <S.TextBlue>#</S.TextBlue>
              <S.TextRed>ifndef </S.TextRed> <S.TextBlue>LIBFT_H</S.TextBlue>
            </S.P>
            <S.P>
              <S.TextBlue>#</S.TextBlue>
              <S.TextRed> define </S.TextRed>
              <S.TextBlue>LIBFT_H</S.TextBlue>{' '}
            </S.P>
            <S.Span>
              <S.TextGray>
                &nbsp;/******************* LIBRARIES ********************&nbsp;/
              </S.TextGray>
            </S.Span>
            <S.Span>
              <S.TextGray>
                &nbsp;//************* Include necessary libraries
              </S.TextGray>
            </S.Span>
            <S.Span>
              <S.TextBlue>#</S.TextBlue>
              <S.TextRed> include</S.TextRed>{' '}
              <S.TextBlue>&lt;stdlib.h&gt;</S.TextBlue>
            </S.Span>
            <S.Span>
              <S.TextBlue>#</S.TextBlue> <S.TextRed> include</S.TextRed>{' '}
              <S.TextBlue>&lt;unistd.h&gt;</S.TextBlue>
            </S.Span>
            <S.Span>
              <S.TextBlue>#</S.TextBlue> <S.TextRed> include</S.TextRed>{' '}
              <S.TextBlue>&lt;stdio.h&gt;</S.TextBlue>
            </S.Span>
            <S.Span>
              <S.TextGray>
                &nbsp;/********** STRUCTURE DEFINITIONS **********&nbsp;/
              </S.TextGray>
            </S.Span>
            <S.Span>
              <S.TextBlue> typedef struct</S.TextBlue> {'{'}{' '}
            </S.Span>
            <S.Span>
              <S.TextRed>int </S.TextRed> x;
            </S.Span>
            <S.Span>
              <S.TextRed>int </S.TextRed> y;
            </S.Span>
            <S.Span>{'}'} Point ;</S.Span>
            <S.Span>
              <S.TextGray>
                &nbsp;/******** CONSTANTS AND MACROS ************&nbsp;/
              </S.TextGray>
            </S.Span>
            <S.Span>
              <S.TextBlue>#</S.TextBlue>
              <S.TextRed> define </S.TextRed>MAX_SIZE 100
            </S.Span>
            <S.Span>
              <S.TextGray>
                &nbsp;/******** FUNCTION DECLARATIONS ***********&nbsp;/
              </S.TextGray>
            </S.Span>
            <S.Span>
              <S.TextRed>int </S.TextRed>
              <S.TextRed2>ft_atoi </S.TextRed2>(
              <S.TextRed>const char</S.TextRed> *str );
            </S.Span>
            <S.Span>
              <S.TextRed>int </S.TextRed>
              <S.TextRed2>ft_isalpha</S.TextRed2> ( <S.TextRed>int </S.TextRed>{' '}
              i );
            </S.Span>
            <S.Span>
              <S.TextRed>int </S.TextRed>
              <S.TextRed2>ft_isascii</S.TextRed2> (<S.TextRed> int </S.TextRed>{' '}
              i );
            </S.Span>
            <S.Span>
              <S.TextRed>int </S.TextRed>
              <S.TextRed2>ft_isdigit</S.TextRed2> (<S.TextRed> int </S.TextRed>{' '}
              i );
            </S.Span>
            <S.Span>
              <S.TextGray>
                &nbsp;/******** ADDITIONAL FUNCTION PROTOTYPES ***&nbsp;/
              </S.TextGray>
            </S.Span>
            <S.Span>
              <S.TextRed>void </S.TextRed>
              <S.TextRed2>myFunctionAdditional</S.TextRed2> (
              <S.TextRed> void </S.TextRed>);
            </S.Span>
            <S.TextRed>
              <S.TextBlue>#</S.TextBlue>endif
            </S.TextRed>
          </S.Code>
        </S.ContainerInfo>
      </S.ContaineHeadeFile>
    </>
  )
}

export default HeaderFile
