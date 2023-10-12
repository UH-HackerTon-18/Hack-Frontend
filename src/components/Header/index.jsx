import { useNavigate } from 'react-router-dom';
import * as S from './style';
import mainLogo from 'assets/mirror.svg';
import GenerateModal from 'components/GenerateModal';
import useModal from 'hooks/useModal';

const Header = () => {
  const navigate = useNavigate();
  const { openModal, closeModal } = useModal();

  const modalOpen = () => {
    console.log('modal');
    openModal({
      component: <GenerateModal closeModal={closeModal} />,
    });
  };

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
            <S.Text
              onClick={() => {
                navigate('/createAvartar');
              }}
            >
              아바타 만들기
            </S.Text>
          </S.TextBox>
          <S.TextBox>
            <S.Text onClick={modalOpen}>오픈 API 사용하기</S.Text>
          </S.TextBox>
          <S.TextBox>
            <S.Text onClick={() => {
              navigate('/avatar/chat')
            }}>id로 채팅하기</S.Text>
          </S.TextBox>
        </S.NavigateTextWrapper>
      </S.HeaderTextWrapper>
    </S.HeaderWrapper>
  );
};

export default Header;
