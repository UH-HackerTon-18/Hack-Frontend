import { useNavigate } from 'react-router-dom';
import * as S from './style';
import mainLogo from 'assets/mirror.svg';

const Header = () => {
  const navigate = useNavigate();
  return (
    <S.HeaderWrapper>
      <S.HeaderTextWrapper>
        <S.HeaderLogoWrapper>
          <S.ImgLogo
            src={mainLogo}
            alt='mainLogo'
            onClick={() => {
              navigate('/');
            }}
          />
        </S.HeaderLogoWrapper>
        <S.NavigateTextWrapper>
          <S.TextBox>
            <S.Text>아바타 만들기</S.Text>
          </S.TextBox>
          <S.TextBox>
            <S.Text>오픈 API 사용하기</S.Text>
          </S.TextBox>
        </S.NavigateTextWrapper>
      </S.HeaderTextWrapper>
    </S.HeaderWrapper>
  );
};

export default Header;
