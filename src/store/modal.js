import { atom } from 'recoil';

const modalStore = atom({
  key: 'modalStore',
  default: {
    component: null,
    visible: false,
  },
});

export default modalStore;
