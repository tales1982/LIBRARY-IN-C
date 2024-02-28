import styled from "styled-components";
import { Colors, Fonts } from "../../globalStyles";

export const SectionStyle = styled.section`
display: flex;
flex-direction: column;
align-items: center;
`

export const Img = styled.img`
height: 600px;
border-radius: 50%;
margin-top: 50px;
`

export const H1 = styled.h1`
margin-top: 50px;
font-size: ${Fonts.fontDestaque};
color: ${Colors.textDestac};
`