import CloseIcon from 'assets/CloseIcon';
import * as S from './style';

const GenerateModal = ({ closeModal }) => {
  return (
    <S.Container>
      <S.Header>
        <S.ModalTitle>오픈 API로 사용하기</S.ModalTitle>
        <CloseIcon onClick={closeModal} style={{ cursor: 'pointer' }} />
      </S.Header>
      <S.TextWidth>
        <S.Text>아바타 id</S.Text>
        <S.WhenText>데이터 id</S.WhenText>
      </S.TextWidth>
    </S.Container>
  );
};

export default GenerateModal;
