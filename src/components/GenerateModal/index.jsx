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
        <S.Text>노션링크</S.Text>
        <S.WhenText>https://www.notion.so/4810a22b45ce4929987755e239a0f9be?pvs=4</S.WhenText>
      </S.TextWidth>
    </S.Container>
  );
};

export default GenerateModal;
