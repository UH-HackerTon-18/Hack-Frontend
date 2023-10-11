import color from 'styles/color';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  background-color: ${color.gray[100]};
`;

export const AnswerWrapper = styled.div`
  width: 60%;
  min-height: 91vh;
  margin: 0 auto;
  padding: 38px 0 72px;
`;

export const MainTitleWrapper = styled.div`
  border-radius: 10px;
  background: #fff;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
  width: 100%;
  height: 18vh;
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
  font-weight: 800;
`;

export const Title2 = styled.div`
  font-size: 1.35rem;
  font-weight: 600;
  margin-top: 0.65rem;
  margin-bottom: 0.5rem;
`;

export const TextTitle = styled.div`
  width: 100%;
  height: 80%;
`;

export const SubTitle = styled.div`
  font-size: 1.125rem;
`;

export const SubTitle2 = styled.div`
  font-size: 1rem;
  color: ${color.gray[300]};
`;

export const WorldTypeWrapper = styled.div`
  width: 100%;
  height: 30.5vh;
  flex-shrink: 0;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.25);
  margin-top: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const WorldTypeBox = styled.div`
  width: 80%;
  height: 28vh;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
`;

export const WorldTypeTitle = styled.div`
  width: 100%;
  height: 5vh;
  border-bottom: 1px solid black;
  display: flex;
  align-items: center;
  font-size: 1.3rem;
  padding-bottom: 0.5rem;
  font-weight: 600;
`;

export const Star = styled.span`
  margin: 3.5px 0 0 2px;
  color: red;
`;

export const WorldTextInputWrapper = styled.div`
  width: 100%;
  margin-top: 10px;
  display: flex;
  align-items: flex-end;
`;
export const WorldTextInputWrapper2 = styled.div`
  width: 100%;
  margin-top: 10px;
  display: flex;
  align-items: flex-end;
`;

export const InputText = styled.textarea`
  width: 100%;
  height: 15vh;
  border: 1px solid black;
  border-radius: 5px;
  resize: none;
  padding: 10px;
`;

export const InputText2 = styled.textarea`
  width: 100%;
  height: 2vh;
  border: 1px solid black;
  border-radius: 5px;
  resize: none;
  padding: 10px;
`;

export const PlusTextWrapper = styled.div`
  width: 100%;
  height: 49px;
  flex-shrink: 0;
  margin-top: 18px;
  border-radius: 10px;
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
`;

export const PlusText = styled.div`
  width: 80%;
  min-height: 4vh;
  margin: 0 auto;
  display: flex;
  align-items: center;
`;

export const PlusImg = styled.img`
  width: 15px;
  height: 15px;
  cursor: pointer;
`;

export const Option = styled.div`
  margin-left: 5px;
`;

export const CharacterInfo = styled.div`
  width: 100%;
  height: 1445px;
  flex-shrink: 0;
  border-radius: 10px;
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.25);
  margin-top: 47px;
  background-color: white;
`;

export const CharacterMainTitleWrapper = styled.div`
  width: 100%;
  height: 13vh;
`;

export const CharacterTitle = styled.div`
  width: 80%;
  height: 12vh;
  margin: 0 auto;
  border-bottom: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const GenderWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  height: 10vh;
  display: flex;
  align-items: center;
  margin-top: 32px;
`;

export const GenderWrapper2 = styled.div`
  width: 80%;
  margin: 0 auto;
  height: 15vh;
  display: flex;
  align-items: center;
`;
export const GenderWrapper4 = styled.div`
  width: 80%;
  margin: 0 auto;
  height: 15vh;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`;

export const GenderWrapper3 = styled.div`
  width: 80%;
  margin: 0 auto;
  height: 30vh;
  display: flex;
  flex-direction: column;
`;

export const TextSubTitle = styled.div`
  font-weight: 600;
`;

export const TextSubTitle2 = styled.div`
  font-weight: 600;
  margin-top: 20px;
`;

export const optionBox = styled.div`
  margin: 10px 0 0 10px;
`;

export const StyledRadio = styled.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border: 2px solid #000;
  border-radius: 0;
  width: 13px;
  height: 13px;
  display: inline-block;
  margin-right: 8px;
  cursor: pointer;

  &:checked {
    background-color: black;
  }
`;

export const Input = styled.input`
  border: 1px solid black;
  margin-top: 10px;
  margin-left: 10px;
  width: 50px;
  min-height: 18px;
  padding: 5px;
`;

export const Input2 = styled.input`
  border-bottom: 1px solid black;
  padding-bottom: 3px;
  width: 60px;
  text-align: center;
`;

export const ButtonWrapper = styled.div`
  width: 80%;
  height: 10vh;
  margin: 0 auto;
  margin-top: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.div`
  width: 450px;
  height: 60px;
  flex-shrink: 0;
  border-radius: 10px;
  background: #272727;
  color: white;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    background-color: black;
  }
`;
