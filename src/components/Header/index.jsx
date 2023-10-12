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
        <S.NavigateTextWrapper></S.NavigateTextWrapper>
      </S.HeaderTextWrapper>
    </S.HeaderWrapper>
  );
};

export default Header;
