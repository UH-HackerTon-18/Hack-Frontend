import GlobalStyle from './styles/globalStyle';
import { RecoilRoot } from 'recoil'
import Router from 'router';
function App() {
  return (
    <>
     <RecoilRoot>
     <GlobalStyle />
      <Router />
     </RecoilRoot>
    </>
  );
}

export default App;
