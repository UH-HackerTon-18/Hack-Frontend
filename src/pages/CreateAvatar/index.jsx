import React from 'react';
import * as S from './style';
import plusIcon from 'assets/plusBtn.svg';
import { useMutation } from 'react-query';
import LoadingPage from 'pages/LodingPage';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreateAvartar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const [selectedGender, setSelectedGender] = React.useState('');
  const [worldText, setWorldText] = React.useState('');
  const [countCharacter, setCountCharacter] = React.useState(0);
  const [character, setCharacter] = React.useState('');

  const [species, setSpecies] = React.useState(0);
  const [name, setName] = React.useState('');
  const [gender, setGender] = React.useState(0);
  const [age, setAge] = React.useState();
  const [kind, setKind] = React.useState('');
  const [backGroundStory, setBackGroundStory] = React.useState('');
  const [style, setStyle] = React.useState('');

  const handleGenderChange = (event) => {
    setSelectedGender(event.target.id);
  };

  const worldChange = (e) => {
    setWorldText(e.target.value);
  };

  const countChange = (e) => {
    setCountCharacter(e.target.value);
  };

  const species2 = selectedGender === '0' ? species === '인외' : '인간';

  const onChangeCharacter = (e) => {
    setCharacter(e.target.value); // 성격특성
  };

  const onChangeName = (e) => {
    setName(e.target.value); // 이름
  };

  const onChangeGender = (e) => {
    setGender(e.target.value);
  };

  const onChangeKind = (e) => {
    setKind(e.target.value);
  };

  const onChangeBackgroundStory = (e) => {
    setBackGroundStory(e.target.value);
  };

  const onChangeonChangeStyle = (e) => {
    setStyle(e.target.value);
  };

  const onChangeAge = (e) => {
    setAge(e.target.value);
  };

  const trueGender = gender === '0' ? '여성' : '남성';

  const instance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    timeout: 120000,
  });

  const postCode = async (userInfo) => {
    return await instance.post('/', userInfo);
  };

  const generated = () => {
    const userInfo = {
      character_count: countCharacter,
      world_story: worldText,
      main_character: {
        species: species2,
        species_explain: character,
        style: style,
        name,
        gender: trueGender,
        age,
        character: kind,
        background_story: backGroundStory,
      },
    };

    mutate(userInfo);
  };

  const navigate = useNavigate();

  const { mutate, isLoading } = useMutation(postCode, {
    onSuccess: (data) => {
      const id = data.data.world_id;
      console.log(data.data.world_id);
      navigate(`/completeAvartar/${id}`);
      toast.success('캐릭터 생성 성공!');
    },
    onError: (error) => {
      console.log(error);
      toast.error('캐릭터 생성 실패!');
    },
  });

  if (isLoading) return <LoadingPage />;

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
              <S.InputText type='text' onChange={worldChange} />
            </S.WorldTextInputWrapper>
          </S.WorldTypeBox>
          <S.GenderWrapper2>
            <div>
              <S.TextSubTitle>캐릭터 수</S.TextSubTitle>
              <S.Input type='number' min='1' max='5' value={countCharacter} onChange={countChange} />
            </div>
          </S.GenderWrapper2>
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
                    <span style={{ marginRight: '5px' }} value={gender} onChange={onChangeGender}>
                      남성
                    </span>
                    <S.StyledRadio type='radio' name='ratio' />
                    <span style={{ marginRight: '5px', marginLeft: '10px' }} value={gender} onChange={onChangeGender}>
                      여성
                    </span>
                    <S.StyledRadio type='radio' name='ratio' />
                  </S.optionBox>
                </div>
              </S.GenderWrapper>
              <S.GenderWrapper2>
                <div>
                  <S.TextSubTitle>나이</S.TextSubTitle>
                  <S.Input type='number' min='1' max='100' onChange={onChangeAge} />
                </div>
              </S.GenderWrapper2>
              <S.GenderWrapper5>
                <div>
                  <S.TextSubTitle>종족</S.TextSubTitle>
                  <S.optionBox>
                    <span style={{ marginRight: '5px' }}>인간</span>
                    <S.StyledRadio type='radio' name='ratio2' id='1' onClick={handleGenderChange} />
                    <span style={{ marginRight: '5px', marginLeft: '10px' }}>인외</span>
                    <S.StyledRadio type='radio' name='ratio2' id='2' onClick={handleGenderChange} />
                    <span style={{ marginRight: '5px', marginLeft: '10px' }}>이름: </span>
                    <S.Input2 type='text' onChange={onChangeName} />
                  </S.optionBox>
                </div>
              </S.GenderWrapper5>
              {selectedGender === '2' && (
                <S.GenderWrapper4>
                  <S.TextSubTitle2>화풍</S.TextSubTitle2>
                  <S.WorldTextInputWrapper2>
                    <S.InputText2 type='text' onChange={onChangeonChangeStyle} />
                  </S.WorldTextInputWrapper2>
                </S.GenderWrapper4>
              )}
              <S.GenderWrapper3>
                <S.TextSubTitle2>종족특성</S.TextSubTitle2>
                <S.WorldTextInputWrapper>
                  <S.InputText type='text' onChange={onChangeCharacter} />
                </S.WorldTextInputWrapper>
              </S.GenderWrapper3>
              <S.GenderWrapper3>
                <S.TextSubTitle2>성격특성</S.TextSubTitle2>
                <S.WorldTextInputWrapper>
                  <S.InputText type='text' onChange={onChangeKind} />
                </S.WorldTextInputWrapper>
              </S.GenderWrapper3>
              <S.GenderWrapper3>
                <S.TextSubTitle2>배경스토리</S.TextSubTitle2>
                <S.WorldTextInputWrapper>
                  <S.InputText type='text' onChange={onChangeBackgroundStory} />
                </S.WorldTextInputWrapper>
              </S.GenderWrapper3>
              <S.ButtonWrapper>
                <S.Button onClick={generated}>만들기</S.Button>
              </S.ButtonWrapper>
            </S.CharacterMainTitleWrapper>
          </S.CharacterInfo>
        ) : (
          <>
            <S.PlusTextWrapper onClick={() => {
              setIsOpen(true);
            }}>
              <S.PlusText>
                <S.PlusImg
                  src={plusIcon}
                  alt=''
                />
                <S.Option>캐릭터 상세 설정 추가</S.Option>
              </S.PlusText>
            </S.PlusTextWrapper>
            <S.ButtonWrapper>
              <S.Button onClick={generated}>만들기</S.Button>
            </S.ButtonWrapper>
          </>
        )}
      </S.AnswerWrapper>
    </S.Container>
  );
};

export default CreateAvartar;
