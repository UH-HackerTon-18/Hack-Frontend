import styled from 'styled-components';
import color from 'styles/color';


export const Button = styled.button`
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  background-color: ${props => props.backgroundColor};
  border: ${props => props.border};
  font-size: ${props => props.fontSize}px;
  color: ${props => props.color};
  border-radius: ${props => props.borderRadius}px;
  font-weight: ${props => props.fontWeight};
  float: ${props => props.float};
  margin: ${props => props.margin};
  outline: none;
  cursor: pointer;
`;

