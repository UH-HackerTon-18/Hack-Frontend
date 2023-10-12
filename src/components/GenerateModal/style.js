import { styled } from 'styled-components';

export const Container = styled.div`
  width: 40vw;
  height: 85vh;
  flex-shrink: 0;
  background-color: white;
  border-radius: 5px;
  padding: 25px;
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ModalTitle = styled.h1`
  font-size: 18px;
`;

export const TextWidth = styled.div`
  width: 100%;
  height: 8vh;
  display: flex;
  align-items: center;
  font-weight: 500;
  display: flex;
`;

export const Text = styled.div`
  margin-right: 10px;
`;

export const WhenText = styled.div`
  width: 70%;
  height: 3vh;
  flex-shrink: 0;
  border-radius: 2px;
  background: #eaecef;
  display: flex;
  align-items: center;
  padding-left: 10px;
`;
