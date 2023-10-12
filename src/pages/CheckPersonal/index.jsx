import React from 'react';
import * as S from './style';
import { Button } from 'antd';
import color from 'styles/color';
import alart from 'assets/alert.svg';

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
  const [isClicked, setIsClicked] = React.useState([false, false, false, false, false]);

  const onClickId = (id) => {
    setIsClicked((prev) => prev.map((item, index) => (index === id ? !item : item)));
  };

  const showButton = isClicked.some((value) => value === true);

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
                  <S.StyledRadio
                    type='radio'
                    id={`${data.id}`}
                    onClick={() => onClickId(data.id)}
                    checked={isClicked[data.id]}
                  />
                </S.OptionTag>
              </S.CharacterWrapper>
            </S.CharacterBox>
          ))}
        </S.CharacterMapWrapper>
        <S.ButtonBox>
          {showButton === true ? (
            <Button
              style={{
                width: '220px',
                height: '50px',
                backgroundColor: `${color.black[200]}`,
                border: 'none',
              }}
            >
              <span style={{ color: '#fff', fontSize: '15px', fontWeight: '600' }}>대화 시뮬레이션</span>
            </Button>
          ) : (
            <Button
              style={{
                width: '220px',
                height: '50px',
                backgroundColor: `${color.gray[400]}`,
                border: 'none',
                cursor: 'auto',
              }}
            >
              <span style={{ color: '#fff', fontSize: '15px', fontWeight: '600' }}>대화 시뮬레이션</span>
            </Button>
          )}
          <S.ContentsWrapper>
            <S.ImgWrapper>
              <img src={alart} alt='' />
            </S.ImgWrapper>
            <S.Text>아바타끼리 대화를 시킬 수 있어요</S.Text>
          </S.ContentsWrapper>
        </S.ButtonBox>
      </S.GenerateBox>
    </S.Container>
  );
};

export default CheckPersonal;
