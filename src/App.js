import Modal from 'components/Modal';
import GlobalStyle from './styles/globalStyle';
import { RecoilRoot } from 'recoil';
import Router from 'router';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 0,
    },
  },
});

function App() {
  return (
    <>
      <RecoilRoot>
        <QueryClientProvider client={queryClient}>
          <Modal />
          <GlobalStyle />
          <Router />
        </QueryClientProvider>
      </RecoilRoot>
    </>
  );
}

export default App;
