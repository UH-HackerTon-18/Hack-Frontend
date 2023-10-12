import styled, { keyframes }from 'styled-components';
import color from 'styles/color';

export const template = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 100vh;
`

export const bounce = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
`;

export const BouncingText = styled.div`
  display: flex;
  font-size: 30px;
  font-weight:900;
`;

export const BouncingChar = styled.span`
  animation: ${bounce} 1.2s linear infinite;
  animation-delay: ${props => props.delay}s;
`;
=======
import { styled } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 91vh;
`;

export const TitleWrapper = styled.div`
  width: 85%;
  min-height: 91vh;
  margin: 0 auto;
  display: flex;
`;

export const TitleBox = styled.div`
  width: 40%;
  min-height: 91vh;
  display: flex;
  align-items: center;
`;

export const ImgBox = styled.div`
  width: 60%;
  min-height: 91vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContentBox = styled.div`
  width: 100%;
  height: 35%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 10vh;
`;

export const Img = styled.img`
  width: 260px;
`;

export const SubTitle = styled.div`
  color: #000;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const Content = styled.div`
  width: 100%;
  height: 12vh;
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  height: 9vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
