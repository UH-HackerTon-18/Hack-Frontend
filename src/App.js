import Modal from 'components/Modal';
import GlobalStyle from './styles/globalStyle';
import { RecoilRoot } from 'recoil';
import Router from 'router';
function App() {
  return (
    <>
      <RecoilRoot>
        <Modal />
        <GlobalStyle />
        <Router />
      </RecoilRoot>
    </>
  );
}

export default App;
