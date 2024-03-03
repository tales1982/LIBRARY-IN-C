import React from 'react'
import Header from '../../Components/Header'
import * as S from './styles'

const HeaderFile = () => {
  return (
    <>
      <Header />
      <S.ContaineHeadeFile>
        <ol>
          <li>
            <h3>1° Introduction:</h3>
          </li>
          <li>Explanation of what headers are in C.</li>
          <li>Importance of headers in C development.</li>

          <li>
            <h3>2° Structure of a Header:</h3>
          </li>
          <li>
            Declaration of preprocessor directives, such as #include and
            #define.
          </li>
          <li>Organization and best practices in header structure.</li>
          <li>
            <h3>Functions and Prototypes:</h3>
          </li>
          <li>Declaration of functions and prototypes in the header.</li>
          <li>Examples of how to create and organize prototypes.</li>
          <li>
            <h3>Macros and Constants:</h3>
          </li>
          <li>Use of #define to create macros and constants.</li>
          <li>Examples of useful macros in headers.</li>
          <li>
            <h3>Include Guards:</h3>
          </li>
          <li>
            Explanation of the use of include guards (#ifndef, #define, #endif)
            to prevent multiple inclusions.
          </li>
          <li>
            <h3>Practical Examples:</h3>
          </li>
          <li>
            Demonstration of headers in standard libraries like{' '}
            <code>&lt;stdio.h&gt;</code> and <code>&lt;stdlib.h&gt;</code>.
          </li>
          <li>Creation of a simple custom header example.</li>
          <li>
            <h3>Best Practices and Conventions</h3>
          </li>
          <li>Tips on header names.</li>
          <li>Avoiding excessive logic in headers.</li>
          <li>
            <h3>References:</h3>
          </li>
          <li>Recommendations for additional reading.</li>
        </ol>
      </S.ContaineHeadeFile>
    </>
  )
}

export default HeaderFile
