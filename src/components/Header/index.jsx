import * as S from './style';
import mainLogo from 'assets/mirror.svg';

const Header = () => {
  return (
    <S.HeaderWrapper>
      <S.HeaderTextWrapper>
        <S.HeaderLogoWrapper>
          <img src={mainLogo} alt='mainLogo' />
        </S.HeaderLogoWrapper>
        <S.NavigateTextWrapper></S.NavigateTextWrapper>
      </S.HeaderTextWrapper>
    </S.HeaderWrapper>
  );
};

export default Header;
