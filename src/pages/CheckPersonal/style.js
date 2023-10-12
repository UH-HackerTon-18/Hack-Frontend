import { styled } from 'styled-components';
import color from 'styles/color';

export const Container = styled.div`
  width: 60%;
  min-height: 90vh;
  flex-shrink: 0;
  margin: 0 auto;
  margin-top: 30px;
  margin-bottom: 80px;
  border-radius: 10px;
  background-color: white;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
`;

export const GenerateBox = styled.div`
  width: 80%;
  min-height: 95vh;
  margin: 0 auto;
  padding-top: 31px;
  background-color: white;
`;

export const TitleWrapper = styled.div`
  width: 100%;
  height: 82px;
  border-bottom: 1px solid black;
`;

export const AvartarTitle = styled.div`
  font-size: 28px;
  font-weight: 900;
`;

export const AvartarSubTitle = styled.div`
  color: ${color.gray[300]};
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  margin-top: 5px;
  line-height: normal;
`;

export const CharacterMapWrapper = styled.div`
  width: 100%;
  height: 60vh;
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const CharacterBox = styled.div`
  width: 100%;
  height: 10.5vh;
  border-radius: 5px;
  background: ${color.white};
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ButtonBox = styled.div`
  width: 100%;
  min-height: 17vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
`;

export const CharacterWrapper = styled.div`
  width: 94%;
  min-height: 8vh;
  display: flex;
  justify-content: space-between;
`;

export const CharacterImgBox = styled.div`
  width: 30%;
  min-height: 63px;
  display: flex;
  justify-content: space-between;
`;

export const CharacterImg = styled.img`
  width: 3.7rem;
  height: 3.9rem;
  border: 1px solid black;
  border-radius: 5px;
`;

export const CharacterName = styled.div`
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 63px;
  font-size: 18px;
  font-weight: 600;
`;

export const OptionTag = styled.div`
  width: 10%;
  min-height: 63px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledRadio = styled.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border: 1px solid #000;
  border-radius: 0;
  width: 18px;
  height: 18px;
  display: inline-block;
  margin-right: 8px;
  cursor: pointer;
  border-radius: 3px;

  &:checked {
    background-color: black;
  }
`;
