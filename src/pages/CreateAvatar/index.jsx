import React from 'react';
import * as S from './style';
import plusIcon from 'assets/plusBtn.svg';

const CreateAvartar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const [selectedGender, setSelectedGender] = React.useState('');

  const handleGenderChange = (event) => {
    setSelectedGender(event.target.id);
  };

  return (
    <S.Container>
      <S.AnswerWrapper>
        <S.MainTitleWrapper>
          <S.MainTitle>
            <S.Title>아바타 생성</S.Title>
            <>자신이 원하는 아바타를 만들어보세요!</>
          </S.MainTitle>
        </S.MainTitleWrapper>
        <S.WorldTypeWrapper>
          <S.WorldTypeBox>
            <S.WorldTypeTitle>
              세계관 작성<S.Star>*</S.Star>
            </S.WorldTypeTitle>
            <S.WorldTextInputWrapper>
              <S.InputText type='text' />
            </S.WorldTextInputWrapper>
          </S.WorldTypeBox>
        </S.WorldTypeWrapper>
        {isOpen ? (
          <S.CharacterInfo>
            <S.CharacterMainTitleWrapper>
              <S.CharacterTitle>
                <S.TextTitle>
                  <S.Title2>캐릭터 상세 설정 - 선택</S.Title2>
                  <S.SubTitle2>모든 옵션들은 전부 선택사항 이므로 다 작성하지 않아도 됩니다</S.SubTitle2>
                </S.TextTitle>
              </S.CharacterTitle>
              <S.GenderWrapper>
                <div>
                  <S.TextSubTitle>성별</S.TextSubTitle>
                  <S.optionBox>
                    <span style={{ marginRight: '5px' }}>남성</span>
                    <S.StyledRadio type='radio' name='ratio' />
                    <span style={{ marginRight: '5px', marginLeft: '10px' }}>여성</span>
                    <S.StyledRadio type='radio' name='ratio' />
                  </S.optionBox>
                </div>
              </S.GenderWrapper>
              <S.GenderWrapper2>
                <div>
                  <S.TextSubTitle>나이</S.TextSubTitle>
                  <S.Input type='number' min='1' max='100' />
                </div>
              </S.GenderWrapper2>
              <S.GenderWrapper2>
                <div>
                  <S.TextSubTitle>성별</S.TextSubTitle>
                  <S.optionBox>
                    <span style={{ marginRight: '5px' }}>인간</span>
                    <S.StyledRadio type='radio' name='ratio' id='1' onClick={handleGenderChange} />
                    <span style={{ marginRight: '5px', marginLeft: '10px' }}>인외</span>
                    <S.StyledRadio type='radio' name='ratio' id='2' onClick={handleGenderChange} />
                    <span style={{ marginRight: '5px', marginLeft: '10px' }}>이름: </span>
                    <S.Input2 type='text' />
                  </S.optionBox>
                </div>
              </S.GenderWrapper2>
              {selectedGender === '2' && (
                <S.GenderWrapper4>
                  <S.TextSubTitle2>화풍</S.TextSubTitle2>
                  <S.WorldTextInputWrapper2>
                    <S.InputText2 type='text' />
                  </S.WorldTextInputWrapper2>
                </S.GenderWrapper4>
              )}
              <S.GenderWrapper3>
                <S.TextSubTitle2>종족특성</S.TextSubTitle2>
                <S.WorldTextInputWrapper>
                  <S.InputText type='text' />
                </S.WorldTextInputWrapper>
              </S.GenderWrapper3>
              <S.GenderWrapper3>
                <S.TextSubTitle2>성격특성</S.TextSubTitle2>
                <S.WorldTextInputWrapper>
                  <S.InputText type='text' />
                </S.WorldTextInputWrapper>
              </S.GenderWrapper3>
              <S.GenderWrapper3>
                <S.TextSubTitle2>배경스토리</S.TextSubTitle2>
                <S.WorldTextInputWrapper>
                  <S.InputText type='text' />
                </S.WorldTextInputWrapper>
              </S.GenderWrapper3>
              <S.ButtonWrapper>
                <S.Button>만들기</S.Button>
              </S.ButtonWrapper>
            </S.CharacterMainTitleWrapper>
          </S.CharacterInfo>
        ) : (
          <>
            <S.PlusTextWrapper>
              <S.PlusText>
                <S.PlusImg
                  src={plusIcon}
                  alt=''
                  onClick={() => {
                    setIsOpen(true);
                  }}
                />
                <S.Option>캐릭터 상세 설정 추가</S.Option>
              </S.PlusText>
            </S.PlusTextWrapper>
            <S.ButtonWrapper>
              <S.Button>만들기</S.Button>
            </S.ButtonWrapper>
          </>
        )}
      </S.AnswerWrapper>
    </S.Container>
  );
};

export default CreateAvartar;
