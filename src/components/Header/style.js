import color from 'styles/color';
import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  position: sticky;
  width: 100%;
  min-height: 9vh;
  border-bottom: 1px solid ${color.gray[200]};
  background-color: white;
  position: fixed;
`;

export const HeaderLogoWrapper = styled.div`
  width: 121px;
  min-height: 9vh;
  display: flex;
  align-items: center;
`;

export const HeaderTextWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  min-height: 9vh;
  display: flex;
`;

export const NavigateTextWrapper = styled.div`
  width: 870px;
  min-height: 9vh;
  margin-left: 7.5%;
  display: flex;
`;

export const ImgLogo = styled.img`
  height: 4vh;
  cursor: pointer;
`;

export const TextBox = styled.div`
  width: 16%;
  min-height: 9vh;
  display: flex;
  align-items: center;
  font-weight: 600;
`;

export const Text = styled.div`
  cursor: pointer;
  font-size: 17px;
`;
