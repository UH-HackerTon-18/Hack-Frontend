import styled, { keyframes } from 'styled-components';

export const template = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

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
  font-weight: 900;
`;

export const BouncingChar = styled.span`
  animation: ${bounce} 1.2s linear infinite;
  animation-delay: ${(props) => props.delay}s;
`;
