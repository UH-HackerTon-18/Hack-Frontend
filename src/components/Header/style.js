import color from 'styles/color';
import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  width: 100%;
  min-height: 9vh;
  border-bottom: 1px solid ${color[200]};
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
  width: 912px;
  min-height: 9vh;
  margin-left: 5.5%;
`;
