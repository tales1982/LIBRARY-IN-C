import React from 'react'
import Header from '../../Components/Header'
import * as S from './styles'

const Struct = () => {
  return (
    <>
      <Header />
      <S.containerStruct>
        <S.sectionDescrible>
          <S.H1>Defining Structures:</S.H1>
          <S.P>
            Before creating structure variables, it is necessary to define their
            data type. The struct keyword is used to define a structure.
          </S.P>
          <S.Article>
            <span>
              <S.TextBlue>struct</S.TextBlue>{' '}
              <S.TextYellow>Person</S.TextYellow> {'{'}
            </span>
            <span>
              <S.TextRed>&nbsp;&nbsp;&nbsp;char</S.TextRed> name[<S.TextRed>50</S.TextRed>]
            </span>
            <span>
              <S.TextRed>&nbsp;&nbsp;&nbsp;int</S.TextRed> citNo;
            </span>
            <span>
              <S.TextRed>&nbsp;&nbsp;&nbsp;float</S.TextRed> salary;
            </span>
            <span>{'}'}</span>
          </S.Article>
          <S.H2>Creating Structure Variables:</S.H2>
          <S.P>
            When a structure type is declared, no memory is allocated. To
            allocate memory of a given structure type and work with it, it is
            necessary to create variables.
          </S.P>
          <S.Article>
            <span>
              <S.TextBlue>struct</S.TextBlue>{' '}
              <S.TextYellow>Person person1</S.TextYellow> ,{' '}
              <S.TextYellow>person2</S.TextYellow> ,{' '}
              <S.TextYellow>p</S.TextYellow>[20];
            </span>
          </S.Article>
          <S.H2>Accessing Structure Members:</S.H2>
          <S.P>
            There are two operators used for accessing members of a structure: .
            (member operator) and -{'>'} (structure pointer operator).{' '}
            <S.TextRed2>Example of access: person2.salary</S.TextRed2>
          </S.P>
          <S.Article>
            <span>
              #<S.TextBlue>include</S.TextBlue>{' '}
              <S.TextGreen>
                {'<'}stdio.h{'>'}
              </S.TextGreen>
            </span>
            <span>
              {' '}
              #<S.TextBlue>include</S.TextBlue>{' '}
              <S.TextGreen>
                {'<'}string.h{'>'}
              </S.TextGreen>
            </span>
            <span>
              <br />
            </span>
            <span>
              <S.TextBlue>struct</S.TextBlue>{' '}
              <S.TextYellow>Person</S.TextYellow> {'{'}
            </span>
            <span>
              <S.TextRed>&nbsp;&nbsp;&nbsp;char</S.TextRed> name[<S.TextRed>50</S.TextRed>]
            </span>
            <span>
              <S.TextRed>&nbsp;&nbsp;&nbsp;int</S.TextRed> citNo;
            </span>
            <span>
              <S.TextRed>&nbsp;&nbsp;&nbsp;float</S.TextRed> salary;
            </span>
            <span>{'}'} person1;</span>
            <br />
            <span>
              <S.TextRed>&nbsp;&nbsp;&nbsp;int</S.TextRed> <S.TextRed2>maim</S.TextRed2>
              {' ( )'}
              {' {'}
            </span>
            <span>
              <S.TextYellow>&nbsp;&nbsp;&nbsp;strcpy</S.TextYellow>
              {'('} person1.name,
              <S.TextGreen>{' "Greoge Orwell "'}</S.TextGreen>
              {' )'};
            </span>
            <span>
            &nbsp;&nbsp;&nbsp;person1.cittNo = <S.TextRed>1984</S.TextRed>;
            </span>
            <span>
            &nbsp;&nbsp;&nbsp;person1.salary = <S.TextRed>3500</S.TextRed>;
            </span>
            <br />
            <span>
              <S.TextYellow>&nbsp;&nbsp;&nbsp;printf</S.TextYellow>
              {'('}
              <S.TextGreen>{'" Name: %s\\n "'}</S.TextGreen>, person1.name{')'};
            </span>
            <span>
              <S.TextYellow>&nbsp;&nbsp;&nbsp;printf</S.TextYellow>
              {'('}
              <S.TextGreen>{'" Citizenship No.: %d\\n "'}</S.TextGreen>,
              person1.citNo{')'};
            </span>
            <span>
              <S.TextYellow>&nbsp;&nbsp;&nbsp;printf</S.TextYellow>
              {'('}
              <S.TextGreen>{'" Salary: %.2f "'}</S.TextGreen>, person1.salary
              {')'};
            </span>
            <br />
            <span>
              <S.TextBlue>&nbsp;&nbsp;&nbsp;return</S.TextBlue>
              <S.TextRed2>
                {' ('}0{')'}
              </S.TextRed2>
              ;
            </span>
          </S.Article>
          <S.H2>Using typedef:</S.H2>
          <S.P>
            The {'`'}typedef{'`'} keyword is used to create an alias name for
            data types, often used with structures to simplify the syntax of
            declaring variables.
          </S.P>
          <S.Article>
            <span>
              <S.TextBlue>typedef struct </S.TextBlue>
              <S.TextYellow>Distance</S.TextYellow> {'{'}
            </span>
            <span>
              <S.TextRed>&nbsp;&nbsp;&nbsp;int</S.TextRed> feet;
            </span>
            <span>
              <S.TextRed>&nbsp;&nbsp;&nbsp;float</S.TextRed> inch;
            </span>
            <span>{'}'} distances;</span>
            <br />
            <span>distances d1, d2;</span>
          </S.Article>
          <S.H2>Nested Structures:</S.H2>
          <S.P>
            It is possible to create structures within other structures.
          </S.P>
          <S.Article>
            <span>
              <S.TextBlue>struct</S.TextBlue>{' '}
              <S.TextYellow>complex</S.TextYellow>
              {' {'}
            </span>
            <span>
              <S.TextRed>&nbsp;&nbsp;&nbsp;int</S.TextRed> imag;
            </span>
            <span>
              <S.TextRed>&nbsp;&nbsp;&nbsp;float</S.TextRed> real;
            </span>
            <span>{'}'};</span>
            <br />
            <span>
              <S.TextBlue>struct</S.TextBlue>{' '}
              <S.TextYellow>number</S.TextYellow>
              {' {'}
            </span>
            <span>
              <S.TextBlue>&nbsp;&nbsp;&nbsp;struct</S.TextBlue>{' '}
              <S.TextYellow>complex comp</S.TextYellow>;
            </span>
            <span>
              <S.TextRed>&nbsp;&nbsp;&nbsp;int</S.TextRed> intergers;
            </span>
            <span>{'}'} num1, num2;</span>
          </S.Article>
          <S.H2>Why Use Structs in C?</S.H2>
          <S.P>
          Structs in C allow grouping related information under a single structure, facilitating the storage and manipulation of data. For example, when dealing with personal information, it is more efficient to have a single Person structure than several separate variables for each attribute.
          </S.P>
          <br />
          <br />
        </S.sectionDescrible>
      </S.containerStruct>
    </>
  )
}

export default Struct
