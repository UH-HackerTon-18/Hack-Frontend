import * as S from './style';

const ModalView = ({ component, visible, onClose }) => {
  return (
    <S.ModalContainer>
      <S.ModalBackground hidden={!visible} onClick={onClose} />
      <S.ModalBox>{component}</S.ModalBox>
    </S.ModalContainer>
  );
};

export default ModalView;
