import styled from "styled-components";

const ParagraphStyled = styled.p`
  font-size: ${props => props.size || '1rem'}; 
  font-weight: ${props => props.weight || 'normal'};
  color: ${props => props.color || props.theme.colors.foreground};
  text-align: ${props => props.align || "start"};
`;

export default function Paragraph({text,size,weight,color, className, align}){
    return(<ParagraphStyled size={size} weight={weight} color={color} className={className} align={align}>{text}</ParagraphStyled>);
}