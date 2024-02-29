import React from "react";
import { Img, H1, SectionStyle, Span} from './styles'

const SectionHome = () => {
    return(
        <>
        <SectionStyle>
          <Span>
             <Img src="img/C.jpg" alt="library C" />
          </Span>
           <H1>Explore the C language, unveiling the transformative power of its libraries. Every line of code, a journey in pursuit of excellence in programming!</H1>
        </SectionStyle>

        </>
    )
}

export default SectionHome