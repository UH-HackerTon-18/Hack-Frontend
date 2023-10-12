import React, { useEffect } from 'react';
import * as S from './style';
import { Button } from 'antd';
import color from 'styles/color';
import alart from 'assets/alert.svg';
import instance from 'apis';
import { useNavigate, useParams } from 'react-router-dom';

const CheckPersonal = () => {
  const [isClicked, setIsClicked] = React.useState([false, false, false, false, false]);
  const [userData, setUserData] = React.useState([]);
  const [checkNum, setCheckNum] = React.useState(null);

  const onClickId = (index) => {
    setCheckNum(index);
    setIsClicked((prev) => prev.map((_, idx) => idx === index));
  };

  const showButton = isClicked.some((value) => value === true);

  const world_id = useParams();

  useEffect(() => {
    instance.get(`/world/${world_id.id}`).then((res) => {
      setUserData(res.data.characters);
    });
  }, []);

  const navigate = useNavigate();

  const navigateToChat = () => {
    navigate(`/avatar/${userData[checkNum].id}`);
  };

  return (
    <S.BackGround>
      <S.Container>
        <S.GenerateBox>
          <S.TitleWrapper>
            <S.AvartarTitle>아바타 생성 완료</S.AvartarTitle>
            <S.AvartarSubTitle>자신만의 아바타를 공유해 보세요!</S.AvartarSubTitle>
          </S.TitleWrapper>
          <S.CharacterMapWrapper>
            {userData.map((data, index) => (
              <S.CharacterBox key={data.id}>
                <S.CharacterWrapper>
                  <S.CharacterImgBox>
                    <S.CharacterImg src={data.profile_image_url} />
                    <S.CharacterName>{data.name}</S.CharacterName>
                  </S.CharacterImgBox>
                  <S.OptionTag>
                    <S.StyledRadio
                      type='radio'
                      id={`${data.id}`}
                      onChange={() => onClickId(index)}
                      checked={isClicked[index]}
                      name='option'
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
                onClick={() => {
                  navigateToChat(checkNum);
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
            </S.ContentsWrapper>
          </S.ButtonBox>
        </S.GenerateBox>
      </S.Container>
    </S.BackGround>
  );
};

export default CheckPersonal;
