import React from "react";
import { Img, H1, SectionStyle} from './styles'

const SectionHome = () => {
    return(
        <>
        <SectionStyle>
          <span>
             <Img src="img/C.jpg" alt="library C" />
          </span>
           <H1>Explore the C language, unveiling the transformative power of its libraries. Every line of code, a journey in pursuit of excellence in programming!</H1>
        </SectionStyle>

        </>
    )
}

export default SectionHome