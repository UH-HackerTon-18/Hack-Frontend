import React from 'react';
import * as S from './style';
import Logo from 'assets/mirror.svg';
import Button from '../../components/common/Button';
import MainPageImg from 'assets/Rectangle.svg';

const LandingPage = () => {
  return (
    <S.Container>
      <S.TitleWrapper>
        <S.TitleBox>
          <S.ContentBox>
            <S.Content>
              <S.Title>
                <S.Img src={Logo} alt='logo' />
                <S.SubTitle>나만의 아바타를 만들고, 공유해보세요!</S.SubTitle>
              </S.Title>
            </S.Content>
            <S.ButtonWrapper>
              <Button
                backgroundColor={'black'}
                color={'white'}
                width={265}
                height={55}
                borderRadius={10}
                border={'none'}
                fontSize={19}
              >
                아바타 만들러 가기
              </Button>
            </S.ButtonWrapper>
          </S.ContentBox>
        </S.TitleBox>
        <S.ImgBox>
          <img src={MainPageImg} alt='mainImg' />
        </S.ImgBox>
      </S.TitleWrapper>
    </S.Container>
  );
};

export default LandingPage;
