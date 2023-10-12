
import React, { useState, useEffect } from 'react';
import * as S from "./style"

const LandingPage = () => {
  const text = "Loading...";
  const chars = text.split('');
  const [resetAnimation, setResetAnimation] = useState(false);

  useEffect(() => {
    const resetAnimationInterval = setInterval(() => {
      setResetAnimation(true);
      setTimeout(() => setResetAnimation(false), 100); // 딜레이 후 애니메이션 다시 시작
    }, 7000); // 애니메이션이 끝나고 다시 시작할 간격 (7000ms = 7초)

    // 초기에도 한 번 실행
    setTimeout(() => setResetAnimation(false), 100);

    return () => {
      clearInterval(resetAnimationInterval);
    };
  }, []);

  return (
    <S.template>
      <S.BouncingText>
        {chars.map((char, index) => (
          <S.BouncingChar key={index} delay={index / 10} style={{ animationPlayState: resetAnimation ? 'paused' : 'running' }}>{char}</S.BouncingChar>
        ))}
      </S.BouncingText>
    </S.template>
  )
=======
import React from 'react';
import * as S from './style';
import Logo from 'assets/mirror.svg';
import Button from '../../components/common/Button';
import MainPageImg from 'assets/Rectangle.svg';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

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
                onClick={() => {
                  navigate('/createAvartar');
                }}
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