import styled from 'styled-components';
import color from 'styles/color';

export const TitleBoxWrapper = styled.div`
display: flex;
flex-direction: column;
margin-top: 20px;
`

export const TitleWrapper = styled.div`
  font-weight: 900;
  font-size: 24px;
`
export const SubTitleWrapper = styled.div`
  font-weight: 600;
  color: ${color.gray[300]};
`

export const Line = styled.div`
margin-top: 10px;
background-color: ${color.black[200]};
width: 100%;
height: 2px;
`
