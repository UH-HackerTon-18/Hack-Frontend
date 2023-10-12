import color from 'styles/color';
import styled from 'styled-components';

export const DetailTemplate = styled.div`
margin-top: 30px;
width: 100%;
display: flex;
justify-content: center;
`

export const AvatarDetailWrapper = styled.div`
  padding-left: 50px;
  padding-right: 50px;
  padding-bottom: 30px;
  background-color: ${color.white[100]};
  height: auto;
  width: 600px;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
`;

export const imgboxWrapper = styled.div`
    margin-top: 50px;
    width: 100%;
    display: flex;
    justify-content: center;
    img{
        width:100%;
    height:100%;
    object-fit:cover;
    }
`

export const imgWrapper = styled.div`
    overflow: hidden;
    border-radius: 5px;
    width: 360px;
    height: 360px;
    justify-content: center;
    align-items: center;
`

export const CategoryWrapper = styled.div`
display: flex;
flex-direction: row;

`

export const CategoryTitle = styled.div`
font-weight: 800;
font-size: 18px;
width: 16%;
`

export const CategoryData = styled.div`
font-weight: 400;
color: ${color.gray[300]};
`
export const subTitle = styled.div`
margin-top: 60px;
margin-bottom: 30px;
font-weight: 800;
font-size: 22px;
`

export const CategoryListWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem 0;
`

export const ButtonListWrapper = styled.div`   
    margin-top: 80px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 0.6rem;
`

