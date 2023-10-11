import React from 'react';
import * as S from './style';
import plusIcon from 'assets/plusBtn.svg';

const CreateAvartar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

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
              <S.InputText />
            </S.WorldTextInputWrapper>
          </S.WorldTypeBox>
        </S.WorldTypeWrapper>
        {isOpen ? (
          <S.CharacterInfo>
            <S.CharacterMainTitleWrapper>
              <S.CharacterTitle>sdf</S.CharacterTitle>
            </S.CharacterMainTitleWrapper>
          </S.CharacterInfo>
        ) : (
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
        )}
      </S.AnswerWrapper>
    </S.Container>
  );
};

export default CreateAvartar;
