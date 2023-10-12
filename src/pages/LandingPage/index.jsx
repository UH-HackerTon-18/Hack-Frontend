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
};

export default LandingPage;