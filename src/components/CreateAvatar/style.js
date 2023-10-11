import color from 'styles/color';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  background-color: ${color[100]};
  height: 100%;
`;

export const AnswerWrapper = styled.div`
  width: 60%;
  min-height: 91vh;
  margin: 0 auto;
  padding-top: 38px;
`;

export const MainTitleWrapper = styled.div`
  border-radius: 10px;
  background: #fff;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
  width: 100%;
  height: 18vh;
  /* margin-top: 38px; */
  flex-shrink: 0;
`;

export const MainTitle = styled.div`
  width: 80%;
  height: 16vh;
  display: flex;
  margin: 0 auto;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  gap: 0.6rem;
`;

export const Title = styled.div`
  font-size: 1.8rem;
`;

export const SubTitle = styled.div`
  font-size: 1.125rem;
`;
