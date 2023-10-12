import useModal from 'hooks/useModal';
import { useRecoilState } from 'recoil';
import ModalView from './View';
import modalStore from 'store/modal';

const Modal = () => {
  const [modal] = useRecoilState(modalStore);
  const { closeModal } = useModal();

  return (
    <ModalView
      {...modal}
      onClose={() => {
        modal.onClose?.();
        if (!modal.menualClose) {
          closeModal();
        }
      }}
    />
  );
};

export default Modal;
