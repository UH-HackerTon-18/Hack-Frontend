import React from 'react';
import * as S from './style';
import { Button } from 'antd';
import color from 'styles/color';

export const dummy_data = [
  {
    id: 0,
    name: '스폰지밥 1',
    imgUrl:
      'https://i.namu.wiki/i/-M6BoZmo2igm6JJaRJXJzpRPQQ9yQSJny-wzqQGxAnW4ymhuFuN8ag0t447LJKJ_MxSnOjNbym5E5CgQ_RXGhg.webp',
  },
  {
    id: 1,
    name: '스폰지밥 2',
    imgUrl:
      'https://i.namu.wiki/i/-M6BoZmo2igm6JJaRJXJzpRPQQ9yQSJny-wzqQGxAnW4ymhuFuN8ag0t447LJKJ_MxSnOjNbym5E5CgQ_RXGhg.webp',
  },
  {
    id: 2,
    name: '스폰지밥 3',
    imgUrl:
      'https://i.namu.wiki/i/-M6BoZmo2igm6JJaRJXJzpRPQQ9yQSJny-wzqQGxAnW4ymhuFuN8ag0t447LJKJ_MxSnOjNbym5E5CgQ_RXGhg.webp',
  },
  {
    id: 3,
    name: '스폰지밥 2',
    imgUrl:
      'https://i.namu.wiki/i/-M6BoZmo2igm6JJaRJXJzpRPQQ9yQSJny-wzqQGxAnW4ymhuFuN8ag0t447LJKJ_MxSnOjNbym5E5CgQ_RXGhg.webp',
  },
  {
    id: 4,
    name: '스폰지밥 3',
    imgUrl:
      'https://i.namu.wiki/i/-M6BoZmo2igm6JJaRJXJzpRPQQ9yQSJny-wzqQGxAnW4ymhuFuN8ag0t447LJKJ_MxSnOjNbym5E5CgQ_RXGhg.webp',
  },
];

const CheckPersonal = () => {
  return (
    <S.Container>
      <S.GenerateBox>
        <S.TitleWrapper>
          <S.AvartarTitle>아바타 생성 완료</S.AvartarTitle>
          <S.AvartarSubTitle>자신만의 아바타를 공유해 보세요!</S.AvartarSubTitle>
        </S.TitleWrapper>
        <S.CharacterMapWrapper>
          {dummy_data.map((data) => (
            <S.CharacterBox key={data.id}>
              <S.CharacterWrapper>
                <S.CharacterImgBox>
                  <S.CharacterImg src={data.imgUrl} />
                  <S.CharacterName>{data.name}</S.CharacterName>
                </S.CharacterImgBox>
                <S.OptionTag>
                  <S.StyledRadio type='radio' name='ratio' />
                </S.OptionTag>
              </S.CharacterWrapper>
            </S.CharacterBox>
          ))}
        </S.CharacterMapWrapper>
        <S.ButtonBox>
          <Button
            style={{
              width: '220px',
              height: '50px',
              backgroundColor: `${color.black[200]}`,
              border: 'none',
            }}
          >
            <span style={{ color: 'fff', fontSize: '15px', fontWeight: '500' }}>대화 시뮬레이션</span>
          </Button>
        </S.ButtonBox>
      </S.GenerateBox>
    </S.Container>
  );
};

export default CheckPersonal;
